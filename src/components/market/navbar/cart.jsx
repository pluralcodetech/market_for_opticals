import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../db";

import { FaCartArrowDown } from "react-icons/fa";

function Cart() {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    db.carts.toArray().then((data) => {
      setcart(data);
    });
  }, [cart]);

  return (
    <div className="hover:border hover:border-[#E16A16] hover:px-2 hover:py-1">
      <Link to="/cart" className="flex items-center">
        <FaCartArrowDown size={18} className="ml-2 text-[#E16A16]" />
        <h6 className="hidden md:block">Cart</h6>
        {cart.length > 0 ? (
          <div className="bg-red-500 h-3 w-3 rounded-full  flex justify-center items-center p-1 text-white -mt-3">
            <span className="text-xs p-1">{cart.length}</span>
          </div>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}

export default Cart;
