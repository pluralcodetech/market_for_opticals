import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../../components/seller/Layout/Layout";

function OrdersDetails() {
  const api_url = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/seller/login");
    }
    axios
      .get(`${api_url}/admin_order_details/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Layout>
      {product && (
        <div className="bg-gray-200 w-full p-8 h-full">
          <div className="bg-white rounded-lg w-full md:w-7/12 mx-auto h-full">
            <img src={product.image_url} alt="" className="h-[60%]" />
            <div className="p-3 w-full">
              <h1 className="text-lg font-semibold">Order ID : {product.id}</h1>
              <h4 className="my-2 text-xl font-bold">{product.product_name}</h4>
              <h4 className="my-2 text-lg">₦ {product.product_price}</h4>
              <h6 className="my-2">order quantity {product.amount_ordered}</h6>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default OrdersDetails;
