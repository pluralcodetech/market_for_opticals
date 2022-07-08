import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/seller/Layout/Layout";
import axios from "axios";
import Spinner from "../../../pages/loader/Spinner";
import SaveCart from "../../../components/seller/market/cart/save";
import Save from "../../../components/seller/market/saved/save";
import { BiSearchAlt } from "react-icons/bi";
import { HiCube } from "react-icons/hi";
import Cart from "../../../components/seller/market/navbar/cart";
import Cat from "../../../components/seller/market/navbar/cat";
import Wishlist from "../../../components/seller/market/navbar/wishlist";
import Product from "../../../components/seller/market/product/product";

function Marketplace() {
  const api_url = import.meta.env.VITE_API_URL;

  const [showSidebar, setShowSidebar] = useState(false);

  const [products, setproducts] = useState([]);

  const [selectedCat, setselectedCat] = useState(2);
  const [selectedSubCat, setselectedSubCat] = useState([]);
  const [brands, setBrands] = useState([]);
  const [subcart, setsubcart] = useState([]);

  useEffect(() => {
    axios
      .get(`${api_url}/get_subcategory/${selectedCat}`)
      .then((res) => {
        //console.log(res);
        setsubcart(res.data.children);
        setBrands(res.data.brand);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCat]);

  useEffect(() => {
    axios
      .get(`${api_url}/get_products?parent_cat_id=${selectedCat}`)
      .then((res) => {
        console.log(res);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCat]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("id[]", selectedSubCat);
    if (selectedSubCat.length > 0) {
      axios
        .post(`${api_url}/product_search_subcategory`, formData)
        .then((res) => {
          // console.log(res);
          setproducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`${api_url}/get_products?parent_cat_id=${selectedCat}`)
        .then((res) => {
          //console.log(res);
          setproducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedCat, selectedSubCat]);

  return (
    <Layout>
      <div className="p-8 bg-gray-200 h-fit">
        <div className="flex">
          <h4 className="text-2xl font-bold mb-3">Marketplace</h4>
        </div>
        <div className="bg-white rounded-lg h-fit p-3">
          <div className=" h-full pr-1 md:pr-4">
            <div className="flex justify-between items-center    rounded w-full bg-white p-2 mx-3 ">
              <select className="w-40  bg-white border mx-2 border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500">
                <option>Sort by</option>
                <option>Lenses</option>
                <option>Frames</option>
                <option>Accessories</option>
                <option>Lab Equipment</option>
                <option>Optical Materials</option>
              </select>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <BiSearchAlt size={24} className="md:hidden ml-2" />

                  <div className="flex items-center ml-2">
                    <Link
                      to="/Orders"
                      className="flex items-center border border-[#E16A16] pr-1 py-1 rounded-lg"
                    >
                      <HiCube size={20} className="mx-2 text-[#E16A16]" />

                      <h6 className="hidden md:block">Orders</h6>
                    </Link>
                    <Wishlist />
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-6">
              {products.length > 0 ? (
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-1 md:mt-3 mx-2">
                  {products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Marketplace;
