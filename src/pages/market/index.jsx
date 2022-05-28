import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/market/navbar/navbar";
import Product from "../../components/market/product";

function Index() {
  return (
    <Layout
      title="home for market4opticals"
      description="home for market4opticals"
    >
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
        <div className="bg-gray-200 h-screen ml-1"></div>
        <div className="col-span-5  h-screen pr-2 md:pr-4">
          <div className="">
            <select className="bg-white border mx-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-gray-500">
              <option>Sort by</option>
              <option>Lenses</option>
              <option>Frames</option>
              <option>Accessories</option>
              <option>Lab Equipment</option>
              <option>Optical Materials</option>
            </select>
            <select className="bg-white border mx-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-gray-500">
              <option>Delivery options</option>
              <option>Lenses</option>
              <option>Frames</option>
              <option>Accessories</option>
              <option>Lab Equipment</option>
              <option>Optical Materials</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
