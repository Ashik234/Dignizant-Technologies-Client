import { useQuery } from '@tanstack/react-query';
import React from 'react';
import userRequest from '../utils/userRequest';
import { Button } from 'antd';

function Orders() {
  const { isLoading, error, data } = useQuery({
    queryFn: () => userRequest.get("/orders").then((res) => res.data),
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
    <div className='mx-8'>
        <h1 className='text-2xl font-semibold text-center mb-4 mt-4'>Order History</h1>
        <div className="overflow-x-auto min-w-full">
        <div className="overflow-y-auto">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse">
            <thead className="sticky top-0 text-xs text-white font-inter bg-black text-center z-10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4">Product</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Quantity</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Price</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Address</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id} className="even:bg-default odd:bg-[#E9E9E9] text-center font-inter">
                  <td className="px-4 py-2 text-black flex justify-center items-center">
                    <img className="h-8 w-16 object-contain" src={order.productId[0].image} alt={order.productId[0].productname} />
                    <td className="px-4 py-2 text-black">{order.productId[0].productname}</td>
                  </td>
                  <td className="px-4 py-2 text-black">{order.productId[0].quantity}</td>
                  <td className="px-4 py-2 text-black">{order.productId[0].price}</td>
                  <td>{order.address}</td>
                  <td><Button>Remove</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
    </div>
  );
}

export default Orders;
