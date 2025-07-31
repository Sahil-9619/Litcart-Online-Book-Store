import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/login';
import Cookies from 'js-cookie';

const Login=() => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


// handle submit ke andar
const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await loginUser(formData);
  if(res.success){
    Cookies.set('LitcartUserName',res.data.user.name, {path:'/', expires:7});
    Cookies.set('userId', res.data.user._id, { path: '/', expires: 7 });
    Cookies.set('email',res.data.user.email, {path:'/', expires:7});
    alert("Login successful!");
    navigate('/');
    
  }else{
    alert(res.data.message || "Login failed");
  }
};


  return (
    <div
  id="login-container"
  className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center bg-gradient-to-br from-indigo-200 via-sky-100 to-violet-200"
>
  {/* 3D Animated Background Circle */}
  <div className="absolute w-[150%] h-[150%] bg-gradient-radial from-indigo-300 via-sky-300 to-violet-400 rounded-full animate-spin-slow blur-2xl opacity-30 z-0" />

  <form
    onSubmit={handleSubmit}
    className="relative z-10 bg-white/70 border border-gray-300 shadow-2xl transform-gpu transition-transform duration-500 ease-in-out hover:rotate-x-3 hover:-rotate-y-3 hover:scale-[1.03] rounded-xl flex flex-col items-center justify-evenly w-[40%] h-[70%] py-8"
  >

  
    <div id="title" className="mb-2 text-gray-700">
      <h1 className="font-bold text-4xl text-indigo-700">Login Account</h1>
      <h3 className="text-xl text-sky-900  mt-2">Login to continue</h3>
    </div>

    <div className="w-[60%] text-left text-black font-semibold mb-1 flex items-left">
      <p>Email or Phone</p>
    </div>
    <input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value})
      }
      className="w-[60%] p-2 mb-4 border border-gray-300 text-gray-800 placeholder-gray-400 rounded bg-transparent focus:outline-none"
      placeholder="Enter e-mail or phone"
      required
    />

    <div className="w-[60%] text-left text-black font-semibold mb-1 flex items-left ">
      <p>Enter password</p>
    </div>
    <input
      id="password"
      name="password"
      type="password"
      value={formData.password}
      onChange={(e) =>
        setFormData({ ...formData, password: e.target.value})
      }
      className="w-[60%] p-2 mb-4 border border-gray-300 text-gray-800 placeholder-gray-400 rounded bg-transparent focus:outline-none"
      placeholder="Create a password"
      required
    />

    <button
      id="button"
      type="submit"
      className="h-10 w-[40%] border border-gray-600 bg-indigo-200/80 text-gray-800 font-semibold rounded hover:bg-indigo-700 hover:text-white transition"
    >
      Login
    </button>

    <div id="dilog" className="mt-3 black">
      <p>Don't having an account?</p>
      <Link to='/signup' className="text-indigo-700 font-semibold hover:underline">
        Signup here
      </Link>
    </div>
  </form>
</div>

    
 );
};

export default Login;
