import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import Navbar2 from "../../components/market/navbar/navbar2";
import Product from "../../components/market/orderHistory/product";

function History() {
  const api_url = import.meta.env.VITE_API_URL;
  const [history, sethistory] = useState([]);

  //customer_order_history
  useEffect(() => {
    axios
      .get(`${api_url}/customer_order_history`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("user_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        sethistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Navbar2 />
      <div className="w-full md:w-7/12 mx-auto mt-8 h-fit bg-white shadow border mb-4 h-fit pb-4 ">
        <div className="border-b p-2 mb-3">
          <h4 className="text-lg font-bold">Order History</h4>
        </div>
        {history.length > 0 ? (
          history.map((save, index) =>
            save.map((sav, index) => (
              <Product key={sav.id} product={sav} index={index} />
            ))
          )
        ) : (
          <div className="text-center">
            <h4 className="text-sm font-bold my-72">No history items</h4>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default History;
