import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <div className="mx-auto mt-8 ">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Name: {user.name}</h2>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>

      <div className="flex space-x-4 mb-8">
        <Link to="/orders" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Orders</Link>
        <Link to="/cart" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Cart</Link>
        <Link to="/wishlist" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Wishlist</Link>
      </div>

    </div>
  );
}

export default Profile;
