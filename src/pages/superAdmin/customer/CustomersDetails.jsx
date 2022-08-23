import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Avatar, Spinner, Tabs } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/superadmin/Layout/Layout";
import Profile from "../../../components/superAdmin/customer/Profile";
import icon from "../../../assets/images/icon.svg";
import Purchased from "../../../components/superAdmin/customer/Purchased";
import BankDetails from "../../../components/superAdmin/customer/BankDetails";

function CustomersDetails() {
  const api_url = import.meta.env.VITE_API_URL;
  const { id } = useParams();

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

  const [customer, setcustomer] = useState();
  const [isUpdating, setisUpdating] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    axios
      .get(`${api_url}/get_customer_details/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setcustomer(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-fit overflow-y-auto p-4 w-full">
        <h1 className="text-2xl font-bold">Customer</h1>
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
        <div className="flex">
          <img src={icon} alt="" className="mr-3" />
          <h6 className="text-slate-800">Customer|{id}</h6>
        </div>
        <div className="w-[100%] h-[100%] bg-white rounded-lg mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit mt-3 ">
            <div className="col-span-1  p-5 ">
              <Profile customer={customer ? customer : {}} />
            </div>
            <div className="col-span-1  h-fit p-2">
              <div className=" border rounded-lg  mt-3 h-fit">
                <div className="pt-3 pb-3 px-4  flex items-center justify-between  w-full">
                  <div className="flex w-full">
                    {!isUpdating ? (
                      <button
                        onClick={() => {
                          const token = sessionStorage.getItem("super_token");
                          if (!token) {
                            navigate("/seller/login");
                          }
                          setisUpdating(true);
                          axios
                            .get(`${api_url}/suspend_customer_account/${id}`, {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            })
                            .then((res) => {
                              notifySuccess("status updated successfully");
                              // console.log(res);
                            })
                            .catch((err) => {
                              notifyWarning(err.response.data.message);
                              console.log(err.response);
                            })
                            .finally(() => {
                              setisUpdating(false);
                            });
                        }}
                        className=" bg-red-500 hover:bg-red-700
                        text-white font-light py-1 px-4 rounded"
                      >
                        Suspend Account
                      </button>
                    ) : (
                      <Spinner
                        aria-label="Extra large spinner example"
                        color="warning"
                        size="xl"
                      />
                    )}
                  </div>
                </div>
                <Card>
                  <div className="flex flex-col items-center bg-[#FDF0DC] h-full p-5">
                    <h2>total number of ordersmade</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">
                      {customer?.total_number_of_ordersmade || 0}
                    </p>
                  </div>
                </Card>
                <Tabs.Group aria-label="Full width tabs" style="fullWidth">
                  <Tabs.Item title=" Purchase history">
                    <div className="h-full">
                      <h4 className="text-md m-2 font-semibold">
                        All customer orders
                      </h4>
                      <Purchased id={id} />
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title=" Bank Details">
                    <div className="h-full">
                      <h4 className="text-md m-2 font-semibold">
                        Personal Bank Account
                      </h4>
                      <BankDetails />
                    </div>
                  </Tabs.Item>

                  <Tabs.Item title=" Purchase Stats">
                    <div className="h-full">
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">Total Cash Spent</h6>
                        <h6>₦50,000.00</h6>
                      </div>
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">
                          Amount of Delivered products to customer
                        </h6>
                        <h6>9</h6>
                      </div>
                      <div className="flex justify-between items-center w-full mt-3">
                        <h6 className="text-sm font-light">
                          Amount of product In Progress
                        </h6>
                        <h6>10</h6>
                      </div>
                    </div>
                  </Tabs.Item>
                </Tabs.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CustomersDetails;
