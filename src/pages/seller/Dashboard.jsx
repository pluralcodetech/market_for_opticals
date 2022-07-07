import React from "react";
import Card from "../../components/seller/dashboard/Card";
import Notify from "../../components/seller/dashboard/Notify";
import Layout from "../../components/seller/Layout/Layout";

function Dashboard() {
  return (
    <Layout>
      <div className="bg-gray-200 h-fit p-4 w-full">
        <div className="my-3">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-7 gap-6 h-fit">
          <div className="col-span-5 ">
            <div className="grid grid-cols-3 gap-4">
              <Card title="Total Amount Made" amount="100,000.00" />
              <Card title="Total Amount Made" amount="100,000.00" />
              <Card title="Total Amount Made" amount="100,000.00" />
            </div>
            <div className="mt-6 bg-white rounded-lg h-20 shadow grid grid-cols-3 gap-4">
              <Card title="Total Amount Made" amount="100,000.00" />
              <Card title="Total Amount Made" amount="100,000.00" />
              <Card title="Total Amount Made" amount="100,000.00" />
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-lg h-full w-full">
            <div className="shadow text-lg font-semibold p-2">Notification</div>
            <div className="px-2">
              <Notify />
              <Notify />
              <Notify />
              <Notify />
              <Notify />
              <Notify />
              <Notify />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
