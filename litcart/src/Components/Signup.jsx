import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../api/auth'; 


function Signup() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const { status, data } = await signupUser(formData);

  if (status === 201) {
    alert('Signup successful!');
    navigate('/login');

  } else {
    alert(` ${data.message}`);
  }
};



  return (
     <form onSubmit={handleSubmit}>
    <div id="signup-container" className=" h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100 text-center flex items-center flex-col">
  
  <div id="title" className="mt-5">
    <h1 className="font-bold text-4xl text-violet-900">Create LitCart Account</h1>
    <h2>Join us today!</h2>
    <p>Cart it. Read it. Love it</p>

  </div>

  <div id="content"
    className="bg-white/30  shadow-lg flex items-center flex-col justify-evenly w-[40%] h-full py-8 mt-5 mb-5 rounded-xl border border-white/50 transition-transform duration-500 ease-in-out hover:rotate-x-2 hover:scale-105 transform-gp">

    <input  id="name" onChange={handleChange} value={formData.name}
      className="w-[80%] p-2 mb-4 border border-gray-400 rounded bg-transparent text-black placeholder-gray-600 focus:outline-none"
      name="name" placeholder="Enter Name" required/>

    <input id="email" onChange={handleChange} value={formData.email}
      className="w-[80%] p-2 mb-4 border border-gray-400 rounded bg-transparent text-black placeholder-gray-600 focus:outline-none" 
      name="email" type="email" placeholder="Enter e-mail" required/>

    <input id="password" onChange={handleChange} value={formData.password}
      className="w-[80%] p-2 mb-4 border border-gray-400 rounded bg-transparent text-black placeholder-gray-600 focus:outline-none"
      name="password" type="password" placeholder="Create a password" required />

    <input id="paswword-repeat" onChange={handleChange} value={formData.confirmPassword} name="confirmPassword"
      className="w-[80%] p-2 mb-4 border border-gray-400 rounded bg-transparent text-black placeholder-gray-600 focus:outline-none" 
      type="password" placeholder="Re-enter your password" required />

    <button id="button" type="submit" className="h-10 w-[80%] border border-black text-black font-semibold rounded hover:bg-black hover:text-white transition">
      Create account
    </button>
    <div id="dilog" className="mt-0">
    <p>Already having an account?</p>
    <Link className="text-blue-600 font-semibold hover:underline" to='/login'>Login here</Link>

  </div>
  </div>

  
</div>
</form>

  );
}

export default Signup;