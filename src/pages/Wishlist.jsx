import React from "react";

function Wishlist() {
  return (
    <div className="p-16 bg-gray-300">
      <h1 className="text-2xl font-semibold mb-8">Wishlist</h1>
      <div className="flex justify-between mx-16">
        <h1 className="font-semibold">Product</h1>
        <div className="flex gap-20">
          <h1 className="font-semibold">Price</h1>
          <h1 className="font-semibold">Action</h1>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mx-12 items-center">
        <div className="flex items-center p-4 gap-4">
          <img src="https://via.placeholder.com/150" className="w-20" alt="" />
          <h1>Product name</h1>
        </div>
        <div className="flex gap-16">
          <h1>Rs7999</h1>
          <button className="bg-red-500 rounded-md p-2 text-white">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
