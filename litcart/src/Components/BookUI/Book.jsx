import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from 'js-cookie';

export default function Book() {
  const { categoryName, _id } = useParams();
  console.log("categoryName:", categoryName); // ✅ Check this
console.log("_id:", _id);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const [_category, ...rest] = _id.split("-");
        const id = `${categoryName}-${rest.join("-")}`;
        const res = await fetch(`http://localhost:5000/api/books/category/${categoryName}/${_id}`);
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [_id, categoryName]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading book details...</p>
      </div>
    );
  }

  const handleAddToCart = async () => {
  try {
    const userId = Cookies.get('userId');
    console.log("userId from cookie:", userId); 
    if (!userId) {
      alert("Please login first to add to cart!");
      return;
    }

    const res = await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId,
        item: {
          _id: book._id,
          name: book["Book Title"],
          price: book["Price"],
          image: book["Picture URL"],
        },
      }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Book added to cart:", data);
      alert("Book added to cart!");
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    console.error("Error adding book to cart:", error);
    alert("Something went wrong!");
  }
};

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f7f3] to-[#f1efe8] flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2"
      >
        {/* LEFT: BOOK IMAGE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex justify-center items-center bg-[#e9f3ff] p-10"
        >
          <img
            src={book["Picture URL"]}
            alt={book["Book Title"]}
            className="w-[340px] h-[480px] object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* RIGHT: BOOK INFO */}
        <div className="p-8 flex flex-col justify-center bg-white text-[#1f2937]">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl font-extrabold leading-snug text-[#1e3a5f]"
          >
            {book["Book Title"]}
          </motion.h1>

          <motion.h6
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-md text-gray-600 mt-1 italic font-semibold"
          >
            Author: {book["Author"]}
          </motion.h6>

          <motion.h6
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-md text-gray-600 mt-1 italic font-semibold"
          >
            Published By: {book["Publisher"]}
          </motion.h6>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-[#f9fafb] border border-gray-200 p-4 rounded-lg mt-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-[#1e3a5f]">
              📖 Description:
            </h2>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {book["Synopsis"]}
            </p>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-[#f9fafb] border border-gray-200 p-4 rounded-lg mt-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-[#1e3a5f]">
              📚 Book Details
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>✅ <b>Published:</b> {book["Publish Date"]}</li>
              <li>✅ <b>Pages:</b> {book["Pages"]}</li>
              <li>✅ <b>Language:</b> {book["Language"]}</li>
              <li>✅ <b>Dimensions:</b> {book["Dimensions"]}</li>
              <li>✅ <b>Subjects:</b> {book["Subjects"]?.join(", ")}</li>
            </ul>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6"
          >
            <span className="text-2xl text-[#1e3a5f] font-bold">Price:</span>{" "}
            <span className="text-3xl font-bold text-black">₹{book["Price"]}</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <button onClick={handleAddToCart} disabled={!book} className="px-6 py-3 rounded-lg shadow-md text-white text-lg font-medium bg-teal-800 hover:bg-teal-600 hover:scale-105 transition-all duration-300">
              🛒 Add to Cart
            </button>
            <Link to="/address">
            <button className="px-6 py-3 rounded-lg shadow-md text-white text-lg font-medium bg-blue-500 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
             🛍️ Buy now
            </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
