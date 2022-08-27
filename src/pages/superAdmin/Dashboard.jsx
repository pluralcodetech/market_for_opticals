import React, { useState, useEffect } from "react";
import Card from "../../components/superAdmin/dashboard/Card";
import Notify from "../../components/superAdmin/dashboard/Notify";
import Layout from "../../components/superAdmin/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Chart from "../../components/superAdmin/dashboard/Chart";

function DashboardAdmin() {
  const [dashboarddatas, setdashboarddatas] = useState("");
  const [chartsdata, setchartsdata] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "loading .... Sales Per Day",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "#ffbb11",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const notifyWarning = (msg) =>
    toast.warn(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }

    axios
      .get(`${api_url}/super_admin_dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdashboarddatas(res.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        notifyWarning(err.response.data.error);
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }

    axios
      .get(`${api_url}/super_admin_charts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setchartsdata({
          labels: res?.data.map((value) => value.date),
          datasets: [
            {
              label: "Sales Per Day",
              data: res?.data.map(
                (value) => value.data.total_number_of_orders_made
              ),
              backgroundColor: [
                "#ffbb11",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
            },
          ],
        });
        // console.log(arr);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // notifyWarning(err.response.data.error);
        //console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-fit p-4 w-full overflow-y-auto">
        <div className="my-3">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid grid-col-1 md:grid-cols-7 gap-6 h-fit">
          <div className="col-span-5 ">
            <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
              <Card
                title={"total amount ordered"}
                amount={dashboarddatas?.total_amount_ordered || 0}
              />
              <Card
                title={"total pending delivery"}
                amount={dashboarddatas?.total_pending_delivery || 0}
              />
              <div className="hidden md:block">
                <Card
                  title={"total products"}
                  amount={dashboarddatas?.total_products_uploaded || 0}
                />
              </div>
            </div>
            <div className="mt-2 md:mt-6 bg-white rounded-lg h-fit shadow grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card
                title={"total sellers"}
                amount={dashboarddatas?.total_sellers_on_the_platform || 0}
              />
              <Card
                title={"total customers"}
                amount={
                  dashboarddatas.total_customers
                    ? dashboarddatas.total_customers
                    : 0
                }
              />
              <Card
                title={"total aproved products"}
                amount={
                  dashboarddatas.total_products_uploaded
                    ? dashboarddatas.total_products_uploaded
                    : 0
                }
              />
              <div className="md:hidden">
                <Card
                  title={"total products"}
                  amount={dashboarddatas?.total_products_uploaded || 0}
                />
              </div>
            </div>
            <div className="h-fit bg-white mt-4 w-full rounded-lg px-6 py-6">
              {
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 bg-white rounded-lg h-full w-full">
            <div className="shadow text-lg font-semibold p-2">Notification</div>
            <div className="px-2 w-full">
              {dashboarddatas && dashboarddatas?.notification.length > 0
                ? dashboarddatas.notification.map((notif) => (
                    <Notify notification={notif} key={notif.id} />
                  ))
                : "no data found"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardAdmin;
