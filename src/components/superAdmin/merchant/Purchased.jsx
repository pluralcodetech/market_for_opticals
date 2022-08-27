import React, { useState, useEffect } from "react";
import { Avatar, Spinner } from "flowbite-react";
import axios from "axios";
import Paginator from "../Paginator";

function Purchased({ id }) {
  const api_url = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState();
  const [currentPageIndex, setcurrentPageIndex] = useState(
    product?.current_page || 1
  );

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    axios
      .get(
        `${api_url}/view_seller_transaction/${id}?page=${currentPageIndex}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      {" "}
      {product && product?.data?.length > 0 ? (
        product.data.map((data2) => (
          <div className="flex items-center justify-between py-2 px-3">
            <Avatar img={data2.image_url} />
            <div className="w-[90%]">
              <h5 className="text-base font-semibold">{data2.product_name}</h5>
              <p className="text-xs">Product Price: ₦{data2.product_price}</p>
              <p className="text-xs">
                Amount Ordered: {data2.amount_ordered}
              </p>{" "}
              <p className="text-xs">
                {data2.time} | {data2.date}
              </p>
            </div>
          </div>
        ))
      ) : (
        <Spinner
          aria-label="Extra large spinner example"
          color="warning"
          size="xl"
        />
      )}
      <Paginator
        data={product}
        setcurrentPageIndex={setcurrentPageIndex}
        currentPageIndex={currentPageIndex}
      />
    </div>
  );
}

export default Purchased;
