import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Save({ product }) {
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

  const storeProduct = () => {
    if (saved.length > 0) {
      saved.map((save) => {
        if (save.id === product.id) {
          notify("Product already saved");
          return;
        } else {
          const newSaved = [...saved, product];
          localStorage.setItem("saved", JSON.stringify(newSaved));
          setSaved(newSaved);
          notify(product.product_name + " added to saved");
        }
      });
    } else {
      const newSaved = [...saved, product];
      localStorage.setItem("saved", JSON.stringify(newSaved));
      setSaved(newSaved);
      notify(product.product_name + " added to saved");
    }
  };

  return (
    <>
      <button
        onClick={storeProduct}
        className="h-7 w-fit bg-white border border-yellow-500 flex items-center rounded px-2 text-sm"
      >
        <BsFillHeartFill size={12} className="mr-2 text-red-500" />
        Saved
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

export default Save;
