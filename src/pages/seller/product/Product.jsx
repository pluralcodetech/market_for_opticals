import React from "react";
import Layout from "../../../components/seller/Layout/Layout";
import Card from "../../../components/seller/product/Card";

function Product() {
  return (
    <Layout>
      <div className="bg-gray-200 h-fit p-4 w-full">
        <div className="my-3 flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Products</h1>
          <select className="w-40  bg-white border mx-2 border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500">
            <option>Available</option>
            <option>Out of Stock</option>
            <option>Not Approved</option>
            <option>Accessories</option>
            <option>Lab Equipment</option>
            <option>Optical Materials</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card title="Total Amount Made" amount="100,000.00" />
          <Card title="Total Amount Made" amount="100,000.00" />
          <Card title="Total Amount Made" amount="100,000.00" />
          <Card title="Create Product" amount="+" />
        </div>
        <div className="bg-white rounded-lg h-[70vh] w-full mt-6">
          <table className="table-auto	w-full border">
            <thead>
              <tr className="text-sm text-gray-500 p-4">
                <th className="p-4 border">Product ID</th>
                <th className="border">Image</th>
                <th className="border">Product Name</th>
                <th className="border">Price</th>
                <th className="border">Quantity</th>
                <th className="border">Qty sold</th>
                <th className="border">Status</th>
                <th className="border">Action</th>
                <th className="border">Date Listed</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
