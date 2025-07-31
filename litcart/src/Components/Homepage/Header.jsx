import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccSwitch from './homepage components/AccSwitch';
import Shop from '../Shop';
import Cookies from 'js-cookie';
import { searchBooks } from '../../api/searchapi';
import { useNavigate } from "react-router-dom";


// Icons
import { faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const updateUserName = () => {
      const nameFromCookie = Cookies.get('LitcartUserName');
      setUserName(nameFromCookie || '');
    };

    updateUserName();

    // Listen to storage events for logout/login
    window.addEventListener('storage', updateUserName);

    // Also set interval in case cookie changes silently
    const interval = setInterval(updateUserName, 1000);

    return () => {
      window.removeEventListener('storage', updateUserName);
      clearInterval(interval);
    };
  }, []);

  

  const hello = async () => {
  if (!searchQuery.trim()) return;
  const results = await searchBooks(searchQuery);
  navigate(`/category/search`, { state: { searchResults: results } });
};

  return(
  <div>
      <div id="home">
        <div id="container" className="w-full">
          
          {/* ✅ Top Banner */}
          <div id="header-top" className="h-5 w-full flex items-center">
            <p>A Gateway to Smart Book Shopping</p>
            <p>Cart it. Read it. Love it.</p>
          </div>

          {/* ✅ NAVBAR stays EXACTLY same on PC */}
          <div id="navbar" className="h-15 flex items-center w-full">
            
            {/* ✅ Logo */}
            <div id="logo" className="h-[75%] w-[10%]"></div>

            {/* ✅ Original Sections for PC */}
            <div id="sections">
              <Link to="/">Home</Link>
              <Shop />
              <Link to="/aboutus">About Us</Link>
              <Link to="/termsAndCondition">Terms and Conditions</Link>
            </div>

            {/* ✅ Mobile-only hamburger + Shop + dropdown */}
            <div className="mobile-only">
              {/* ✅ Wrap hamburger + Shop in one row */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Hamburger icon */}
                <div id="mobile-menu" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </div>

                {/* ✅ Show Shop beside hamburger ONLY in mobile */}
                <Shop/>
              </div>

              {/* ✅ Dropdown links */}
              {menuOpen && (
                <div id="mobile-dropdown">
                  <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
                  <Link to="/termsAndCondition" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
                </div>
              )}
            </div>

            {/* ✅ Right Section */}
            <div id="sec2container" className="w-[40%]">
              <div id="sect2" className="flex items-center w-[100%] h-15">
                
                {/* Search */}
                <div className="flex items-center">
                  <input
                    id="input"
                    placeholder="Search Books Here"
                    className="border-2 border-black rounded-l-lg bg-white border-r-0 text-black p-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button id="search-btn" onClick={hello}>
                    <FontAwesomeIcon
                      id="search-i"
                      className="mt-1 bg-gray-100 text-black p-1 rounded-r-lg border-2 border-black border-l-0 active:scale-80"
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>

               <div id="acc-sec" className="flex items-center gap-2">
  <FontAwesomeIcon icon={faUser} />
  {userName ? (
    <Link to="/myaccount" className="text-white font-semibold hover:underline">
      {userName}
    </Link>
  ) : (
    <Link to="/login" className="text-white hover:underline">Login</Link>
  )}
</div>

                {/* Show My Account if logged in */}

                {/* Cart */}
                <div id="mycart">
                  
                  <Link to="/mycart" id="cart" className="text-3xl pb-2">🛒</Link>
                </div>

                {/* Litbot */}
                <div id="litbot">
                  <p><Link to="/litbot"> LitBot <span className="text-3xl">🤖</span></Link></p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;
