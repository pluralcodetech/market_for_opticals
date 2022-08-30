import React, { useState, useEffect } from "react";
import Card from "../../components/seller/dashboard/Card";
import Notify from "../../components/seller/dashboard/Notify";
import Layout from "../../components/seller/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
//import Chart from "../../components/seller/dashboard/Chart";

function Dashboard() {
  const [dashboarddatas, setdashboarddatas] = useState("");
  /* const [chartsdata, setchartsdata] = useState({
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
  });*/
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
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/seller/login");
    }

    axios
      .get(`${api_url}/admin_dashboard_api`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdashboarddatas(res.data);
        console.log(res.data.notifications);
        setLoading(false);
      })
      .catch((err) => {
        notifyWarning(err.response.data.error);
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/seller/login");
    }

    axios
      .get(`${api_url}/admin_charts`, {
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
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // notifyWarning(err.response.data.error);
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-4 w-full">
        <div className="my-3">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-7 gap-6 h-fit">
          <div className="col-span-5 ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card
                title={"total aproved products"}
                amount={dashboarddatas.total_aproved_products || 0}
              />
              <Card
                title={"total orders_made perday"}
                amount={dashboarddatas.total_orders_made_perday || 0}
              />
              <Card
                title={"total pending order"}
                amount={dashboarddatas.total_pending_order || 0}
              />
            </div>
            <div className="mt-6 bg-white rounded-lg h-fit shadow grid grid-cols-3 gap-4">
              <Card
                title={"total unaproved products"}
                amount={dashboarddatas.total_unaproved_products || 0}
              />
              <Card
                title={"total aproved products"}
                amount={
                  dashboarddatas.total_aproved_products
                    ? dashboarddatas.total_aproved_products
                    : 0
                }
              />
              <Card
                title={"total aproved products"}
                amount={
                  dashboarddatas.total_aproved_products
                    ? dashboarddatas.total_aproved_products
                    : 0
                }
              />
            </div>
            <div className="h-fit bg-white mt-4 w-full rounded-lg px-6 py-6">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <div>loading</div>
              )}
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 bg-white rounded-lg h-full w-full">
            <div className="shadow text-lg font-semibold p-2">Notification</div>
            <div className="px-2">
              {dashboarddatas ? (
                dashboarddatas.notifications.map((notification) => (
                  <Notify notification={notification} />
                ))
              ) : (
                <Spinner
                  color="warning"
                  aria-label="Extra large spinner example"
                  size="xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
