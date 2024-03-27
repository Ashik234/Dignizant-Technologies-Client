import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-6 mt-4">Order Completed</h1>
      <div className="flex gap-4 mb-8">
        <Link to="/orders">
          <Button type="">View Orders</Button>
        </Link>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
