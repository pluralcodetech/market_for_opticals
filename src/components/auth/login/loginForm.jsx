import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Spinner from "../../../pages/loader/spinner";

function LoginForm({ setshowSignupForm }) {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post(`${api_url}/login`, formData)
      .then((res) => {
        setLoading(false);
        notifySuccess(res.data.status);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        //console.log(res.data);
        setTimeout(() => {
          navigate("/market");
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        notifyWarning(err.response.data.error);
        console.log(err.response);
      });
  };

  return (
    <form className="px-2 mt-3" onSubmit={handleSubmit}>
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
      <div className="mb-4">
        <label className="block text-gray-500  md:text-left mb-1 md:mb-0 pr-4">
          Email
        </label>
        <input
          className="bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
          type="email"
          placeholder="JaneDoe@gofitish.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
          Password
        </label>
        <input
          className="bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
          type="password"
          placeholder="*******8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between my-4">
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
          Forgot Password?
        </a>
        <a
          className="text-sm text-gray-500 hover:text-gray-900"
          onClick={(e) => setshowSignupForm(true)}
        >
          Register
        </a>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <button
          type="submit"
          className="w-full mb-4 bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      )}
      <button className="w-full bg-white border-2 border-[#ffce1a] hover:bg-amber-400 text-slate-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login with Google
      </button>
    </form>
  );
}

export default LoginForm;
