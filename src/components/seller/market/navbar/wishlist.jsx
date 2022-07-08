import { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Wishlist() {
  const storage = localStorage.getItem("saved");
  const [wishlist, setWishlist] = useState(storage ? JSON.parse(storage) : []);

  useEffect(() => {
    setWishlist(storage ? JSON.parse(storage) : []);
  }, []);

  return (
    <div>
      {" "}
      <Link
        to="/saved"
        className="flex items-center border border-[#E16A16] pr-1 rounded-lg py-1"
      >
        <BsFillHeartFill size={18} className="ml-2 text-red-500" />
        <h6 className="hidden md:block">Saved</h6>
        {wishlist.length > 0 ? (
          <div className="bg-red-500 h-3 w-3 rounded-full  flex justify-center items-center p-1 text-white -mt-3">
            <span className="text-xs p-1">{wishlist.length}</span>
          </div>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}

export default Wishlist;
