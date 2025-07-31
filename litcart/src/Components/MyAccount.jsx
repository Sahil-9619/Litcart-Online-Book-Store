import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { User, LogOut, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  const navigate = useNavigate();

  const user = {
    fullName: Cookies.get('LitcartUserName') || '',
    email: Cookies.get('email') || '',
    phone: Cookies.get('phone') || '',
    street: Cookies.get('street') || '',
    city: Cookies.get('city') || '',
    state: Cookies.get('state') || '',
    zip: Cookies.get('zip') || '',
    joined: Cookies.get('joined') || 'N/A',
  };

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    Cookies.remove('name');
    Cookies.remove('email');
    Cookies.remove('phone');
    Cookies.remove('street');
    Cookies.remove('city');
    Cookies.remove('state');
    Cookies.remove('zip');
    Cookies.remove('joined');
    Cookies.remove('LitcartUserName');

    alert('Logged out successfully!');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-lime-100/30 flex flex-col md:flex-row">
      {/* ✅ Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md flex md:flex-col items-center justify-between md:justify-start py-4 px-4 md:px-0">
        {/* ✅ Avatar + Name */}
        <div className="flex items-center gap-3 md:flex-col md:gap-0">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-md">
            {user.fullName.charAt(0).toUpperCase()}
          </div>
          <div className="text-left md:text-center md:mt-3">
            <h2 className="text-sm md:text-lg font-semibold text-gray-800">{user.fullName}</h2>
            <h2 className="text-xs md:text-sm text-gray-500">Member since {user.joined}</h2>
          </div>
        </div>

        {/* ✅ Sidebar Links */}
        <div className="flex gap-4 md:flex-col md:gap-2 mt-0 md:mt-8">
          <button className="px-3 md:px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center gap-2">
            <User size={18} /> 
            <span className="hidden sm:inline">Account Overview</span>
          </button>
          <Link
            to="/myorders"
            className="px-3 md:px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          >
            <Truck size={18} />
            <span className="scale-75 sm:inline">My Orders</span>
          </Link>
        </div>

        {/* ✅ Logout */}
        <button
          onClick={handleLogout}
          className="mt-0 md:mt-auto text-red-500 hover:bg-red-50 px-3 md:px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </aside>

      {/* ✅ Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Account</h1>
          <h4 className="text-gray-500 text-sm">Your personal information</h4>
        </div>

        {/* ✅ Account Info */}
        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 lg:p-8 max-w-3xl space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">Full Name</label>
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
              {user.fullName}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">Phone Number</label>
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
              {user.phone}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">Email</label>
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
              {user.email}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">Street Address</label>
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
              {user.street}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">City</label>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
                {user.city}
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">State</label>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
                {user.state}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">ZIP / Postal Code</label>
            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800">
              {user.zip}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyAccount;
