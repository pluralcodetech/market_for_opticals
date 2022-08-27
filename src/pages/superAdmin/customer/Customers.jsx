import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Card from "../../../components/superAdmin/product/Card";
import { Avatar, Badge, Button } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import Paginator from "../../../components/superAdmin/Paginator";

function Customers() {
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
  const [filter, setfilter] = useState("approved");
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
      .get(`${api_url}/get_all_customers?page=${currentPageIndex}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        // console.log(res.data);
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
      .get(`${api_url}/customer_count`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdashboarddatas(res.data);
        // console.log(res.data);
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
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-1 md:p-4 w-full">
        <div className="my-3 flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Customers</h1>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card
            title={"Total Users"}
            amount={dashboarddatas.total_number_of_customer || 0}
          />
          <Card
            title={"Active  Customers"}
            amount={dashboarddatas.total_active_customer || 0}
          />

          <Card
            title={"total suspended customer"}
            amount={dashboarddatas.total_suspended_customer || 0}
          />
        </div>
        <div className="bg-white rounded-lg h-fit w-full mt-6 overflow-y-auto">
          <table className="table-auto	w-full border rounded-lg">
            <thead>
              <tr className="text-sm text-gray-500 p-4">
                <th className="p-4 border">Image</th>
                <th className="border">UserName</th>
                <th className="border">Status</th>
                <th className="p-4 border">phone</th>
                <th className="p-4 border">address</th>
                <th className="p-4 border">State</th>
                <th className="border"></th>
              </tr>
            </thead>
            <tbody>
              {products && products?.data.length > 0 ? (
                products.data.map((product, index) => (
                  <tr key={product.id} className="border-b rounded-lg">
                    <td className="p-4 border text-center">
                      <Avatar />
                    </td>
                    <td className="border text-center">{product.name}</td>
                    <td className="border text-center">
                      <Badge
                        color={product.active ? "success" : "warning"}
                        icon={HiCheck}
                      >
                        {product.active ? "active" : "suspended"}
                      </Badge>
                    </td>
                    <td className="border text-center">
                      {product.phone_number}
                    </td>
                    <td className="border text-center">
                      {product.destination_address}
                    </td>
                    <td className="border text-center">{product.state}</td>

                    <td className="border text-center rounded-lg">
                      <a
                        href={`/superadmin/customers/${product.id}`}
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
                    <h1 className="text-center text-gray-500">No Customers</h1>
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

export default Customers;
