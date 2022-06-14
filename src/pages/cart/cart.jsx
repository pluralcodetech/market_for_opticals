import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar2 from "../../components/market/navbar/navbar2";
import Product from "../../components/market/cart/product";
import { db } from "../../db";
import Checkout from "../../components/market/cart/checkout";
import Auth from "../../components/auth/Auth";

function CartPage() {
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  const [showCheckout, setshowCheckout] = useState(false);

  useEffect(() => {
    db.carts.toArray().then((data) => {
      setcart(data);
    });

    calculatePriceTotal();
  }, [cart]);

  //console.log(cart);

  const calculatePriceTotal = () => {
    let val = 0;
    cart.map((item) => {
      val += item.product_price * item.product_quantity;
    });
    settotal(val);
  };

  return (
    <Layout>
      <Navbar2 />
      {showCheckout ? (
        <Auth>
          <div className="w-full md:w-8/12 mx-auto shadow bg-white mt-8  pb-4">
            <button
              onClick={(e) => setshowCheckout(false)}
              className="h-7 mb-6 w-fit  text-slate-900 border-[.01rem] border-gray-100 shadow flex items-center rounded px-2 py-4 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>{" "}
              Go back
            </button>
            <Checkout />
          </div>
        </Auth>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full md:w-11/12 mx-auto">
          <div className="md:col-span-4 w-full mx-auto mt-8 h-fit bg-white shadow border mb-4 h-fit pb-4 ">
            <div className="border-b p-2 mb-3">
              <h4 className="text-lg font-bold">cart items ({cart.length})</h4>
            </div>
            {cart.length > 0 ? (
              cart.map((save, index) => {
                return <Product key={save.id} product={save} index={index} />;
              })
            ) : (
              <div className="text-center w-full">
                <h4 className="text-sm font-bold my-72">No cart items</h4>
              </div>
            )}
          </div>

          <div className="md:col-span-2 w-full mx-auto mt-8 h-fit bg-white shadow border mb-4 h-fit pb-4 sticky md:static bottom-0  ">
            <div className="border-b p-2 mb-3">
              <h4 className="text-lg font-bold">CART SUMMARY</h4>
            </div>
            <div className="pl-3">
              <p>Subtotal :&#x20A6; {total.toLocaleString() + ".00"}</p>
              <button
                onClick={() => {
                  setshowCheckout(true);
                }}
                className="bg-[#E16A16] hover:bg-amber-500 text-white text-sm py-3 px-1 mt-2 mb-1 rounded w-[95%] mx-auto"
              >
                CHECKOUT &#x20A6; {total.toLocaleString() + ".00"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CartPage;
