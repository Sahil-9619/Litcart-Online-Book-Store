import React from "react";
import { Link } from "react-router-dom";
import logoUsed from "./logoused.jpg";
import Cookies from 'js-cookie';

const userName = Cookies.get("LitcartUserName");
 console.log("username from cookie:", userName); // Debugging

const AboutUs = () => {
  return (
    <div>
      <nav className="sticky top-0 bg-black shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div
            className="w-20 h-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${logoUsed})` }}
          ></div>

          <div className="text-white text-center">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p className="text-gray-400">Know about us!</p>
          </div>

          <Link
            to="/"
            className="text-emerald-500 font-semibold hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </nav>
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12 max-w-screen mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Hello {userName ? userName: "User"}</h1>

      <p className="text-lg mb-4">
        Welcome to <strong>LitCart</strong>, your one-stop online bookstore designed for every book lover out there. Whether you're a fan of thrilling fiction, insightful non-fiction, academic guides, or children's tales — we’ve got you covered!
      </p>

      <p className="text-lg mb-4">
        At LitCart, we’re committed to offering a seamless experience for book buyers and sellers. Our platform supports both brand new and refurbished books at affordable prices. Every book comes with detailed information including title, author, publisher, publish date, synopsis, dimensions, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Wide range of book categories: Fiction, Non-fiction, Academic, Children’s Books & more</li>
        <li>Search Bar with advanced filters (title, author, genre, price)</li>
        <li>Featured Books, Bestsellers, and New Arrivals</li>
        <li>Detailed Book Pages with images, prices, reviews, and “Buy Now” options</li>
        <li>Support for buying and selling refurbished books</li>
        <li>Dark Mode / Light Mode support (optional)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Shopping & Checkout</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Cart system to add, remove, and update items</li>
        <li>Secure checkout process with multiple payment options</li>
        <li>Shipping options, delivery tracking, and invoice generation</li>
        <li>Apply coupons and receive discounts</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">User Account Features</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>User registration, login, and profile management</li>
        <li>View order history, manage addresses, and create wishlists</li>
        <li>Save books for later and stay updated with email alerts</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">For Admins & Sellers</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Inventory and catalog management</li>
        <li>Add, edit, or delete books</li>
        <li>Track stock, manage discounts, and monitor sales</li>
        <li>Analytics dashboard with insights and performance stats</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Engagement & Support</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Customer reviews, ratings, and comment sections</li>
        <li>Newsletter subscription for updates and offers</li>
        <li>AI-based book recommendations</li>
        <li>Push notifications, voice search, and multilingual support</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Built With Modern Technology</h2>
      <p className="text-lg mb-4">
        Our tech stack includes <strong>HTML, CSS, Tailwind CSS, Node.js, React.js, Express.js, and MongoDB</strong> — ensuring a fast, secure, and scalable platform. With responsive design and user-friendly navigation, LitCart is accessible on all devices.
      </p>

      <p className="text-lg mt-8">
        Thank you for being part of the LitCart community. Happy Reading 📚
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
