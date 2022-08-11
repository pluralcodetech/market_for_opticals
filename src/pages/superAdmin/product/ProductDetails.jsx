import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../../components/superAdmin/Layout/Layout";
import Description from "../../../components/market/product/description";
import Size from "../../../components/market/product/size";
import icon from "../../../assets/images/icon.svg";

function ProductDetailsAdmin() {
  const api_url = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [changeView, setchangeView] = useState(true);

  const [product, setproduct] = useState({});

  useEffect(() => {
    axios
      .get(`${api_url}/admin_product_details/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("super_token")}`,
        },
      })
      .then((res) => {
        setproduct(res.data);
        console.log(res);
      })
      .catch((err) => {});
  }, [id]);

  return (
    <Layout>
      <div className="bg-[#FDF0DC] h-screen overflow-y-auto p-4 w-full">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex">
          <img src={icon} alt="" className="mr-3" />
          <h6 className="text-slate-800">product-details |{id}</h6>
        </div>
        {Object.keys(product).length > 0 ? (
          <div className="w-full my-3 bg-white rounded-lg ">
            <div className="pt-3 pb-3 px-12 flex items-center justify-between border w-full">
              <div className="flex items-center">
                <h6 className="mx-4">Product ID</h6>
                <h1 className="text-3xl font-bold">{product.id}</h1>
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    const token = sessionStorage.getItem("super_token");
                    if (!token) {
                      navigate("/seller/login");
                    }
                    setisDeleting(true);
                    axios
                      .get(`${api_url}/admin_delete_product/${product.id}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                      .then((res) => {
                        notifySuccess(res.data.message);

                        setTimeout(() => {
                          window.history.back();
                        }, 2000);
                      })
                      .catch((err) => {
                        notifyWarning(err.response.data.message);
                      })
                      .finally(() => {
                        setisDeleting(false);
                      });
                  }}
                  className="border border-red-500 hover:bg-red-300 text-red-500  py-2 px-5 rounded-xl mx-4"
                >
                  suspend
                </button>
                <button className="border border-slate-400 hover:bg-slate-300 text-slate-700  py-2 px-5 rounded-xl mx-4">
                  Go to Seller Profile
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-8 gap-2 w-full">
              <div className="p-8 h-fit w-full col-span-5 w-full">
                <p className="text-gray-500 text-sm pl-6">Details</p>
                <div className="w-full px-6 pt-2 bg-white rounded-lg">
                  <div className="">
                    <div className="">
                      <div className="bg-gray-400 h-64 md:h-80 rounded">
                        <img
                          src={product.image_url[0].image_url}
                          className="h-full w-full"
                          id="majorimageview"
                        />
                      </div>
                    </div>
                    <div className="w-full  md:mx-auto bg-white p-2 border-x rounded-lg">
                      <h3 className="text-xl font-bold">
                        {product.product_name}
                      </h3>

                      <div className="flex justify-between items-center mt-4">
                        <h4 className="text-lg font-bold mt-2">
                          &#x20A6; {product.product_price}
                        </h4>
                        <div className="">
                          <h4>{product.stock}</h4>
                        </div>
                      </div>
                      <div className="">
                        <h6 className="text-base text-gray-400 mb-2">size</h6>
                        <div className="flex">
                          <div className="flex">
                            {product.product_sizes?.length > 0
                              ? product.product_sizes.map((size, i) => (
                                  <Size size={size} key={i} />
                                ))
                              : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6">
                  <div className=" h-fit pb-4 mb-4  border-x border-b  rounded-lg bg-white w-full">
                    <div className="flex justify-between items-center border w-full md:w-96 rounded-lg">
                      <div
                        onClick={() => setchangeView(true)}
                        className={
                          changeView
                            ? `border-r w-[50%] bg-yellow-100  p-2 rounded-lg`
                            : `border-r w-[50%]  p-2 rounded-lg`
                        }
                      >
                        description
                      </div>
                      {product.product_specifications && (
                        <div
                          onClick={() => setchangeView(false)}
                          className={
                            changeView
                              ? `bg-white  p-2`
                              : `bg-yellow-100  p-2 w-full`
                          }
                        >
                          Specification
                        </div>
                      )}
                    </div>
                    <div className="mt-3 px-2 bg-white">
                      {changeView ? (
                        <div className="w-fit">
                          <p className=" text-sm text-gray-400">
                            {product.product_details}
                          </p>
                        </div>
                      ) : (
                        <div className="w-fit">
                          <p className="text-sm text-gray-400">
                            {product.product_specifications}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-4  w-full border pl-1 border-[#DEDEDE] rounded-lg col-span-3">
                <h4 className="text-gray-500 text-sm p-3">Product Analytics</h4>
                <div className="grid grid-cols-2">
                  <div className="bg-[#FADFB6] h-[80px] rounded-lg w-[95%] mb-4 mx-1 flex flex-col justify-between items-center p-2">
                    <h4>Sold Product</h4>
                    <h2 className="text-lg font-bold">30</h2>
                  </div>
                  <div className="bg-[#FADFB6] h-[80px] rounded-lg w-[95%] mb-4 mx-1 flex flex-col justify-between items-center p-2">
                    <h4>Status</h4>
                    <h2 className="text-lg font-bold text-[#FF9900]">
                      {product.product_status === "active"
                        ? "Active"
                        : "Suspended"}
                    </h2>
                  </div>
                  <div className="bg-[#FADFB6] h-[80px] rounded-lg w-[95%] mb-4 mx-1 flex flex-col justify-between items-center p-2">
                    <h4>Product Price</h4>
                    <h2 className="text-lg font-bold">₦10,000.00</h2>
                  </div>
                  <div className="bg-[#FADFB6] h-[80px] rounded-lg w-[95%] mb-4 mx-1 flex flex-col justify-between items-center p-2">
                    <h4>Commission </h4>
                    <h2 className="text-lg font-bold">₦10,000.00</h2>
                  </div>
                </div>
                <div className="bg-[#FBC77A] h-[80px] rounded-lg w-[97%] mx-auto mb-4 mx-1 flex flex-col justify-between items-center p-2">
                  <h4>Total Amount made on this product </h4>
                  <h2 className="text-lg font-bold">₦300,000.00</h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 bg-gray-200 h-fit w-full">
            <div className="w-full p-6 bg-white rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                  <div className="bg-gray-400 h-64 md:h-80 rounded">
                    <img
                      src="https://via.placeholder.com/300"
                      className="h-full w-full"
                      id="majorimageview"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
                    <div className="h-16 md:h-20 bg-gray-200">
                      <img
                        src="https://via.placeholder.com/150"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="h-16 md:h-20 bg-gray-200">
                      <img
                        src="https://via.placeholder.com/150"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="h-16 md:h-20 bg-gray-200">
                      <img
                        src="https://via.placeholder.com/150"
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-10/12  md:mx-auto bg-white p-2">
                  <h3 className="text-xl font-bold">
                    Everything you are seeing here is a representation of a
                    product page
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <h4 className="text-lg font-bold mt-2">&#x20A6; 400,000</h4>
                    <div className="">
                      <h4>In stock</h4>
                    </div>
                  </div>
                  <div className="">
                    <h6 className="text-base text-gray-400 mb-2">size</h6>
                    <div className="flex">
                      <div className="border border-yellow-500 h-6 w-8 bg-yellow-50 text-center mx-1 rounded">
                        <h4> xl</h4>
                      </div>
                      <div className="border border-yellow-500 h-6 w-8 bg-yellow-50 text-center mx-1 rounded">
                        <h4> 2xl</h4>
                      </div>
                      <div className="border border-yellow-500 h-6 w-8 bg-yellow-50 text-center mx-1 rounded">
                        <h4> 3xl</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Description product={{}} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ProductDetailsAdmin;
