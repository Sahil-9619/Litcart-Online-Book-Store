/*import express from "express";
import { addToCart, getCart } from "../controllers/cartController.js";

const router = express.Router();

// Add to cart
router.post("/add", addToCart);

// Get cart by userId
router.get("/:userId", getCart);

export default router;
*/

const express = require("express");
const { addToCart, getCart, deleteCartItem, updateCartQuantity } = require("../controllers/cartController");

const router = express.Router();

// Route to add an item to cart
router.post("/add", addToCart);

// Route to get cart items for a specific user
router.get("/:userId", getCart);

// DELETE 
router.delete("/:id", deleteCartItem);

//update
router.put("/update/:id", updateCartQuantity);

module.exports = router;
