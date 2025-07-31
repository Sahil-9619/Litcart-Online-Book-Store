import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OrderPlaced = () => {
    const navigate = useNavigate();
    const [showCheck, setShowCheck] = useState(false);

  // Small delay before showing checkmark animation
  useEffect(() => {
    const timer = setTimeout(() => setShowCheck(true), 300);
    return () => clearTimeout(timer);
  }, []);



  return (
  

    <div className="flex flex-col justify-center items-center h-screen bg-green-50 text-center px-4">
      
      {/* ✅ Checkmark Animation */}
      <div className="relative">
        {/* Circle */}
        <div className="w-24 h-24 rounded-full border-4 border-green-500 flex justify-center items-center shadow-lg animate-pulse"></div>

        {/* ✅ Checkmark appears with animation */}
        {showCheck && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-green-600 absolute top-4 left-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* ✅ Success Text */}
      <h1 className="text-3xl font-bold text-green-700 mt-6 animate-fadeIn">
        🎉 Order Placed Successfully!
      </h1>
      <p className="text-gray-700 mt-2 text-lg">
        Thank you for shopping with us. Your order is on the way!
      </p>

      {/* ✅ Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        ⬅ Back to Home
      </button>
    </div>

  )
}

export default OrderPlaced
