import React, { useEffect, useState } from 'react'
import {Route,Routes } from "react-router-dom";
import Homepage from './Components/Homepage'
import AboutUs from './Components/AboutUs'
import Header from './Components/Homepage/Header';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Mycart from './Components/Mycart';
import TermsAndCond from './Components/TermsAndCond';
import Contactus from './Components/Contactus';
import Payment from './Components/Payment';
import OrderPlaced from './Components/OrderPlaced';
import Address from './Components/Address';
import Book from './Components/BookUI/Book';
import BookList from './Components/BookUI/BookList';
import OrderDetails from './Components/Orders/OrderDetails';
import MyAccount from './Components/MyAccount';
import Myorder from './Components/Orders/Myorder';
import LitBot from './Components/Litbot';
import LoadingScreen from './Components/loading/LoadingScreen'



const App = () => {

    const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000); // Match with your animation duration

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mycart" element={<Mycart/>}/>
        <Route path="/termsAndCondition" element={<TermsAndCond/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/orderplaced" element={<OrderPlaced/>}/>\
        <Route path="/address" element={<Address/>}/>
        <Route path="/book/:_id" element={<Book />} />
        <Route path="/category/:categoryName" element={<BookList/>}/>
        <Route path="/category/:categoryName/:_id" element={<Book key={window.location.pathname} />} />
        <Route path="/myorders" element={<Myorder/>}/>
        <Route path="/orderdetails" element={<OrderDetails/>}/>
        <Route path="/myaccount" element={<MyAccount/>}/>
        <Route path="/litbot" element={<LitBot/>}/>
      </Routes>
      
      
      
    
    </div>
  )
}

export default App
