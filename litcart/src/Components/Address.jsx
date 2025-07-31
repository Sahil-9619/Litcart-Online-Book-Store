import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react"; // Book icon
import Cookies from "js-cookie";


const AddressForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const userId = Cookies.get("userId");

  if (!userId) {
    alert("User not logged in.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/address/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ...formData,
        userId,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      Cookies.set("name", formData.name);
      Cookies.set("phone", formData.phone);
      Cookies.set("street", formData.street);
      Cookies.set("city", formData.city);
      Cookies.set("state", formData.state);
      Cookies.set("zip", formData.zip);
      alert("Address saved successfully!");
      navigate("/payment");
    } else {
      alert(data.error || "Failed to save address");
    }
  } catch (err) {
    console.error("Address save error:", err);
    alert("Something went wrong while saving the address.");
  }
};



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToPayment = () => {
    // Simple validation
    if (!formData.name || !formData.phone || !formData.street) {
      alert("📚 Please fill all required fields before continuing!");
      return;
    }
    navigate("/payment");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#fef9f4] via-[#f9f4ec] to-[#f3ede4] p-4">
      
      {/* Container */}
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Floating background icon */}
        <div className="absolute top-[-30px] right-[-30px] opacity-10">
          <BookOpen size={120} />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Almost there! 📚
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Your books are waiting to be delivered
          </p>
        </div>

        {/* Address Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 outline-none bg-transparent transition-all"
            />
            <label className="
              absolute left-4 top-3 text-gray-500 text-base 
              transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-500 
              peer-valid:top-0 peer-valid:text-xs peer-valid:text-purple-500 
              bg-white px-1
            ">
              Full Name
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 outline-none bg-transparent transition-all"
            />
            <label className="
              absolute left-4 top-3 text-gray-500 text-base 
              transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-500 
              peer-valid:top-0 peer-valid:text-xs peer-valid:text-purple-500 
              bg-white px-1
            ">
              Phone Number
            </label>
          </div>

          {/* Street Address */}
          <div className="relative">
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 outline-none bg-transparent transition-all"
            />
            <label className="
              absolute left-4 top-3 text-gray-500 text-base 
              transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-500 
              peer-valid:top-0 peer-valid:text-xs peer-valid:text-purple-500 
              bg-white px-1
            ">
              Street Address
            </label>
          </div>

          {/* City & State in grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 outline-none bg-transparent transition-all"
              />
              <label className="
                absolute left-4 top-3 text-gray-500 text-base 
                transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-500 
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-purple-500 
                bg-white px-1
              ">
                City
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 outline-none bg-transparent transition-all"
              />
              <label className="
                absolute left-4 top-3 text-gray-500 text-base 
                transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base 
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-500 
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-purple-500 
                bg-white px-1
              ">
                State
              </label>
            </div>
          </div>

          {/* ZIP */}
          <div className="relative">
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 outline-none bg-transparent transition-all"
            />
            <label className="
              absolute left-4 top-3 text-gray-500 text-base 
              transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base 
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-500 
              peer-valid:top-0 peer-valid:text-xs peer-valid:text-purple-500 
              bg-white px-1
            ">
              ZIP / Postal Code
            </label>
          </div>

          {/* Next Button */}
          <button
            type="submit"
            onClick={goToPayment}
            className="w-full flex justify-center items-center gap-2 mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Proceed to Payment
            <span className="animate-bounce">
              <BookOpen size={22} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
