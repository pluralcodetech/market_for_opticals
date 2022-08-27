import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Card from "../../../components/superAdmin/product/Card";

import Paginator from "../../../components/superAdmin/Paginator";

function AdminProduct() {
  const api_url = import.meta.env.VITE_API_URL;
  const [isAddproductModalShowing, setisAddproductModalShowing] =
    useState(false);
  const [isAddSubproductModalShowing, setisAddSubproductModalShowing] =
    useState(false);

  const notifyWarning = (msg) =>
    toast.warn(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [products, setProducts] = useState("");
  const [product_id, setproduct_id] = useState("");
  const [filter, setfilter] = useState("approved");
  const [loading, setLoading] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);
  const [currentPageIndex, setcurrentPageIndex] = useState(
    products?.current_page || 1
  );

  const [product_stock_count, setproduct_stock_count] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }

    const formData = new FormData();
    formData.append("filter", filter);

    axios
      .post(
        `${api_url}/super_admin_product_list?page=${currentPageIndex}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
        setLoading(false);
      });
  }, [filter, isDeleting, currentPageIndex]);

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }

    axios
      .get(`${api_url}/superadmin_product_count`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setproduct_stock_count(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-1 md:p-4 w-full">
        <div className="my-3 flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Products</h1>
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
          <select
            value={filter}
            onChange={(e) => setfilter(e.target.value)}
            className="w-40  bg-white border mx-2 border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500"
          >
            <option value="In stock">In stock</option>
            <option value="Out of stock">Out of stock</option>
            <option value="approved"> approved</option>
            <option value="not approved"> not approved</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card
            title="total products"
            amount={product_stock_count.sum_of_stock_products}
          />
          <Card
            title="total out of stock"
            amount={product_stock_count.sum_of_outof_stock_products}
          />
          <Card
            title="approved products"
            amount={product_stock_count.sum_of_approved_products}
          />
          <Card
            title="total order made"
            amount={product_stock_count.sum_of_totalorder_made}
          />
        </div>
        <div className="bg-white rounded-lg h-fit w-full mt-6 overflow-y-auto">
          <table className="table-auto	w-full border">
            <thead>
              <tr className="text-sm text-gray-500 p-4">
                <th className="p-4 border">Product ID</th>
                <th className="border">Image</th>
                <th className="border">Product Name</th>
                <th className="border">Price</th>
                <th className="border">Qty sold</th>
                <th className="border">stock quantity</th>
                <th className="border">Amount made</th>
                <th className="border">Status</th>
                <th className="border">Action</th>
                <th className="border"></th>
                <th className="border">Date Listed</th>
              </tr>
            </thead>
            <tbody>
              {products && products.data.length > 0 ? (
                products.data.map((product, index) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4 border text-center">{product.id}</td>
                    <td className="border">
                      <img
                        src={`${product.product_image}`}
                        alt="product"
                        className="h-20 w-20"
                      />
                    </td>
                    <td className="border text-center">
                      {product.product_name}
                    </td>
                    <td className="border text-center">
                      {product.product_price}
                    </td>
                    <td className="border text-center">
                      {product.product_amount_sold}
                    </td>
                    <td className="border text-center">
                      {product.product_stock_quantity}
                    </td>
                    <td className="border text-center">
                      {product.product_amount_made}
                    </td>
                    <td className="border text-center">
                      {product.approved_status}
                    </td>
                    <td className="border text-center">
                      <div className="flex justify-center items-center w-full">
                        {!isDeleting && (
                          <button
                            onClick={() => {
                              const token =
                                sessionStorage.getItem("super_token");
                              if (!token) {
                                navigate("/seller/login");
                              }
                              setisDeleting(true);
                              axios
                                .get(
                                  `${api_url}/aprove_product/${product.id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${token}`,
                                    },
                                  }
                                )
                                .then((res) => {
                                  notifySuccess("status updated successfully");
                                })
                                .catch((err) => {
                                  notifyWarning(err.response.data.message);
                                })
                                .finally(() => {
                                  setisDeleting(false);
                                });
                            }}
                            className={`${
                              product?.approved_status === "Approved"
                                ? " bg-red-500 hover:bg-red-700"
                                : " bg-green-500 hover:bg-green-700"
                            } text-white font-light py-1 px-4 rounded`}
                          >
                            {product?.approved_status === "Approved"
                              ? "Suspend"
                              : "Approve"}
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="border text-center">
                      <a
                        href={`/superadmin/product/${product.id}`}
                        className="flex justify-center items-center w-full"
                      >
                        <button className="border border-[#E16A16] text-[#E16A16] text-white font-light py-1 px-4 rounded">
                          View
                        </button>
                      </a>
                    </td>
                    <td className="border text-center">{product.date_time}</td>
                  </tr>
                ))
              ) : (
                <tr className="border-b">
                  <td className="p-4 border" colSpan="8">
                    <h1 className="text-center text-gray-500">No Products</h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <Paginator
            data={products}
            setcurrentPageIndex={setcurrentPageIndex}
            currentPageIndex={currentPageIndex}
          />
        </div>
      </div>
    </Layout>
  );
}

export default AdminProduct;
