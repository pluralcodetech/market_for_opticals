import { useState } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import Size from "./size";
import Rating from "./Rating";
import Color from "./color";
import Counter from "./counter";

function SingleProduct() {
  const [qty, setqty] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="w-full md:w-10/12 mx-3 md:mx-auto pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <div className="bg-gray-400 h-64 md:h-80 rounded"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
              <div className="h-16 md:h-20 bg-gray-200"></div>
              <div className="h-16 md:h-20 bg-gray-200"></div>
              <div className="h-16 md:h-20 bg-gray-200"></div>
              <div className="h-16 md:h-20 bg-gray-200"></div>
            </div>
          </div>
          <div className="w-full md:w-10/12 mx-2 md:mx-auto">
            <h3 className="text-xl font-bold">
              Blue Light Blocking Computer Glasses Metal Eyewear Frames
            </h3>
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
              <h4 className="text-lg font-bold mt-2">&#x20A6; 7,955.00</h4>
              <div className="">
                <h4>IN STOCK</h4>
                <h6>sku# : 34fe3 </h6>
              </div>
            </div>
            <div className="">
              <h6 className="text-base text-gray-400 mb-2">size</h6>
              <div className="flex">
                <Size size="xs" />
                <Size size="s" />
                <Size size="m" />
                <Size size="l" />
                <Size size="xl" />
              </div>
            </div>
            <div className="mt-3">
              <h6 className="text-base text-gray-400 mb-2">color</h6>
              <div className="flex">
                <Color color="red" />
                <Color color="yellow" />
                <Color color="green" />
              </div>
            </div>
            <div className="mt-3">
              <h6 className="text-base  mb-2">Qty</h6>
              <Counter setqty={setqty} qty={qty} />
            </div>
            <button className="bg-[#E16A16] w-fit mt-4 hover:bg-amber-500 text-white text-lg py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
