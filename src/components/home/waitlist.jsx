import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Waitlist() {
  const [email, setemail] = useState("");
  const [isloading, setisloading] = useState(false);

  const notify = (msg) =>
    toast(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const joinWaitlist = (e) => {
    e.preventDefault();
    setisloading(true);
    axios
      .post("https://codesandbox.com.ng/market_for_opticals/api/waiting_list", {
        email,
      })
      .then((res) => {
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      })
      .finally(() => {
        setemail("");
        setisloading(false);
      });
  };

  return (
    <>
      <form
        onSubmit={joinWaitlist}
        className="flex justify-between items-center w-full"
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          placeholder="Email"
        />
        {isloading ? (
          <button className=" mx-4 w-44 bg-[#E16A16] hover:bg-amber-500 text-xs md:text-base text-white font-bold py-2 px-4 rounded">
            loading
          </button>
        ) : (
          <button
            type="submit"
            className=" mx-4 w-44 bg-[#E16A16] hover:bg-amber-500 text-xs md:text-base text-white font-bold py-2 px-4 rounded"
          >
            Join Waitlist
          </button>
        )}
      </form>
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
    </>
  );
}

export default Waitlist;
