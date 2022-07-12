import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spiral from "../../../assets/images/spiral.svg";
import logo from "../../../assets/images/logo.svg";

import Spinner from "../../../pages/loader/spinner";

function SignupForm() {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [company_name, setcompany_name] = useState("");
  const [state, setstate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [license, setlicense] = useState("");
  const [passport, setpassport] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
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
    const name = company_name + " " + state;

    const formData = new FormData();
    formData.append("company_name", company_name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("state", state);
    formData.append("license", license);
    formData.append("passport_photo", passport);
    formData.append("company_phone_number", phonenumber);
    formData.append("password", password);
    formData.append("password_confirmation", cpassword);

    axios
      .post(`${api_url}/register_admin`, formData)
      .then((res) => {
        setLoading(false);

        console.log(res.data);
        notifySuccess(res.data.message);

        setTimeout(() => {
          navigate("/seller/login");
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        notifyWarning(err.response.data.error.license[0]);
        notifyWarning(err.response.data.error.passport_photo[0]);
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
                <input
                  className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                  type="text"
                  placeholder=" Enter your Company Name"
                  value={company_name}
                  onChange={(e) => setcompany_name(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="text"
                    placeholder="Enter your Company Location"
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="text"
                    placeholder=" Company Address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="email"
                    placeholder="Enter your Company Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="tel"
                    placeholder="Company Phone Number
                    "
                    value={phonenumber}
                    onChange={(e) => setphonenumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label>license</label>
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="file"
                    placeholder=""
                    onChange={(e) => setlicense(e.target.files[0])}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label>passport</label>
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="file"
                    placeholder=" "
                    onChange={(e) => setpassport(e.target.files[0])}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="bg-gray-200 appearance-none rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                    type="password"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={(e) => setcpassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between my-4">
                <div className="flex items-center w-[50%]">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="exampleCheck1"
                    required
                  />
                  <label
                    className="ml-2 text-sm text-gray-500 hover:text-gray-900"
                    htmlFor="exampleCheck1"
                  >
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
                <Link
                  to="/seller/login"
                  className="text-sm text-gray-500 hover:text-gray-900 w-full"
                >
                  i already have an account
                </Link>
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
                  Sign up
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
