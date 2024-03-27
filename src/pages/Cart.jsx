import React from "react";
import { useQuery } from "@tanstack/react-query";
import userRequest from "../utils/userRequest";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

function Cart() {
  const profiledata = useSelector((state) => state.user);

  const { isLoading, error, data } = useQuery({
    queryFn: () => userRequest.get("/cart").then((res) => res.data),
  });
  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>erorrr</h1>;
  }
  console.log(data);

  const handleremoveToCart = async (productId) => {
    try {
      await userRequest.post("/removecart", {
        userId: profiledata.userId,
        productId: productId,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="p-12 bg-gray-300 flex flex-col">
      <h1 className="text-2xl font-semibold mb-8">Cart</h1>
      <div className="overflow-x-auto min-w-full">
        <div className="overflow-y-auto">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse">
            <thead className="sticky top-0 text-xs text-white font-inter bg-black text-center z-10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4">Product</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Price</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Quantity</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-[#E9E9E9] text-center font-inter"
                >
                  <td className="px-4 py-2 text-black flex justify-center items-center">
                    <img
                      className="h-8 w-16 object-contain"
                      src={item.productId.image}
                    />
                    <td className="px-4 py-2 text-black">
                      {item.productId.productname}
                    </td>
                  </td>
                  <td className="px-4 py-2 text-black">
                    {item.productId.price}
                  </td>
                  <td className="px-4 py-2 text-black">
                    {item.productId.quantity}
                  </td>
                  <td>
                    <Button 
                  onClick={() => handleremoveToCart(item.productId._id)} 
                    >Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <Link to="/checkout">
              <Button className="bg-blue-500 mt-4" size="large">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
