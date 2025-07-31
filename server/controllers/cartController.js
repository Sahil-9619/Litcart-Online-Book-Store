import Cart from '../models/Cart.js';
import mongoose from 'mongoose';

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.cookies.userId || req.body.userId || req.params.userId;
    const {item} = req.body;

    // Validate input
    if (!userId || !item || !item._id) {
      return res.status(400).json({ error: 'Missing required fields: userId or item._id' });
      
    }

    // Find existing cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ ...item, quantity: item.quantity || 1 }],
      });
    } else {
      const existingItem = cart.items.find(i => i._id.toString() === item._id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        cart.items.push({ ...item, quantity: item.quantity || 1 });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in addToCart:", error.message);
    res.status(500).json({ error: 'Error adding item to cart' });
  }
};

// Get cart items
export const getCart = async (req, res) => {
  try {
     console.log("req.cookies", req.cookies); 
    const userId =  req.params.userId;

    if (!userId) return res.status(400).json({ error: "Missing userId" });

    const cart = await Cart.findOne({ userId: new mongoose.Types.ObjectId(userId) });
    if (!cart) return res.status(200).json({ items: [] });

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in getCart:", error.message);
    res.status(500).json({ error: 'Error fetching cart' });
  }
};


// Delete cart item
export const deleteCartItem = async(req, res) => {
  try{
    const itemId = req.params.id;

    //find the cart which has this item -----
    const cart = await Cart.findOne({"items._id":itemId});

    if (!cart){
      return res.status(404).json({message:"Cart item not found"});
    }

    //Remove item from items array
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);

    await cart.save();
    res.status(200).json({message:"Item deleted successfully"});

  }catch(error){
    console.error("Error deleting cart item:", error.message);
    res.status(500).json({message:"Server error"});
  }
};

//add and update quantity
export const updateCartQuantity = async (req, res) => {
  try{
    const {id} = req.params;
    const {quantity} = req.body;

    if(!id || !quantity){
      return res.status(400).json({error: "Missing itemId or action"});
    }

    const cart = await Cart.findOne({"items._id":id});
    if(!cart){
      return res.status(404).json({error: "Cart not found"});
    }

    const item = cart.items.id(id);
    if(quantity === "increment"){
      item.quantity+=1;
    }else if(quantity === "decrement" && item.quantity>1){
      item.quantity-=1;
    }

    await cart.save();
    res.status(200).json(cart);
  }catch(err){
    console.error("Error updating quantity:", err.message);
    res.status(500).json({error: "Failed to update quantity"});
  }
};