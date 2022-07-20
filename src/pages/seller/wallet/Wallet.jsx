import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/seller/Layout/Layout";
import Card from "../../../components/seller/product/Card";

function Wallet() {
  const api_url = import.meta.env.VITE_API_URL;

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

  const [products, setProducts] = useState([]);
  const [filter, setfilter] = useState("approved");
  const [loading, setLoading] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);

  const [product_stock_count, setproduct_stock_count] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/seller/login");
    }

    const formData = new FormData();
    formData.append("filter", filter);

    axios
      .get(`${api_url}/get_orderedproduct_and_paymentstatus`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
        setLoading(false);
      });
  }, [filter]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/seller/login");
    }

    axios
      .get(`${api_url}/admin_dashboard_api`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setproduct_stock_count(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-200 h-fit overflow-y-auto p-4 w-full">
        <div className="my-3 flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Wallet</h1>
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
            <option value="approved">Approved</option>
            <option value="in stock">In stock</option>
            <option value="Out of stock">Out of Stock</option>
          </select>
        </div>
        <div className="bg-white rounded-lg h-fit w-full mt-6 grid grid-cols-7 gap-1">
          <table className="table-auto	w-full border col-span-5">
            <thead>
              <tr className="text-sm text-gray-500 p-4">
                <th className="p-4 border">Product ID</th>
                <th className="border">Image</th>
                <th className="border">Product Name</th>
                <th className="border">Price</th>
                <th className="border">Qty Ordered</th>
                <th className="border">Status</th>
                <th className="border"></th>
                <th className="border">Date Listed</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4 border text-center">{product.id}</td>
                    <td className="border">
                      <img
                        src={`${product.image_url}`}
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
                      {product.amount_ordered}
                    </td>
                    <td className="border text-center">{product.status}</td>

                    <td className="border text-center">
                      <a
                        href={`/seller/product-detail/${product.id}`}
                        className="flex justify-center items-center w-full"
                      >
                        <button className="border border-[#E16A16] text-[#E16A16] text-white font-bold py-1 px-4 rounded">
                          View
                        </button>
                      </a>
                    </td>
                    <td className="border text-center">{product.date}</td>
                  </tr>
                ))
              ) : (
                <tr className="border-b">
                  <td className="p-4 border" colSpan="8">
                    <h1 className="text-center text-gray-500">Nothing found</h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="bg-amber-500 h-24 w-[90%] pt-3 rounded-lg col-span-2 mt-6 mx-3 flex flex-col items-center">
            <h4 className="text-gray-50">Total Amount Earned</h4>
            <h1 className="text-3xl font-bold my-3 text-gray-50">
              ₦{product_stock_count ? product_stock_count.admin.wallet : 0}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Wallet;
