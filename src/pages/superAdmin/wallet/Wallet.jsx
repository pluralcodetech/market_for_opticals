import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Badge } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiCheck } from "react-icons/hi";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Paginator from "../../../components/superAdmin/Paginator";

function WalletAdmin() {
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
      .get(`${api_url}/super_admin_wallet?page=${currentPageIndex}`, {
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
        <div className="bg-white rounded-lg h-fit w-full mt-6 grid grid-cols-1 md:grid-cols-7 gap-1 pb-5">
          <div className="col-span-5 order-last md:order-first overflow-y-auto">
            <table className="table-auto	w-full border  rounded-lg">
              <thead>
                <tr className="text-sm text-gray-500 p-4">
                  <th className="p-4 border"> ID</th>
                  <th className="p-4 border">Image</th>
                  <th className="border">UserName</th>
                  <th className="p-4 border"> Date</th>
                  <th className="border">Status</th>
                  <th className="p-4 border">Account</th>
                  <th className="p-4 border">Total Price</th>
                  <th className="border"></th>
                </tr>
              </thead>
              <tbody>
                {products && products.data.length > 0 ? (
                  products.data.map((product, index) => (
                    <tr key={product.owner_id} className="border-b rounded-lg">
                      <td className="p-4 border text-center">
                        {product.owner_id}
                      </td>
                      <td className="p-4 border text-center">
                        <Avatar />
                      </td>
                      <td className="border text-center">
                        {product.company_name}
                      </td>
                      <td className="border text-center">
                        <Badge color="success" icon={HiCheck}>
                          verified
                        </Badge>
                      </td>
                      <td className="border text-center">
                        {product.payment_status}
                      </td>
                      <td className="border text-center">{product.date}</td>

                      <td className="border text-center rounded-lg">
                        <a
                          href={`/superadmin/wallet/history/${product.date}/${product.owner_id}`}
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
                      <h1 className="text-center text-gray-500">
                        Nothing found
                      </h1>
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
          <div className="w-full col-span-2">
            <div className="bg-[#E16A16] h-24 w-full md:w-[90%] pt-3 rounded-lg  mt-6  mx-1 md:mx-3 flex flex-col items-center">
              <h4 className="text-gray-50">Total Amount Earned</h4>
              <h1 className="text-3xl font-bold my-3 text-gray-50">
                ₦
                {product_stock_count
                  ? product_stock_count.total_amount_made
                  : 0}
              </h1>
            </div>
            <div className="bg-[#005126] h-24 w-full md:w-[90%] pt-3 rounded-lg  mt-6  mx-1 md:mx-3 flex flex-col items-center">
              <h4 className="text-gray-50">Total Amount Unpaid </h4>
              <h1 className="text-3xl font-bold my-3 text-gray-50">
                ₦
                {product_stock_count
                  ? product_stock_count.total_unpaid_amount
                  : 0}
              </h1>
            </div>
            <div className="bg-[#BCFFDB] h-24 w-full md:w-[90%] pt-3 rounded-lg  mt-6  mx-1 md:mx-3 flex flex-col items-center">
              <h4 className="text-gray-50">Total Amount Paid</h4>
              <h1 className="text-3xl font-bold my-3 text-gray-50">
                ₦
                {product_stock_count
                  ? product_stock_count.total_paid_amount
                  : 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WalletAdmin;
