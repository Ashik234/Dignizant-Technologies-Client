import React from "react";
import Wishlist from "/favorite.svg";
import Cart from "/cart.svg";
import { useQuery } from "@tanstack/react-query";
import userRequest from "../utils/userRequest";

function Home() {
  const { isLoading, error, data } = useQuery({
    queryFn: () => userRequest.get("/products").then((res) => res.data),
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>erorrr</h1>;
  }

  const products = [
    {
      id: 1,
      name: "Gaming HeadPhones",
      imageUrl:
        "https://th.bing.com/th/id/OIP.usHRsLy0R207YIp2kJyYeQHaE7?w=231&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 2,
      name: "Gaming Mice",
      imageUrl:
        "https://th.bing.com/th/id/OIP.fzzS33rd9is6kmg5kkiyFAAAAA?pid=ImgDet&w=200&h=159&c=7&dpr=1.5",
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      imageUrl:
        "https://th.bing.com/th/id/OIP.pgVYlSBhE6XN_kl4iJHf2wHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  return (
    <div className="mx-auto">
      <div className="mt-8">
        <h1 className="font-bold text-center text-2xl">Explore Categories</h1>
        <div className="flex justify-evenly mt-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img src={product.imageUrl} alt="" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <h1 className="font-bold text-center text-2xl">Featured Products</h1>
        <div className="flex justify-evenly mt-4 gap-4">
          {data.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 shadow-md rounded-md"
            >
              <img src={product.image} alt="" />
              <h2 className="text-lg font-semibold mb-2">
                {product.productname}
              </h2>
              <div className="flex justify-between">
                <p className="text-gray-600">${product.price}</p>
                <div className="flex gap-6">
                  <img src={Cart} className="cursor-pointer" alt="" />
                  <img src={Wishlist} className="cursor-pointer" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
