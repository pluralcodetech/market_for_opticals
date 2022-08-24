import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Label, TextInput, Spinner } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProfile({ setisEditing, dashboarddatas }) {
  const api_url = import.meta.env.VITE_API_URL;
  const [username, setusername] = useState(
    dashboarddatas?.super_admin_name || ""
  );
  const [phone, setphone] = useState(dashboarddatas?.phone_number || "");

  const [isUpdating, setisUpdating] = useState(false);

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

  const submitupdate = (e) => {
    e.preventDefault();
    setisUpdating(true);
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    var formdata = new FormData();
    formdata.append("name", username);
    formdata.append("phone_number", phone);

    axios
      .post(`${api_url}/superadmin_name_phonenumber`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //setcustomer(res.data);
        console.log(res.data);
        notifySuccess("details set successfully");
        setisEditing((prev) => !prev);
      })
      .catch((err) => {
        console.log(err.response);
        notifyWarning(err.response.data.message);
      })
      .finally(() => {
        setisUpdating(false);
      });
  };

  return (
    <form
      className="flex flex-col gap-4 w-6/12 mx-auto pt-8 pb-8"
      onSubmit={submitupdate}
    >
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          id="username"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="superadmin"
          required={true}
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Mobile" />
        </div>
        <TextInput
          id="phone"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          type="tel"
          required={true}
        />
      </div>

      <div className="w-full mt-4 text-center flex justify-between items-center">
        {isUpdating ? (
          <Spinner aria-label="Extra large spinner example" size="xl" />
        ) : (
          <button
            type="submit"
            className="bg-amber-500 w-52 text-center p-2 rounded-lg text-white"
          >
            Save Changes
          </button>
        )}
        <MdOutlineCancel
          className="h-10 w-10 text-red-500"
          onClick={() => setisEditing((prev) => !prev)}
        />
      </div>
    </form>
  );
}

export default EditProfile;
