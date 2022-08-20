import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Avatar, Badge, Tabs } from "flowbite-react";
import axios from "axios";
import Layout from "../../../components/superadmin/Layout/Layout";
import Profile from "../../../components/superadmin/orders/Profile";
import icon from "../../../assets/images/icon.svg";
import Purchased from "../../../components/superAdmin/customer/Purchased";
import BankDetails from "../../../components/superAdmin/customer/BankDetails";

function MerchantDetails() {
  const api_url = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    axios
      .get(`${api_url}/admin_order_details/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-fit overflow-y-auto p-4 w-full">
        <h1 className="text-2xl font-bold">Merchant</h1>
        <div className="flex">
          <img src={icon} alt="" className="mr-3" />
          <h6 className="text-slate-800">Merchant|{id}</h6>
        </div>
        <div className="w-[100%] h-[100%] bg-white rounded-lg mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit mt-3 ">
            <div className="col-span-1  p-5 ">
              <Profile />
            </div>
            <div className="col-span-1  h-fit p-2">
              <div className=" border rounded-lg  mt-3 h-fit">
                <div className="pt-3 pb-3  flex items-center justify-between  w-full">
                  <div className="flex w-full">
                    <button className="border border-red-500 hover:bg-red-300 text-red-500  py-2 px-5 rounded-xl mx-4">
                      Delete Merchant Account
                    </button>
                    <button className="border border-slate-400 hover:bg-slate-300 text-slate-700  py-2 px-5 rounded-xl mx-4">
                      Suspend Merchant Account
                    </button>
                  </div>
                </div>
                <Card>
                  <div className="flex flex-col items-center bg-[#FDF0DC] h-full p-5">
                    <h2>Amount of Paid Product </h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">
                      10
                    </p>
                  </div>
                </Card>
                <Tabs.Group aria-label="Full width tabs" style="fullWidth">
                  <Tabs.Item title=" Bank Details">
                    <div className="h-full">
                      <h4 className="text-md m-2 font-semibold">
                        Personal Bank Account
                      </h4>
                      <BankDetails />
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title=" Purchase history">
                    <div className="h-full">
                      <h4 className="text-md m-2 font-semibold">
                        All Transactions
                      </h4>
                      <Purchased />
                      <Purchased />
                      <Purchased />
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title=" Purchase Stats">
                    <div className="h-full">
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">Total Cash Paid</h6>
                        <h6>₦50,000.00</h6>
                      </div>
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">
                          Outsanding Payment
                        </h6>
                        <h6>₦50,000.00</h6>
                      </div>
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">
                          Amount of request Not Approved
                        </h6>
                        <h6>10</h6>
                      </div>
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">
                          Amount of Product Sold
                        </h6>
                        <h6>12</h6>
                      </div>
                    </div>
                  </Tabs.Item>
                </Tabs.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MerchantDetails;
