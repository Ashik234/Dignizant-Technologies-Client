import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      imageUrl:
        "https://th.bing.com/th/id/OIP.usHRsLy0R207YIp2kJyYeQHaE7?w=231&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      imageUrl:
        "https://th.bing.com/th/id/OIP.fzzS33rd9is6kmg5kkiyFAAAAA?pid=ImgDet&w=200&h=159&c=7&dpr=1.5",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      imageUrl:
        "https://th.bing.com/th/id/OIP.pgVYlSBhE6XN_kl4iJHf2wHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  return (
    <div className="mx-auto">
      <NavBar />
      <div className="mt-8">
        <h1 className="font-bold text-center text-2xl">Explore Categories</h1>
        <div className="flex justify-evenly mt-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img src={product.imageUrl} alt="" />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <h1 className="font-bold text-center text-2xl">Featured Products</h1>
        <div className="flex justify-evenly mt-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img src={product.imageUrl} alt="" />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
