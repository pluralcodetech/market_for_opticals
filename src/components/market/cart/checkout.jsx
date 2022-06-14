import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { db } from "../../../db";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePaystackPayment } from "react-paystack";

function Checkout() {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    db.carts.toArray().then((data) => {
      setcart(data);
    });

    calculatePriceTotal();
    getTotalProducts();
  }, [cart]);

  //console.log(cart);

  const calculatePriceTotal = () => {
    let val = 0;
    cart.map((item) => {
      val += item.product_price * item.product_quantity;
    });
    settotal(val);
  };

  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
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

  const user = JSON.parse(sessionStorage.getItem("user"));

  const config = {
    reference: "optics" + new Date().getTime().toString(),
    email: user ? user.email : "example@email.com",
    amount: total * 100,
    publicKey: "pk_test_ccac6828ea372cbc6082a24f27176734803dcee5",
  };

  const handleCheckout = (reference) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("reference", reference.reference);
    formData.append("total_amount", total);
    formData.append("products", JSON.stringify(cart));
    formData.append("shipping_name", name);
    formData.append("phone_number", phonenumber);
    formData.append("destination_address", address);
    formData.append("state", state);

    setLoading(true);
    //add authtoken to header
    axios
      .post(`${api_url}/verify_payments`, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        notifySuccess(res.data.message);
        db.carts.clear();
        setTimeout(() => {
          navigate("/market");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        notifyWarning(err.response.data.message);
      });
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    handleCheckout(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);

    if (!name || !phonenumber || !address || !state) {
      return (
        <button className="bg-[#E16A16] hover:bg-amber-500 text-white text-sm py-3 px-1 mt-2 mb-1 rounded w-[95%] mx-auto">
          CHECKOUT &#x20A6; {total.toLocaleString() + ".00"}
        </button>
      );
    }

    return (
      <div>
        <button
          className="bg-[#E16A16] hover:bg-amber-500 text-white text-sm py-3 px-1 mt-2 mb-1 rounded w-[95%] mx-auto"
          onClick={() => {
            initializePayment(handleCheckout, onClose);
          }}
        >
          CHECKOUT &#x20A6; {total.toLocaleString() + ".00"}
        </button>
      </div>
    );
  };

  return (
    <form className="px-2 mt-3" onSubmit={(e) => e.preventDefault()}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-gray-500  md:text-left mb-1 md:mb-0 pr-4">
            Name
          </label>
          <input
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border focus:border-slate-500"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Phone Number
          </label>
          <input
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border focus:border-slate-500"
            type="tel"
            placeholder="(234) 456-7890"
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="w-full mb-4">
        <textarea
          className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border focus:border-slate-500"
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <select
          className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border focus:border-slate-500"
          value={state}
          onChange={(e) => setstate(e.target.value)}
          required
        >
          <option value="">Select State</option>
          <option value="lagos">lagos</option>
        </select>
      </div>

      <div>
        <PaystackHookExample />
      </div>
    </form>
  );
}

export default Checkout;
