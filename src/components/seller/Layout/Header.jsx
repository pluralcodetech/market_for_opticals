import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ setismodalopen }) {
  const navigate = useNavigate();
  const [searchCategory, setSearchCategory] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (searchCategory !== "" && query !== "")
      navigate(`/seller/search/${searchCategory}/${query}`);
  };

  return (
    <div className="h-[3rem] w-full bg-white shadow border">
      <div className="flex justify-end items-center h-full w-full">
        <div className="w-fit md:w-[70%] flex justify-between items-center mx-auto px-3">
          <div className="flex items-center w-[80%] md:w-fit h-[2.5rem] border text-center rounded-lg border-gray-300">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="h-[2.3rem] border-gray-300 w-[20%]"
            >
              <option value="">Search category</option>
              <option value="product_page">Products</option>
              <option value="order_page">Orders</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-[80%] md:w-96 h-[2.3rem]  text-center  border-gray-300"
            />
            <BiSearch
              size={24}
              className="text-amber-500 mx-3"
              onClick={handleSearch}
            />
          </div>
          <div
            className="block md:hidden"
            onClick={() => setismodalopen((prev) => !prev)}
          >
            <AiOutlineMenu className="" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
