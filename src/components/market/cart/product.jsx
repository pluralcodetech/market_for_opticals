import { useState, useEffect } from "react";
import Counter from "./counter";
import Remove from "./remove";

function product({ product, index }) {
  const [qty, setqty] = useState(1);

  useEffect(() => {
    setqty(product.product_quantity);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 border-[.001rem] border-gray-300 mx-2 py-2">
      <div className="col-span-2 md:col-span-1 bg-gray-200 mx-2 h-20 rounded">
        <a href={`/market/product/${product.product_id}`}>
          <img
            src={product.product_image}
            className="w-full h-full rounded-lg"
            alt={`${product.product_name}`}
          />
        </a>
      </div>

      <div className="col-span-1 md:col-span-2 flex flex-col justify-between items-left">
        <a href={`/market/product/${product.product_id}`}>
          <h4>{product.product_name} </h4>
        </a>
        <a href={`/market/product/${product.product_id}`}>
          <p> &#x20A6; {product.product_price}</p>
        </a>
      </div>
      <div className="pr-2">
        <Counter setqty={setqty} qty={qty} product_id={product.product_id} />
        <Remove index={index} product={product} />
      </div>
    </div>
  );
}

export default product;
