import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addsubproduct({ setisAddSubproductModalShowing, product_id }) {
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

  const [product_price, setproduct_price] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [specifications, setspecifications] = useState("");

  const [isLoading, setisLoading] = useState(false);

  const submitProduct = (e) => {
    e.preventDefault();
    setisLoading(true);
    const formData = new FormData();

    formData.append("product_id", product_id);
    formData.append("product_price", product_price);
    formData.append("product_image", image);
    formData.append("product_details", description);
    formData.append("product_specifications", specifications);

    axios
      .post(`${api_url}/add_sub_product`, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setisLoading(false);
        console.log(res.data);
        notifySuccess(res.data.message);
        setproduct_price("");
        setdescription("");
        setspecifications("");
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
        notifyWarning(err.response.data.message);
      });
  };

  useEffect(() => {
    if (image) {
      const im = document.getElementById("preview");
      im.src = URL.createObjectURL(image);
    }
  }, [image]);

  return (
    <div className="bg-white w-[60%] mx-auto z-[20000px] h-[90vh] overflow-y-auto -mt-[15vh] absolute border shadow rounded-lg p-6">
      <div className="w-full flex justify-between items-center">
        <h1>Upload A Sub Product {product_id}</h1>
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
        <div
          onClick={(e) => setisAddSubproductModalShowing((prev) => !prev)}
          className="rounded-full bg-red-400 h-10 w-10 border shadow flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <form action="" onSubmit={(e) => submitProduct(e)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-32 w-full bg-blue-200 rounded-lg">
            {image && (
              <img
                src=""
                alt="product"
                id="preview"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="">
            <div className="mb-4">
              <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
                Product Image
              </label>
              <input
                className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                required
              />
            </div>
          </div>
        </div>{" "}
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Product Price
          </label>
          <input
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            type="number"
            value={product_price}
            onChange={(e) => setproduct_price(e.target.value)}
            placeholder="Enter  Product Price"
            required
          />
        </div>{" "}
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Product Description
          </label>
          <textarea
            className="bg-gray-200 h-20 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            type="text"
            placeholder="Enter  Product Description "
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Product specifications
          </label>
          <input
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            type="text"
            placeholder="Enter  Product specifications "
            value={specifications}
            onChange={(e) => setspecifications(e.target.value)}
            required
          />
        </div>
        {isLoading ? (
          <div className="flex justify-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-[40%] mb-4 bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload Product
          </button>
        )}
      </form>
    </div>
  );
}

export default Addsubproduct;
