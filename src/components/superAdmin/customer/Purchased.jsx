import React, { useState, useEffect } from "react";
import { Avatar, Spinner } from "flowbite-react";
import axios from "axios";

function Purchased({ id }) {
  const api_url = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    axios
      .get(`${api_url}/get_customer_ordered_product/${id}`, {
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

  return product && product?.length > 0 ? (
    product.map((data2) =>
      data2?.order.map((data) => (
        <div className="flex items-center justify-between py-2 px-3">
          <Avatar img={data.image_url} />
          <div className="w-[90%]">
            <h5 className="text-base font-semibold">{data.product_name}</h5>
            <p className="text-xs">Product Price: ₦{data.product_price}</p>
            <p className="text-xs">
              Amount Ordered: {data.amount_ordered}
            </p>{" "}
            <p className="text-xs">
              {data.time} | {data.date}
            </p>
          </div>
        </div>
      ))
    )
  ) : (
    <Spinner
      aria-label="Extra large spinner example"
      color="warning"
      size="xl"
    />
  );
}

export default Purchased;
