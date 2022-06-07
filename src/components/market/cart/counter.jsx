import { useState } from "react";

function Counter({ setqty, qty }) {
  //const [qty, setqty] = useState(1);

  const increment = () => {
    setqty(qty + 1);
  };

  const decrement = () => {
    if (qty > 1) {
      setqty(qty - 1);
    }
  };

  return (
    <div className="flex  items-center mb-4">
      <button
        className="border border-amber-400 p-1 mr-2 rounded-full"
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
      <div className="h-8 w-8  bg-white flex justify-center items-center">
        <h1>{qty}</h1>
      </div>
      <button
        className="border border-amber-400 p-1 ml-2 rounded-full"
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
  );
}

export default Counter;
