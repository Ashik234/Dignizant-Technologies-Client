import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="flex justify-between mx-8 mt-4">
      <div>
        <h1 className="font-semibold text-2xl">Product Details</h1>
        <div className="flex">
          <img src="" alt="" />
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
      </div>
      <div>

      <h1 className="font-semibold text-2xl">Payment Details</h1>
      <Link to="/success">
      <Button>Pay Now</Button>
      </Link>
      </div>
    </div>
  );
}

export default Checkout;
