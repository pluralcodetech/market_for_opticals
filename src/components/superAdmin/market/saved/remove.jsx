import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBack2Line } from "react-icons/ri";

function Remove({ index, product }) {
  const storage = localStorage.getItem("saved");
  const [saved, setSaved] = useState(
    storage.length > 0 ? JSON.parse(storage) : []
  );

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

  const deleteProduct = () => {
    if (saved.length > 0) {
      let updatedSaved = saved.slice(0, index).concat(saved.slice(index + 1));
      localStorage.setItem("saved", JSON.stringify(updatedSaved));
      setSaved(updatedSaved);
      notify(product.product_name + " deleted to saved");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      notify(" no product found");
    }
  };
  return (
    <>
      <button
        onClick={(e) => deleteProduct()}
        className="h-7 w-fit bg-white border border-yellow-500 flex items-center rounded px-2 text-sm"
      >
        <RiDeleteBack2Line size={12} className="mr-2 text-red-500" />
        Remove
      </button>
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

export default Remove;
