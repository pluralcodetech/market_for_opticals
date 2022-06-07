import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

function Cart() {
  return (
    <div className="hover:border hover:border-[#E16A16] hover:px-2 hover:py-1">
      <Link to="/cart" className="flex items-center">
        <FaCartArrowDown size={18} className="mx-2 text-[#E16A16]" />
        <h6 className="hidden md:block">Cart</h6>
      </Link>
    </div>
  );
}

export default Cart;
