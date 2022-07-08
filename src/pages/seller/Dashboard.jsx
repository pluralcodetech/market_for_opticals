import React, { useState, useEffect } from "react";
import Card from "../../components/seller/dashboard/Card";
import Notify from "../../components/seller/dashboard/Notify";
import Layout from "../../components/seller/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from "chart.js/auto";

function Dashboard() {
  const [dashboarddatas, setdashboarddatas] = useState([]);
  const [chartsdata, setchartsdata] = useState("");
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
        console.log(res.data);
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
        const arr = Object.values(res.data);
        setchartsdata(arr);
        console.log(arr);
        console.log(res.data);
        setLoading(false);

        const labels = [
          arr.map((data) => {
            data.date;
          }),
        ];

        const data = {
          labels: labels,
          datasets: [
            {
              label: "주문수",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [
                arr.map((data) => {
                  data.data.total_number_of_orders_made;
                }),
              ],
            },
          ],
        };

        const config = {
          type: "line",
          data: data,
          options: {},
        };

        const myChart = new Chart(document.getElementById("myChart"), config);
      })
      .catch((err) => {
        // notifyWarning(err.response.data.error);
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-200 h-fit p-4 w-full">
        <div className="my-3">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-7 gap-6 h-fit">
          <div className="col-span-5 ">
            <div className="grid grid-cols-3 gap-4">
              <Card
                title={"total aproved products"}
                amount={dashboarddatas.total_aproved_products || 0}
              />
              <Card
                title={"total_orders_made_perday"}
                amount={dashboarddatas.total_orders_made_perday || 0}
              />
              <Card
                title={"total_pending_order"}
                amount={dashboarddatas.total_pending_order || 0}
              />
            </div>
            <div className="mt-6 bg-white rounded-lg h-20 shadow grid grid-cols-3 gap-4">
              <Card
                title={"total_unaproved_products"}
                amount={dashboarddatas.total_unaproved_products || 0}
              />
              <Card
                title={"total_aproved_products"}
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
              <canvas id="myChart"></canvas>
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
