import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { image_url, product_name, product_price } = product;
  const [qty, setqty] = useState(1);

  const increment = () => {
    setqty(qty + 1);
  };

  const decrement = () => {
    if (qty > 1) {
      setqty(qty - 1);
    }
  };

  return (
    <div className="bg-white h-96" key={product.id}>
      <div
        className="h-44 bg-white"
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to={`/market/product/${product.id}`}>
          <div className="flex justify-between  h-full">
            {/*
            <div className="bg-slate-200 h-6 w-16 text-red-600 text-center flex justify-center items-center rounded  ">
              <h6 className="text-xs">50% OFF</h6>
            </div>
            */}
            <button className="h-7 w-fit bg-white border border-yellow-500 flex items-center rounded px-2 text-sm">
              <BsFillHeartFill size={12} className="mr-2 text-red-500" />
              Saved
            </button>
          </div>
        </Link>
      </div>
      <div className="pt-4">
        <p className="text-gray-500 text-sm">{product_name}</p>
        <h4 className="text-lg font-bold mt-2">&#x20A6;{product_price}</h4>
        <div className="flex justify-between items-center">
          <h5 className="text-sm text-gray-500">free delivery</h5>
          <div className="flex justify-around items-center">
            <button
              className="bg-yellow-200 p-1 mr-2"
              onClick={(e) => decrement()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="h-8 w-8 border bg-white flex justify-center items-center">
              <h1>{qty}</h1>
            </div>
            <button
              className="bg-yellow-200 p-1 ml-2"
              onClick={(e) => increment()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h6 className="text-sm text-gray-500 mx-3">100</h6>
          </div>
          <button className="bg-[#E16A16] hover:bg-amber-500 text-white text-sm py-1 px-1 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
