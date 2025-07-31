import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  userId: String,
  _id: String,
  name: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [cartItemSchema],
});

export default mongoose.model("Cart", cartSchema);
