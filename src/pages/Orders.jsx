import React from 'react';

function Orders() {


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
                    <Button>Remove</Button>
                  </td>
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
