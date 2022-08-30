import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Avatar, Spinner } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Profile from "../../../components/superAdmin/wallet/Profile";
import icon from "../../../assets/images/icon.svg";

function WalletHistory() {
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

  const { id, date } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    axios
      .post(
        `${api_url}/super_adminget_wallet_details`,
        {
          date: date,
          owner_id: id,
        },
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
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-1 md:p-4 w-full">
        <h1 className="text-2xl font-bold">Wallet History</h1>
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
          <h6 className="text-slate-800">History-details |{id}</h6>
        </div>
        <div className="w-[100%] h-fit bg-white rounded-lg mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit mt-3 ">
            <div className="col-span-1  h-fit p-2">
              <div className=" border rounded-lg  mt-3">
                <h4 className="text-md m-2 font-semibold">All Orders</h4>
                {product && product?.wallet_list ? (
                  product.wallet_list.map((data) => (
                    <div className="flex items-center justify-between py-2 px-3">
                      <Avatar img={data.product_image} />
                      <div className="w-[90%]">
                        <h5 className="text-base font-semibold">
                          {data.product_name}
                        </h5>
                        <p className="text-xs">
                          Product Price: ₦{data.product_price}
                        </p>
                        <p className="text-xs">
                          Amount Ordered: {data.product_quantity}
                        </p>{" "}
                        <p className="text-xs">
                          Amount made: {data.total_amount_product_made}
                        </p>{" "}
                        <p className="text-xs">
                          Amount made from commission:{" "}
                          {data.total_amount_made_fromcommission}
                        </p>{" "}
                        <p className="text-xs">
                          Amount to pay seller: {data.amount_to_pay_seller}
                        </p>{" "}
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
            <div className="col-span-1  p-2 md:p-5 ">
              {product && product?.seller_details ? (
                <Profile merchant={product?.seller_details} date={date} />
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

export default WalletHistory;
