import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  // Example book data (can be fetched dynamically)
  const book = {
    id: 1,
    name: "Harry Potter",
    price: 430,
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    quantity: 1,
    orderDate: "2025-07-21",
    status: "Delivered",
    address: "123 Main Street, New Delhi, India",
    paymentMethod: "Online Payment",
  };

  return (
    <div className="bg-lime-100/30 min-h-screen py-8">
      {/* Back button */}
      <div className="container mx-auto px-4">
        <Link
          to="/myorders"
          className="text-blue-500 hover:underline text-sm"
        >
          ← Back to My Orders
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-6 bg-white shadow-md rounded-lg p-6 max-w-md">
        {/* Book Image Centered */}
         <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.name}
            className="w-60 h-90 object-cover rounded-md shadow"
          />
        </div>
        <h2 className="text-xl font-semibold text-center mt-2">{book.name}</h2>

        {/* Order Details */}
        <div className="mt-6 space-y-3 text-gray-700">
          <h3><span className="font-semibold">Price:</span> ₹{book.price}</h3>
          <h3><span className="font-semibold">Quantity:</span> {book.quantity}</h3>
          <h3><span className="font-semibold">Order Date:</span> {book.orderDate}</h3>
          <h3><span className="font-semibold">Status:</span> {book.status}</h3>
          <h3><span className="font-semibold">Delivery Address:</span> {book.address}</h3>
          <h3><span className="font-semibold">Payment Method:</span> {book.paymentMethod}</h3>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Cancel Order
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Link to="/contactus">Contact Support</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
