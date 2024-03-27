import React from "react";
import { Table, Button, Image, Space } from "antd";

function Cart() {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <Space>
          <Image src={record.image} width={50} />
          {text}
        </Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center"
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "center"
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button type="danger">Remove</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product: "Product 1",
      price: "$20",
      quantity: 2,
      total: "$40",
      image: "https://via.placeholder.com/150", 
    },
    {
      key: "2",
      product: "Product 2",
      price: "$10",
      quantity: 1,
      total: "$10",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-16 bg-gray-300">
      <h1 className="text-2xl font-semibold mb-8">Cart</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default Cart;
