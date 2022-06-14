import { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Size from "./size";
import Rating from "./Rating";
import Color from "./color";
import Counter from "./counter";
import Layout from "../../layout";
import Spinner from "../../../pages/loader/spinner";
import Description from "./description";
import SaveCart from "../cart/save";

function SingleProduct() {
  const api_url = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [qty, setqty] = useState(1);

  const [product, setproduct] = useState({});

  useEffect(() => {
    axios
      .get(`${api_url}/get_product_details/${id}`)
      .then((res) => {
        setproduct(res.data);
        //console.log(res);
      })
      .catch((err) => {});
  }, [id]);

  const change_major_image = (url, id) => {
    const img = document.getElementById("majorimageview");
    img.src = url;

    axios
      .get(`${api_url}/get_subproduct_details?id=${id}`)
      .then((res) => {
        let newproduct = { ...product };
        if (res.data.product_price !== null && res.data.product_price !== "") {
          newproduct.product_price = res.data.product_price;
        }

        if (
          res.data.product_details !== null &&
          res.data.product_details !== ""
        ) {
          newproduct.product_details = res.data.product_details;
        }

        if (
          res.data.product_specifications !== null &&
          res.data.product_specifications !== ""
        ) {
          newproduct.product_specifications = res.data.product_specifications;
        }

        setproduct(newproduct);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <Navbar />
      {Object.keys(product).length > 0 ? (
        <div className="w-full md:w-10/12 ml-1 md:mx-auto pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <div className="bg-gray-400 h-64 md:h-80 rounded">
                <img
                  src={product.image_url[0].image_url}
                  className="h-full w-full"
                  id="majorimageview"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
                {product.image_url.map((image) => (
                  <div
                    className="h-16 md:h-20 bg-gray-200"
                    key={image.id}
                    onClick={(e) =>
                      change_major_image(image.image_url, image.id)
                    }
                  >
                    <img src={image.image_url} className="h-full w-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-10/12  md:mx-auto bg-white p-2">
              <h3 className="text-xl font-bold">{product.product_name}</h3>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <Rating />
                  <Rating />
                  <Rating />

                  <h6 className="text-medium text-gray-500 mx-3">3 Reviews</h6>
                </div>
                <Link to="reviews/1" className="text-meduim text-gray-500">
                  Add Review
                </Link>
              </div>
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
                  {product.product_sizes.length > 0
                    ? product.product_sizes.map((size, i) => (
                        <Size size={size} key={i} />
                      ))
                    : ""}
                </div>
              </div>

              <div className="mt-3">
                <h6 className="text-base  mb-2">Qty</h6>
                <Counter setqty={setqty} qty={qty} />
              </div>
              <SaveCart
                product={product}
                image_url={product.image_url[0].image_url}
              />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <Description product={product} />
    </Layout>
  );
}

export default SingleProduct;
