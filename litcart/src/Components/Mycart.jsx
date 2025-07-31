import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Emptycart from "./Empty/Emptycart";
import Cookies from "js-cookie";

const Mycart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCart = async () => {
      const userId = Cookies.get("userId");
      if (!userId) return;

      try {
        const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
        const data = await res.json();
        setCartItems(data.items || []);
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    };
    fetchCart();
  }, []);

  // Update quantity
  const updateQuantity = async (id, newQty) => {
    if (newQty < 1) return;

    try {
      const res = await fetch(`http://localhost:5000/api/cart/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQty }),
      });
      const data = await res.json();
      const updatedItem = data.item;
      setCartItems((prev) =>
        prev.map((item) => (item._id === id ? updatedItem : item))
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  // Remove item
  const handleRemove = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: "DELETE",
      });
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Remove failed:", error);
    }
  };

  // Handle Buy One
  const handleBuyOne = (el) => {
    console.log("Buying one:", el);
    // Optional: you can send this item to backend before redirecting
  };

  // Handle Buy All
  const handleBuyAll = () => {
    console.log("Buying all items:", cartItems);
    // Optional: send cartItems to backend before redirecting
  };

  const totalPrice = cartItems?.reduce((total, item) => {
    return total + (item?.price || 0) * (item?.quantity || 0);
  }, 0);

  if (cartItems.length === 0) {
    return <Emptycart />;
  }

  return (
    <div className="bg-[#FFF0F5] min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 bg-black/95 shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="text-white text-center">
            <h1>My Cart</h1>
            <p className="text-gray-400">Add your items here!</p>
          </div>
          <Link
            to="/"
            className="text-emerald-500 font-semibold hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Cart Items */}
      <main className="container mx-auto px-4 py-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {cartItems
          .filter((el) => el !== undefined)
          .map((el) => {
             console.log("cart item:", el); 
            
            return(
            <div
              key={el._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={el.image}
                alt={el.name}
                className="w-32 h-40 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-800 text-center">
                {el.name}
              </h3>
              <p className="text-gray-600">₹{el.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => updateQuantity(el._id, el.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  –
                </button>
                <span className="font-medium">{el.quantity}</span>
                <button
                  onClick={() => updateQuantity(el._id, el.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Total for this item */}
              <p className="mt-2 text-sm text-gray-700">
                Total: ₹{el.price * el.quantity}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleRemove(el._id)}
                  className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleBuyOne(el)}
                  className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-green-600"
                >
                  <Link to="/address">Buy now</Link>
                </button>
              </div>
            </div>
            );
          })}

        </div>

        {/* Buy All Section */}
        <div className="mt-10 p-5 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Total Cart Value: ₹{totalPrice}
          </h2>
          <p className="text-gray-500 text-sm">
            ({cartItems.length} items in your cart)
          </p>
          <button
            onClick={handleBuyAll}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            <Link to="/address">Buy all</Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Mycart;
