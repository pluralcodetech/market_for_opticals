import React, { useState } from "react";
import { Avatar, Badge, Spinner } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile({ merchant }) {
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

  return (
    <div className=" border rounded-lg flex items-center flex-col p-5 ">
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
      />
      <Avatar size="lg" img={`${merchant.passport_photo}`} rounded={true} />
      <h1 className="text-lg font-semibold">{merchant.company_name}</h1>
      <Badge color={`${merchant.active ? "success" : "warning"}`} size="sm">
        Active
      </Badge>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Phone number</h6>
        <h6>{merchant.company_phone_number}</h6>
      </div>{" "}
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Email</h6>
        <h6>{merchant.email}</h6>
      </div>{" "}
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Phone</h6>
        <h6>{merchant.company_phone_number}</h6>
      </div>
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">Wallet</h6>
        <h6 className="text-sm font-light">{merchant.wallet}</h6>
      </div>{" "}
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">Account Details</h6>
        <h6 className="text-sm font-light">{merchant.account_details}</h6>
      </div>
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">Address</h6>
        <h6 className="text-sm font-light">
          {merchant.address},{merchant.state}
        </h6>
      </div>
      <button className="bg-amber-500 text-white w-full p-2 rounded-lg mt-3">
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;
