import React from 'react'
import { useEffect, useState } from 'react';
import './Body.css'
import Timer from './homepage components/Timer';
import { Link } from 'react-router-dom';
import { fetchNewArrivals } from '../../api/newarrivalsapi';
import { motion, AnimatePresence, scale } from "framer-motion";
import { Rotate3D } from 'lucide-react';

//feature sec
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'

//trending sec 

import t1 from './t1.png'
import t2 from './t2.png'
import t3 from './t3.png'
import t4 from './t4.png'


const Body = () => {

  const trendingPosters = [t2,t3,t1,t4];
 
  const posters = [pic2,pic1];

  const [newarrival, setNewArrival] = useState([]); //empty initially

  
  const sales=[
    { name: "Think Like a Monk", price: 430, image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg" },
    { name: "The Subtle Art of Not Giving a F*ck", price: 375, image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg" },
    { name: "Ikigai", price: 280, image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" },
    { name: "Atomic Habits", price: 499, image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Deep Work", price: 450, image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg" },
    { name: "Rich Dad Poor Dad", price: 399, image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" },
  ];

//feature section
const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

//trending-slider state
const [currentSlide, setCurrentSlide] = useState(0);
// ✅ Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingPosters.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingPosters.length]);
   
  // ✅ Sales Section Auto-Rotation
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + visibleCount) % sales.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sales.length, visibleCount]);

  const getVisibleBooks = () => {
    let visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(sales[(index + i) % sales.length]);
    }
    return visible;
  };
 
useEffect(() => {
  fetchNewArrivals()
    .then((data) => {
      if (!Array.isArray(data)) {
        console.error("API returned unexpected format:", data);
        return;
      }

      const mapped = data.map((book) => ({
        id: book._id,
        name: book["Book Title"],
        price: book["Price"],
        image: book["Picture URL"],
        category: "newarrivals",
      }));

      setNewArrival(mapped);
    })
    .catch((err) => {
      console.error("Error fetching new arrivals:", err);
    });
}, []);

  
 return (
    <div className="text-black w-full mt-20">
    {/* ✅ TRENDING SLIDER FULL WIDTH (NO BUTTONS) */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={trendingPosters[currentSlide]}
            alt="Trending"
            className="absolute w-full h-full object-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* ✅ SALES SECTION */}
      <div className="bg-[#f4e9d0] py-10 px-4 flex flex-col justify-center items-center text-center">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">🔥 LitCart Sales</h1>
          <p className="text-sm md:text-lg">
            Enjoy up to 40% off on selected books. Limited Time only!
          </p>
          <div className="font-semibold flex flex-col items-center text-center mt-2">
            Sales ends in: <Timer initialSeconds={3000} />
          </div>
        </div>

        {/* ✅ Auto-Rotating Books */}
        <div className="relative w-full max-w-5xl overflow-hidden flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className={`grid gap-6 ${
                visibleCount === 1
                  ? "grid-cols-1"
                  : visibleCount === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              } justify-items-center`}
            >
              {getVisibleBooks().map((book) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={book.name}
                  className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-56"
                >
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-40 h-56 object-cover rounded-md"
                  />
                  <p className="mt-2 font-semibold text-center">{book.name}</p>
                  <p className="text-gray-700 font-bold">₹{book.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
        
        {/*feature-section*/}
      {/*feature section */}
<div className="relative w-screen h-video overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{ x: `-${current * 100}vw` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ width: `${posters.length * 100}vw` }}
      >
        {posters.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`poster-${index}`}
            className="w-screen h-full object-auto"
          />
        ))}
      </motion.div>
    </div>

      {/* ✅ New Arrivals Section */}
      <div className="bg-[#ecebeb] py-10 px-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">New Arrivals</h1>
        <p className="text-sm md:text-lg mb-6">Freshly added books to enrich your collection.</p>

        {/* ✅ New Arrivals Grid → 2 per row on phones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newarrival.map((el, idx) => (
            <motion.div key={idx} 
            whileHover={{
              scale:1.07,
              rotate:-1.5,
              boxshadow:"0px 10px 20px rgba(0,0,0,0.2)"
            }}
            transition={{type:"spring",stiffness:200,damping:12}}
            className="bg-white rounded-md p-2 shadow-md flex flex-col items-center">
              <Link to={`/category/${el.category}/${el.id}`}>
              <img
                src={el.image}
                alt={el.name}
                className="w-40 h-56 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded shadow-md object-cover"
              />
              </Link>
              <p className="mt-2 font-semibold text-center">{el.name}</p>
              <p className="text-gray-700">₹{el.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Back to Top */}
      <div id="backtoTop" className="bg-gray-500 text-white text-center">
        <button
          className="text-emerald-200 font-semibold hover:text-white cursor-pointer py-2"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </button>
      </div>

    </div>
  );
};

export default Body;
