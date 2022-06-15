import React from "react";

function product({ product, index }) {
  return (
    <div className="grid grid-cols-4 gap-4 border-[.001rem] border-gray-300 mx-2 py-2">
      <div className=" bg-gray-200 mx-2 h-20 rounded">
        <a href={`/market/product/${product.id}`}>
          <img
            src={product.image_url}
            className="w-full h-full rounded-lg"
            alt={`${product.product_name}`}
          />
        </a>
      </div>
      <div className="col-span-2 flex flex-col justify-between items-left">
        <a href={`/market/product/${product.id}`}>
          <h4>{product.product_name}</h4>
        </a>
        <a href={`/market/product/${product.id}`}>
          <p> &#x20A6; {product.product_price}</p>
        </a>
      </div>
      <div className="pr-2">
        <h4 className="mb-3">{product.stock}</h4>
      </div>
    </div>
  );
}

export default product;
