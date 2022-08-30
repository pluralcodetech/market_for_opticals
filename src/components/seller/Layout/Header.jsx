import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ setismodalopen }) {
  return (
    <div className="h-[3rem] w-full bg-white shadow border">
      <div className="flex justify-end items-center h-full w-full">
        <div className="w-fit md:w-[70%] flex justify-between items-center mx-auto px-3">
          <div className="flex items-center w-[80%] md:w-fit h-[2.5rem] border text-center rounded-lg border-gray-300">
            <input
              type="text"
              placeholder="Search"
              className="w-[80%] md:w-96 h-[2.3rem]  text-center  border-gray-300"
            />
            <BiSearch size={24} className="text-amber-500 mx-3" />
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
