import React, { useState, useEffect } from "react";
import { Avatar, Badge, Spinner } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/seller/Layout/Layout";
import Profile from "../../../components/seller/profile/Profile";

function ProfilePage() {
  const api_url = import.meta.env.VITE_API_URL;

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

  const [merchant, setmerchant] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get(`${api_url}/admin_dashboard_api`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        notifySuccess(res.data.status);
        setmerchant(res.data.admin);
      })
      .catch((err) => {
        console.log(err.response.data);
        notifyWarning(err.response.data.message);
      });
  }, []);

  return (
    <Layout>
      <div className="md:w-6/12 mx-auto my-6">
        {merchant ? (
          <Profile merchant={merchant} />
        ) : (
          <Spinner color="warning" />
        )}
      </div>
    </Layout>
  );
}

export default ProfilePage;
