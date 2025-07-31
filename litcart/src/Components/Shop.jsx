import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "📒 Spirituality",
    "👤 Autobiography",
    "📚 History",
    "📷 Photography",
    "🔥 Science",
    "🌍 Travel",
    "💻 Technology",
    "💡 Self-help",
    "🔍 Cookbooks",
    "🔍 Mystery",
    "👻 Horror",
    "🧩 Thriller",
    "🏰 Historical Fiction",
    "📖 Literary Fiction",
    "🚀 Science Fiction",
    "💥 Action",
    "🧙 Fantasy",
  ];

 const handleCategoryClick = (cat) => {
  const cleanedCat = cat.replace(/[^a-zA-Z ]/g, "").toLowerCase().trim().replace(/\s+/g, "-");
  navigate(`/category/${cleanedCat}`);
  setOpen(false);
};


  return (
    <div className="relative inline-block text-left hover: cursor-pointer">
      <button onClick={() => setOpen(!open)}>
        Shop⌄
      </button>

      {open && (
        <div className="absolute mt-2 w-56 bg-gray-200 rounded-md shadow-lg border border-gray-300 z-10">
          <ul className="max-h-60 overflow-y-auto">
            {categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(cat)}
                className="px-4 py-2 text-gray-800 hover:bg-white cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Shop;
