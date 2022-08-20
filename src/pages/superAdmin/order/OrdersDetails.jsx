import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Avatar, Badge } from "flowbite-react";
import axios from "axios";
import Layout from "../../../components/superadmin/Layout/Layout";
import Profile from "../../../components/superadmin/orders/Profile";
import icon from "../../../assets/images/icon.svg";

function OrdersDetailsAdmin() {
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
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-4 w-full">
        <h1 className="text-2xl font-bold">Order</h1>
        <div className="flex">
          <img src={icon} alt="" className="mr-3" />
          <h6 className="text-slate-800">order-details |{id}</h6>
        </div>
        <div className="w-[100%] h-[100%] bg-white rounded-lg mt-3">
          <div className="pt-3 pb-3 px-12 flex items-center justify-between border w-full">
            <div className="flex items-center">
              <h6 className="mx-4">Order ID</h6>
              <h1 className="text-3xl font-bold">{id}</h1>
            </div>
            <div className="flex">
              <button className="border border-red-500 hover:bg-red-300 text-red-500  py-2 px-5 rounded-xl mx-4">
                view summary
              </button>
              <button className="border border-slate-400 hover:bg-slate-300 text-slate-700  py-2 px-5 rounded-xl mx-4">
                Go to Seller Profile
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit mt-3 ">
            <div className="col-span-1  h-full p-2">
              <Card>
                <div className="flex items-center">
                  <Avatar rounded={true} bordered={true} />
                  <p className="font-normal text-gray-700 dark:text-gray-400 ml-4">
                    Ordered by James Lee
                  </p>
                </div>
              </Card>
              <div className=" border rounded-lg  mt-3">
                <h4 className="text-md m-2 font-semibold">
                  All Product ordered
                </h4>
                <div className="flex items-center justify-between py-2 px-3">
                  <Avatar />
                  <div className="w-[90%]">
                    <h5 className="text-base font-semibold">
                      Korean Rectangle Eyeglasses
                    </h5>
                    <p className="text-xs">Product Price: ₦10,000.00</p>
                    <p className="text-xs">Amount Ordered: 50</p>{" "}
                    <p className="text-xs">02:03PM | 27th July, 2022</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 px-3">
                  <Avatar />
                  <div className="w-[90%]">
                    <h5 className="text-base font-semibold">
                      Korean Rectangle Eyeglasses
                    </h5>
                    <p className="text-xs">Product Price: ₦10,000.00</p>
                    <p className="text-xs">Amount Ordered: 50</p>{" "}
                    <p className="text-xs">02:03PM | 27th July, 2022</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 px-3">
                  <Avatar />
                  <div className="w-[90%]">
                    <h5 className="text-base font-semibold">
                      Korean Rectangle Eyeglasses
                    </h5>
                    <p className="text-xs">Product Price: ₦10,000.00</p>
                    <p className="text-xs">Amount Ordered: 50</p>{" "}
                    <p className="text-xs">02:03PM | 27th July, 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1  p-5 ">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrdersDetailsAdmin;
