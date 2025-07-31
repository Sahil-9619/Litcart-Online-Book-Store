import { useEffect } from "react";
import { Link } from "react-router-dom";
import logoUsed from "../logoused.jpg";

function EmptyCart() {
  useEffect(() => {
    const cartContainer = document.querySelector(".cart-container");

    setTimeout(() => {
      cartContainer.classList.add("animate_animated", "animate_fadeIn");
    }, 300);

    const buttons = document.querySelectorAll("a");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.classList.add("animate_animated", "animate_pulse");
      });
      button.addEventListener("mouseleave", () => {
        setTimeout(() => {
          button.classList.remove("animate_animated", "animate_pulse");
        }, 1000);
      });
    });

    const colors = [
      "from-blue-50 to-purple-50",
      "from-purple-50 to-pink-50",
      "from-pink-50 to-indigo-50",
      "from-indigo-50 to-green-50",
      "from-green-50 to-blue-50",
    ];
    let currentColor = 0;

    function changeBackground() {
      currentColor = (currentColor + 1) % colors.length;
      document.body.className = `font-sans bg-gradient-to-br ${colors[currentColor]} gradient-bg`;
    }

    const interval = setInterval(changeBackground, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="sticky top-0 bg-black/95 shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div
            className="w-20 h-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${logoUsed})` }}
          ></div>

          <div className="text-white text-center">
            <h1 className="text-xl font-semibold">My Cart</h1>
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

      {/* CART CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-4 lg:px-6 py-6">
        <div className="cart-container bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden p-6 md:p-8 text-center transition-transform duration-300 hover:scale-[1.01]">
          <div className="empty-cart-illustration max-w-xs mx-auto mb-4">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a35f49c9-392e-4002-a660-907f62e4fc60.png"
              alt="Empty shopping cart illustration with sad face icon"
              className="mx-auto"
            />
            <p className="text-gray-700 mt-6 text-lg font-semibold">
              Your cart is currently empty
            </p>
            <p className="text-md text-gray-500">
              Add some items to get started!
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link
              to="/"
              className="px-6 py-3 rounded-lg shadow-md text-white font-semibold text-sm 
                bg-indigo-500 border border-indigo-400 
                transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:scale-105"
            >
              Browse Items
            </Link>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
