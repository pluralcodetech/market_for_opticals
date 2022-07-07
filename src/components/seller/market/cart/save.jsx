import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../../db";

function SaveCart({ product, image_url }) {
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
    if (product.stock.toLowerCase() === "in stock") {
      try {
        const carts = db.carts.where("product_id").equals(product.id);

        carts.count().then((count) => {
          if (count === 0) {
            db.carts
              .add({
                product_id: product.id,
                product_name: product.product_name,
                product_price: product.product_price,
                image_url: image_url,
                product_quantity: 1,
                owner_id: product.owner_id,
              })
              .then(() => {
                notify(product.product_name + " added to cart");
              });
          } else {
            notify(product.product_name + " already added to cart");
          }
        });
      } catch (error) {}
    } else {
      notify(product.product_name + " is out of stock");
    }
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
