import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import React from "react";
import userRequest from "../utils/userRequest";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

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
  const productIdArray = data.map(item => item.productId._id);
  const handlePayment = async (productIdArray) => {
    try {
      await userRequest.post("/order", {
        userId: profiledata.userId,
        productId: productIdArray,
      });
      navigate("/success");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  console.log(data);
  return (
    <div className="flex justify-between mx-8 mt-4">
      <div>
        <h1 className="font-semibold text-2xl mb-8">Product Details</h1>
        {data.map((item) => (
        <div className="flex gap-4">
          <img src={item.productId.image} className="w-20" alt="" />
          <div>

          <h1>{item.productId.productname}</h1>
          <h1>{item.productId.price}</h1>
          <h1>{item.productId.quantity}</h1>
          </div>
        </div>
          ))}
      </div>
      <div>

      <h1 className="font-semibold text-2xl">Payment Details</h1>
      <h1>Cash On Delivery</h1>
      <h1>UPI</h1>
      <h1>Wallet</h1>
      
      <Button  onClick={() => handlePayment(productIdArray)} >Pay Now</Button>
      </div>
    </div>
  );
}

export default Checkout;
