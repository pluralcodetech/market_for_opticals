import { useState } from "react";

function Description({ product }) {
  const [changeView, setchangeView] = useState(true);

  return (
    <div className=" h-fit pb-4 mb-4 mt-4 border rounded-lg bg-white w-full">
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
              changeView ? `bg-white  p-2` : `bg-yellow-100  p-2 w-full`
            }
          >
            Specification
          </div>
        )}
      </div>
      <div className="mt-3 px-2 bg-white">
        {changeView ? (
          <div className="w-fit">
            <p className=" text-sm text-gray-400">{product.product_details}</p>
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
  );
}

export default Description;
