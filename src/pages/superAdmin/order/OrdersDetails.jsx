import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Avatar, Spinner } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Profile from "../../../components/superAdmin/orders/Profile";
import icon from "../../../assets/images/icon.svg";

function OrdersDetailsAdmin() {
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

  const { id, date, time } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    axios
      .get(
        `${api_url}/orders_details?date=${date}&customer_id=${id}&time=${time}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setProduct(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        notifyWarning(err.response.data.message);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto py-4 px-2 md:px-4 w-full">
        <h1 className="text-2xl font-bold">Order</h1>
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
          <h6 className="text-slate-800">order-details |{id}</h6>
        </div>
        <div className="w-[100%] h-fit bg-white rounded-lg mt-3 pb-4">
          <div className="pt-3 pb-3 px-12 flex items-center justify-between border w-full">
            <div className="flex items-center">
              <h6 className="mx-4">Order ID</h6>
              <h1 className="text-3xl font-bold">{id}</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit mt-3 ">
            <div className="col-span-1  h-fit p-2">
              <Card>
                <div className="flex items-center">
                  <Avatar rounded={true} bordered={true} />
                  <p className="font-normal text-gray-700 dark:text-gray-400 ml-4">
                    Ordered by {product?.customer_detail?.name}
                  </p>
                </div>
              </Card>
              <div className=" border rounded-lg  mt-3">
                <h4 className="text-md m-2 font-semibold">
                  All Product ordered
                </h4>
                {product && product?.products_ordered ? (
                  product.products_ordered.map((data) => (
                    <div className="flex items-center justify-between py-2 px-3">
                      <Avatar img={data.image_url} />
                      <div className="w-[90%]">
                        <h5 className="text-base font-semibold">
                          {data.product_name}
                        </h5>
                        <p className="text-xs">
                          Product Price: ₦{data.product_price}
                        </p>
                        <p className="text-xs">
                          Amount Ordered: {data.amount_ordered}
                        </p>{" "}
                        <p className="text-xs">
                          {data.time} | {data.date}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <Spinner
                    aria-label="Extra large spinner example"
                    color="warning"
                    size="xl"
                  />
                )}
              </div>
            </div>
            <div className="col-span-1  px-3 md:p-5 ">
              {product && product?.customer_detail ? (
                <Profile customer={product?.customer_detail} />
              ) : (
                <Spinner
                  aria-label="Extra large spinner example"
                  color="warning"
                  size="xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrdersDetailsAdmin;
