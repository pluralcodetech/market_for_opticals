import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import Navbar2 from "../../components/market/navbar/navbar2";

function Profile() {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [isediting, setisediting] = useState(false);

  const [user, setuser] = useState("");
  const [fullname, setfullname] = useState(user.name ? user.name : "");
  const [email, setemail] = useState(user.email ? user.email : "");
  const [phone, setphone] = useState(
    user.phone_number ? user.phone_number : ""
  );
  const [address, setaddress] = useState(
    user.destination_address ? user.destination_address : ""
  );
  const [state, setstate] = useState(user.state ? user.state : "");

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setuser(JSON.parse(sessionStorage.getItem("user")));
    /*setfullname(user.name ? user.name : "");
    setemail(user.email ? user.email : "");
    setphone(user.phone_number ? user.phone_number : "");
    setaddress(user.destination_address ? user.destination_address : "");
    setstate(user.state ? user.state : "");*/
  }, []);

  useEffect(() => {
    setfullname(user.name ? user.name : "");
    setemail(user.email ? user.email : "");
    setphone(user.phone_number ? user.phone_number : "");
    setaddress(user.destination_address ? user.destination_address : "");
    setstate(user.state ? user.state : "");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    const formData = new FormData();
    formData.append("name", fullname);
    formData.append("email", email);
    formData.append("phone_number", phone);
    formData.append("shipping_address", address);
    formData.append("state", state);

    //add authtoken to header
    axios
      .post(`${api_url}/update_customer_details`, {
        formData,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("user_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setloading(false);
        setisediting(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };

  const logout = () => {
    if (window.confirm("are you sure you want to logout?")) {
      sessionStorage.clear();
      navigate("/");
    }
  };

  return (
    <Layout>
      <Navbar2 />
      <div className="w-full md:w-8/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
          <div className=" bg-white  border h-fit rounded py-4">
            <div className="w-full flex items-center justify-center">
              <div className="bg-amber-100 h-20 w-20 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <center>
              <h1 className="text-lg font-bold text-center mb-4 mt-2">
                {fullname}
              </h1>
              <button
                onClick={(e) => logout()}
                className="text-[#E16A16] border border-[#E16A16]  text-white text-sm font-bold py-1 px-4 rounded"
              >
                Logout
              </button>
            </center>

            <form className="px-3" onSubmit={handleSubmit}>
              <div className="px-2 my-6 md:my-8">
                <div className="flex justify-between items-center mb-2">
                  <h6 className="text-gray-400">Full Name</h6>
                  <p className="text-slate-600">{fullname}</p>
                </div>
                {isediting ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded p-2"
                    value={fullname}
                    onChange={(e) => setfullname(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="px-2 my-6 md:my-8">
                <div className="flex justify-between items-center mb-2">
                  <h6 className="text-gray-400">Email</h6>
                  <p className="text-slate-600">{email}</p>
                </div>
                {isediting ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded p-2"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="px-2 my-6 md:my-8">
                <div className="flex justify-between items-center mb-2">
                  <h6 className="text-gray-400">phone</h6>
                  <p className="text-slate-600">{phone}</p>
                </div>

                {isediting ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded p-2"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="px-2 my-6 md:my-8">
                <div className="items-center mb-2">
                  <h6 className="text-gray-400 mb-2">Address</h6>
                  {isediting ? (
                    ""
                  ) : (
                    <p className="text-slate-600 border w-full p-2 h-12">
                      {address}
                    </p>
                  )}
                </div>
                {isediting ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded p-2"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="px-2 my-6 md:my-8">
                <div className="flex justify-between items-center">
                  <h6 className="text-gray-400">State</h6>
                  <p className="text-slate-600">{state}</p>
                </div>
                {isediting ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded p-2"
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </div>
              <center>
                <h6
                  className="text-green-500 mb-4"
                  onClick={(e) => setisediting(!isediting)}
                >
                  {isediting ? "Stop editing" : " Edit Profile"}
                </h6>
              </center>
              {isediting ? (
                <button
                  type="submit"
                  className="w-full mb-4 bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
