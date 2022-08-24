import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import Layout from "../../../components/superAdmin/Layout/Layout";
import EditProfile from "../../../components/superAdmin/settings/EditProfile";
import Profile from "../../../components/superAdmin/settings/Profile";

function SettingsPageAdmin() {
  const api_url = import.meta.env.VITE_API_URL;

  const [isEditing, setisEditing] = useState(false);
  const [dashboarddatas, setdashboarddatas] = useState([]);
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
    setLoading(true);
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
        console.log(res.data);
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
      });
    setLoading(false);
  }, []);

  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      {!loading ? (
        <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-4 w-full">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="bg-white rounded-lg h-fit my-5">
            {!isEditing && (
              <Profile
                setisEditing={setisEditing}
                dashboarddatas={dashboarddatas}
              />
            )}
            {isEditing && (
              <EditProfile
                setisEditing={setisEditing}
                dashboarddatas={dashboarddatas}
              />
            )}
          </div>
        </div>
      ) : (
        <Spinner aria-label="Extra large spinner example" size="xl" />
      )}
    </Layout>
  );
}

export default SettingsPageAdmin;
