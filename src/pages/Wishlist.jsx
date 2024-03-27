import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import userRequest from "../utils/userRequest";

function Wishlist() {
  const profiledata = useSelector((state) => state.user);

  const { isLoading, error, data } = useQuery({
    queryFn: () => userRequest.get("/wishlist").then((res) => res.data),
  });
  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>erorrr</h1>;
  }
  console.log(data);
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
      
      {data.map((product) => (
      <div className="flex justify-between mx-12 items-center">
        <div className="flex items-center p-4 gap-4">
          <img src={product.productId.image} className="w-20" alt="" />
          <h1>{product.productId.productname}</h1>
        </div>
        <div className="flex gap-16">
          <h1>{product.productId.price}</h1>
          <button className="bg-red-500 rounded-md p-2 text-white">
            Remove
          </button>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Wishlist;
