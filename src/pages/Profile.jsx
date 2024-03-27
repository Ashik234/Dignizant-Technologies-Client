import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Profile() {
  const profiledata = useSelector((state) => state.user);

  return (
    <div className="mx-auto mt-8 flex items-center border-2 rounded-md p-6">
      <div className="mr-8">
        <img
          src="https://via.placeholder.com/150" 
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Name: {profiledata.username}</h2>
          <p className="text-gray-600">Email: {profiledata.email}</p>
          <p className="text-gray-600">Address: {profiledata.address}</p>
        </div>

        <div className="flex space-x-4">
          <Link to="/orders" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Orders</Link>
          <Link to="/cart" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Cart</Link>
          <Link to="/wishlist" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Wishlist</Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
