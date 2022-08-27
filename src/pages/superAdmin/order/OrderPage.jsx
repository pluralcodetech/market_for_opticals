import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Card from "../../../components/superAdmin/product/Card";
import { Badge } from "flowbite-react";
import Paginator from "../../../components/superAdmin/Paginator";

function OrderPageAdmin() {
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

  const [products, setProducts] = useState("");
  const [filter, setfilter] = useState("pending");
  const [loading, setLoading] = useState(false);
  const [dashboarddatas, setdashboarddatas] = useState([]);
  const [currentPageIndex, setcurrentPageIndex] = useState(
    products?.current_page || 1
  );

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }

    const formData = new FormData();
    formData.append("filter", filter);

    axios
      .get(`${api_url}/orders_on_opticals?page=${currentPageIndex}`, {
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
  }, [filter, currentPageIndex]);

  useEffect(() => {
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }

    axios
      .get(`${api_url}/super_admin_dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdashboarddatas(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        notifyWarning(err.response.data.error);
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-4 w-full">
        <div className="my-3 flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Orders</h1>
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
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="on the way">On the way</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card
            title={"total amount ordered"}
            amount={dashboarddatas.total_amount_ordered || 0}
          />
          <Card
            title={"total pending delivery"}
            amount={dashboarddatas.total_pending_delivery || 0}
          />
          <Card
            title={"total products uploaded"}
            amount={dashboarddatas.total_products_uploaded || 0}
          />
          <Card
            title={"total sellers on the platform"}
            amount={dashboarddatas.total_sellers_on_the_platform || 0}
          />
        </div>
        <div className="bg-white rounded-lg h-fit w-full mt-6">
          <table className="table-auto	w-full border">
            <thead>
              <tr className="text-sm text-gray-500 p-4">
                <th className="p-4 border">Order ID</th>
                <th className="border">Customer Name</th>
                <th className="border"> Status</th>
                <th className="border"> Ordered on</th>
                <th className="border"> Time </th>
                <th className="border"></th>
              </tr>
            </thead>
            <tbody>
              {products && products?.data.length > 0 ? (
                products?.data.map((product, index) => (
                  <tr key={product.order_id} className="border-b">
                    <td className="p-4 border text-center">
                      {product.customer_id}
                    </td>

                    <td className="border text-center">
                      {product.customer_name}
                    </td>
                    <td className="border text-center">
                      <Badge
                        color={
                          product.delivery_status === "pending"
                            ? "warning"
                            : "success"
                        }
                        size="sm"
                      >
                        {product.delivery_status}
                      </Badge>
                    </td>
                    <td className="border text-center">{product.date}</td>
                    <td className="border text-center">{product.time}</td>

                    <td className="border text-center rounded-lg">
                      <a
                        href={`/superadmin/order-list/${product.customer_id}/${product.date}/${product.time}`}
                        className="flex justify-center items-center w-full"
                      >
                        <button className="border border-[#E16A16] text-[#E16A16] text-white font-bold py-1 px-4 rounded-lg">
                          View
                        </button>
                      </a>
                    </td>
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

export default OrderPageAdmin;
