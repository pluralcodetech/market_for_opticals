import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/market/navbar/navbar";
import Product from "../../components/market/product/product";
import Sidebar from "../../components/market/sidebar";
import axios from "axios";
import Spinner from "../loader/spinner";
import Brand from "../../components/market/brand";

function Index() {
  const api_url = import.meta.env.VITE_API_URL;

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
    <Layout
      title="home for market4opticals"
      description="home for market4opticals"
    >
      <Navbar selectedCat={selectedCat} setselectedCat={setselectedCat} />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8 h-fit">
        <div className="hidden md:block md:w-10/12 w-full md:mx-auto h-fit pb-6  pt-8 bg-white shadow rounded">
          {subcart.length > 0
            ? subcart.map((sub, i) => (
                <Sidebar
                  selectedCat={selectedCat}
                  selectedSubCat={selectedSubCat}
                  setselectedSubCat={setselectedSubCat}
                  sub={sub}
                  key={i}
                />
              ))
            : ""}

          <h4 className="ml-2">Brands</h4>
          {brands.length > 0
            ? brands.map((brand, i) => <Brand brand={brand} />)
            : ""}
        </div>
        <div className="col-span-5  h-full pr-1 md:pr-4">
          <div className="flex shadow rounded w-fit bg-white p-2">
            <select className="bg-white border mx-2 border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500">
              <option>Sort by</option>
              <option>Lenses</option>
              <option>Frames</option>
              <option>Accessories</option>
              <option>Lab Equipment</option>
              <option>Optical Materials</option>
            </select>
            <select className="bg-white border mx-2 border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500">
              <option>Delivery options</option>
              <option>Lenses</option>
              <option>Frames</option>
              <option>Accessories</option>
              <option>Lab Equipment</option>
              <option>Optical Materials</option>
            </select>
          </div>
          <div className="mx-auto mb-6">
            {products.length > 0 ? (
              <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
    </Layout>
  );
}

export default Index;
