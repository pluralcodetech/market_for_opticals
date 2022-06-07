import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db";

function SaveCart({ product }) {
  /* const storage = localStorage.getItem("cart");
  const [cart, setcart] = useState(storage ? JSON.parse(storage) : []);*/

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
    try {
      const carts = db.carts.where("product_id").equals(product.id);

      carts.count().then((count) => {
        if (count === 0) {
          db.carts
            .add({
              product_id: product.id,
              product_name: product.product_name,
              product_price: product.product_price,
              product_image: product.image_url,
              product_quantity: 1,
            })
            .then(() => {
              notify(product.product_name + " added to cart");
            });
        } else {
          notify(product.product_name + " already added to cart");
        }
      });
    } catch (error) {}

    /* if (cart) {
      if (cart.find((item) => item.id === product.id)) {
        notify("product already added to cart");
      } else {
        let updatedCart = [...cart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setcart(updatedCart);
        notify(product.product_name + " added to cart");
      }
    } else {
      let updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setcart(updatedCart);
      notify(product.product_name + " added to cart");
    }*/
  };

  return (
    <>
      <button
        onClick={storeProduct}
        className="bg-[#E16A16] hover:bg-amber-500 text-white text-sm py-1 px-1 rounded"
      >
        Add to cart
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

export default SaveCart;
