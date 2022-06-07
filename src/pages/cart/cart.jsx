import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar2 from "../../components/market/navbar/navbar2";
import Product from "../../components/market/cart/product";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

function CartPage() {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    db.carts.toArray().then((data) => {
      setcart(data);
    });
  }, []);

  console.log(cart);

  return (
    <Layout>
      <Navbar2 />
      <div className="w-full md:w-7/12 mx-auto mt-8 h-fit bg-white shadow border mb-4 h-fit pb-4 ">
        <div className="border-b p-2 mb-3">
          <h4 className="text-lg font-bold">cart items</h4>
        </div>
        {cart.length > 0 ? (
          cart.map((save, index) => {
            return <Product key={save.id} product={save} index={index} />;
          })
        ) : (
          <div className="text-center">
            <h4 className="text-sm font-bold my-72">No cart items</h4>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default CartPage;
