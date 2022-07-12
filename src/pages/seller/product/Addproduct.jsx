import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addproduct({
  setisAddproductModalShowing,
  setisAddSubproductModalShowing,
  setproduct_id,
}) {
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

  const [product_name, setproduct_name] = useState("");
  const [stock, setstock] = useState("");
  const [product_price, setproduct_price] = useState("");
  const [product_type, setproduct_type] = useState("");
  const [eye_size, seteye_size] = useState("");
  const [image, setimage] = useState("");
  const [brand, setbrand] = useState("");
  const [description, setdescription] = useState("");
  const [specifications, setspecifications] = useState("");
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [previewurl, setpreviewurl] = useState("");

  const [brands, setbrands] = useState([]);
  const [cats, setcats] = useState([
    {
      id: 1,
      name: "Lenses",
    },
  ]);
  const [subcats, setsubcats] = useState([]);
  const [selectedCat, setselectedCat] = useState(2);
  const [selectedSubCat, setselectedSubCat] = useState(1);

  const [isLoading, setisLoading] = useState(false);

  const submitProduct = (e) => {
    e.preventDefault();
    setisLoading(true);
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("stock", stock);
    formData.append("product_price", product_price);
    formData.append("product_type", product_type);
    formData.append("eye_size", eye_size);
    formData.append("image", image);
    formData.append("brand", brand);
    formData.append("product_details", description);
    formData.append("product_specifications", specifications);
    formData.append("parent_category_id", selectedCat);
    formData.append("sub_category_id", selectedSubCat);

    axios
      .post(`${api_url}/create_product`, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setisLoading(false);
        console.log(res.data);
        notifySuccess(res.data.message);
        setproduct_id(res.data.product_id);

        setisAddSubproductModalShowing(true);
        setisAddproductModalShowing(false);

        setproduct_name("");
        setstock("");
        setproduct_price("");
        setproduct_type("");
        seteye_size("");
        setimage("");
        setbrand("");
        setdescription("");
        setspecifications("");
        setcategory("");
        setsubcategory("");
        setpreviewurl("");
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

  useEffect(() => {
    axios
      .get(`${api_url}/get_brands`)
      .then((res) => {
        setbrands(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${api_url}/get_parent_category`)
      .then((res) => {
        //console.log(res);
        setcats(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("id", selectedCat);
    axios
      .post(`${api_url}/get_subcategory`, formData)
      .then((res) => {
        console.log(res);
        setsubcats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCat, selectedSubCat]);

  return (
    <div className="bg-white w-[60%] mx-auto z-[20000px] h-[90vh] overflow-y-auto -mt-[15vh] absolute border shadow rounded-lg p-6">
      <div className="w-full flex justify-between items-center">
        <h1>Upload A New Product</h1>
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
          onClick={(e) => setisAddproductModalShowing((prev) => !prev)}
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
                Product Name
              </label>
              <input
                className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
                type="text"
                value={product_name}
                onChange={(e) => setproduct_name(e.target.value)}
                placeholder="Enter Products Name"
                required
              />
            </div>{" "}
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
            Product Availability
          </label>
          <select
            required
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            value={stock}
            onChange={(e) => setstock(e.target.value)}
          >
            <option>Select Availability</option>
            <option value="In stock">In Stock</option>
            <option value="Out of stock">Out of Stock</option>
          </select>
        </div>{" "}
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Brand Name
          </label>
          {brands.length > 0 ? (
            <select
              required
              className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
              value={brand}
              onChange={(e) => setbrand(e.target.value)}
            >
              <option>Select Brand</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              required
              className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            >
              <option>no Availabile brands</option>
            </select>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Product Category
          </label>
          {cats.length > 0 ? (
            <select
              required
              className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
              value={selectedCat}
              onChange={(e) => setselectedCat(e.target.value)}
            >
              <option>Select category</option>
              {cats.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              required
              className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            >
              <option>no Availabile category</option>
            </select>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Product Subcategory
          </label>
          {cats.length > 0 ? (
            <select
              required
              className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
              value={selectedSubCat}
              onChange={(e) => setselectedSubCat(e.target.value)}
            >
              <option>Select Subcategory</option>
              {subcats.map((subcat) => (
                <option key={subcat.id} value={subcat.id}>
                  {subcat.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              required
              className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            >
              <option>no Availabile Subcategory</option>
            </select>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Upload type
          </label>
          <select
            required
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            value={product_type}
            onChange={(e) => setproduct_type(e.target.value)}
          >
            <option value="wholesale">Whole sale</option>
            <option value="retail">retail</option>
            <option></option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
            Product Size
          </label>
          <input
            className="bg-gray-200 appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
            type="text"
            placeholder="Enter  Product Size "
            value={eye_size}
            onChange={(e) => seteye_size(e.target.value)}
            required
          />
        </div>
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

export default Addproduct;
