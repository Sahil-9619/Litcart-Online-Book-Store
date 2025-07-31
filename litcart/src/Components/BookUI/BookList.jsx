import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fetchBooksByCategory } from "../../api/categoryapi";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const {categoryName} = useParams();
  const location = useLocation();
  const searchResults = location.state?.searchResults || null;


  //Fetch cooksbooks from backend when component loads
  useEffect(() => {
    const getBooks = async() => {
      if (searchResults){
        setBooks(searchResults);
      }else{
      const data = await fetchBooksByCategory(categoryName);
      setBooks(data);
      }
    };
    getBooks();
  }, [categoryName, searchResults]);

  const [selectedBook, setSelectedBook] = useState([]);
   useEffect(() => {
   if (selectedBook && selectedBook._id) {
    navigate(`/category/${categoryName}/${selectedBook._id}`);
navigate(`/category/${categoryName}/${selectedBook._id}`);

console.log("sending id:", `${selectedBook._id}`);

   }
 }, [selectedBook, navigate]);

   return (
  <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 py-12">
    {/* ✅ Header Section */}
    <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
      <h1 className="text-4xl font-bold text-slate-800">
        📚 Our Book Collection
      </h1>
      <p className="text-slate-500 mt-2">
        Discover our carefully selected titles for a better you
      </p>
    </div>

    {/* ✅ Professional Light List */}
    <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-sm shadow-md rounded-xl overflow-hidden border border-blue-100">
      {books.map((book, index) => (
        <div
          key={book._id}
          onClick={() => setSelectedBook(book)}
          className={`flex items-center w-full px-8 py-10 cursor-pointer transition hover:bg-blue-50/60 ${
            index !== books.length - 1 ? "border-b border-blue-100" : ""
          }`}
        >
          {/* Book Cover */}
          <div className="flex-shrink-0">
            <img
              src={book["Picture URL"]}
              alt={book["Book Title"]}
              className="w-28 h-40 object-cover rounded-md shadow-sm ring-1 ring-blue-100"
            />
          </div>

          {/* Book Info */}
          <div className="flex-1 pl-8">
            <h2 className="text-2xl font-semibold text-slate-800">
              {book["Book Title"]}
            </h2>
            <h5 className="text-slate-500 mt-1 font-semibold italic">
              by {book["Author"]}
            </h5>
            <h6 className="text-sm text-slate-400 mt-3 line-clamp-2">
              {book["Synopsis"]}
            </h6>
          </div>

          {/* Price + Arrow */}
          <div className="text-right">
            <p className="text-xl font-bold text-blue-600">₹{book["Price"]}</p>
            <span className="text-blue-400 text-2xl block mt-4 transition transform group-hover:translate-x-1">
              ➜
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}