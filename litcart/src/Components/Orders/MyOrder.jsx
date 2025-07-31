import React from "react";
import logoUsed from "../logoused.jpg";
import { Link } from "react-router-dom";
import EmptyOrder from "../Empty/EmptyOrder";


const Myorder = () => {
  const orders = [
    {
      id: 1,
      name: "Think Like a Monk",
      price: 430,
      image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "The Subtle Art of Not Giving a Fuck",
      price: 375,
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Ikigai",
      price: 280,
      image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Atomic Habits",
      price: 499,
      image:
        "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
      quantity: 1,
    },
  ];

  if (orders.length === 0) {
    return <EmptyOrder />;
  }

  return (
    <div className="bg-lime-100/30 min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 bg-black/95 shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div
            className="w-20 h-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${logoUsed})` }}
          ></div>
          <div className="text-white text-center">
            <h1 className="text-xl font-bold">My Orders</h1>
            <p className="text-gray-400 text-sm">Orders you have placed!</p>
          </div>
          <Link
            to="/"
            className="text-emerald-500 font-semibold hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Orders List */}
      <div className="container mx-auto px-4 py-8 space-y-2">
        {orders.map((el) => (
          <div
            key={el.id}
            className="h-60 flex items-center justify-between bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            {/* LEFT: Book Image */}
            <div className="flex-shrink-0 w-20 h-28">
              <img
                src={el.image}
                alt={el.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* MIDDLE: Book Name */}
            <div className="flex-1 px-6">
              <h3 className="font-semibold text-lg text-gray-800">
                {el.name}
              </h3>
            </div>

            {/* RIGHT: Order Details */}
            <div className="text-right">
              <p className="text-gray-500 text-sm">Qty: {el.quantity}</p>
              <p className="text-gray-600 font-medium">Total: ₹{el.price}</p>
              <button className="mt-2 px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md shadow hover:scale-105 transition">
               <Link to="/orderdetails"> View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorder;
