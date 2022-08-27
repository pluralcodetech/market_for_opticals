import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Header from "../../../components/superAdmin/Layout/Header";
import ProductCard from "../../../components/superAdmin/search /ProductCard";
import CustomerCard from "../../../components/superAdmin/search /CustomerCard";
import OrdersCard from "../../../components/superAdmin/search /OrdersCard";
import MerchantCard from "../../../components/superAdmin/search /MerchantCard";
import NotFound from "../../../components/superAdmin/search /NotFound";

function SearchPage() {
  const navigate = useNavigate();
  const api_url = import.meta.env.VITE_API_URL;
  const { category, query } = useParams();
  const [searchresult, setsearchresult] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const token = sessionStorage.getItem("super_token");
        if (!token) {
          navigate("/superadmin/login");
        }
        const res = await axios.post(
          `${api_url}/super_admin_search_api`,
          { page_type: category, query_data: query },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(res);
        setsearchresult(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  }, [query, category]);

  return (
    <div>
      <Header />
      <div className="w-full md:w-8/12 mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-4 ">
        {searchresult ? (
          searchresult.type === "product_page" ? (
            searchresult?.product_array.length > 0 ? (
              searchresult?.product_array.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
            ) : (
              <NotFound />
            )
          ) : searchresult.type === "customer_page" ? (
            searchresult?.customer_page.data.length > 0 ? (
              searchresult?.customer_page.data.map((customer, index) => (
                <CustomerCard customer={customer} key={index} />
              ))
            ) : (
              <NotFound />
            )
          ) : (
            ""
          )
        ) : (
          "Nothing found"
        )}

        {searchresult ? (
          searchresult.type === "order_page" ? (
            searchresult?.paginate_data.data.length > 0 ? (
              searchresult?.paginate_data.data.map((customer, index) => (
                <OrdersCard customer={customer} key={index} />
              ))
            ) : (
              <NotFound />
            )
          ) : searchresult.type === "seller_page" ? (
            searchresult?.seller_list.data.length > 0 ? (
              searchresult?.seller_list.data.map((merchant, index) => (
                <MerchantCard merchant={merchant} key={index} />
              ))
            ) : (
              <NotFound />
            )
          ) : (
            ""
          )
        ) : (
          "Nothing found"
        )}
      </div>
    </div>
  );
}

export default SearchPage;
