import React from "react";
import Remove from "./remove";

function product({ product, index }) {
  return (
    <div className="grid grid-cols-4 gap-4 border-[.001rem] border-gray-300 mx-2 py-2">
      <div className=" bg-gray-200 mx-2 h-20 rounded">
        <img
          src={product.image_url}
          className="w-full h-full rounded-lg"
          alt={`${product.product_name}`}
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between items-left">
        <h4>{product.product_name}</h4>
        <p> &#x20A6; {product.product_price}</p>
      </div>
      <div className="pr-2">
        <h4>{product.stock}</h4>
        <Remove index={index} product={product} />
      </div>
    </div>
  );
}

export default product;
