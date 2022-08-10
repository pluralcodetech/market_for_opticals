import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spiral from "../../../assets/images/spiral.svg";
import logo from "../../../assets/images/logo.svg";

function LoginForm() {
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
      .post(`${api_url}/admin_login`, formData)
      .then((res) => {
        setLoading(false);
        notifySuccess(res.data.status);
        sessionStorage.setItem("super_token", res.data.token);
        sessionStorage.setItem("super_admin", JSON.stringify(res.data.admin));
        console.log(res.data);
        setTimeout(() => {
          navigate("/superadmin/dashboard");
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        notifyWarning(err.response.data.error);
        console.log(err.response);
      });
  };

  return (
    <div className="h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div
          className="h-full hidden md:block"
          style={{
            background: `url(${spiral})`,
          }}
        ></div>
        <div className="bg-[#F8C881] flex flex-col justify-center items-center">
          <div className="bg-white rounded-2xl h-fit w-[90%] md:w-[80%] mx-auto py-6 px-3">
            <img src={logo} alt="" className="h-12 w-full mx-auto " />
            <form className="px-2 mt-12" onSubmit={handleSubmit}>
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
                <input
                  className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                  type="password"
                  placeholder="*******8"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Forgot Password?
                </a>
                <a
                  className="text-sm text-gray-500 hover:text-gray-900"
                  href="/seller/register"
                >
                  Register
                </a>
              </div>
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="spinner-border text-gray-500" role="status">
                    <span className="sr-only">Loading...</span>
                    <span className="">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full mb-4 bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
