import React from "react";
import { motion } from "framer-motion";

const EmptyOrder = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      
      {/* ✅ Animated floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-40 h-40 bg-teal-200 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* ✅ Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 shadow-xl"
        >
          <span className="text-6xl text-white">🛒</span>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-8">
          No Orders Yet!
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          It looks like you haven’t placed any orders yet. Browse our collection and start shopping now!
        </p>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
          onClick={() => alert("Go to Shop!")}
        >
          🛍 Browse Books
        </motion.button>
      </motion.div>
    </div>
  );
}

export default EmptyOrder
