import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/market/navbar/navbar";

function Index() {
  return (
    <Layout
      title="home for market4opticals"
      description="home for market4opticals"
    >
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
        <div className="bg-gray-200 h-screen"></div>
        <div className="col-span-5 bg-gray-200 h-screen"></div>
      </div>
    </Layout>
  );
}

export default Index;
