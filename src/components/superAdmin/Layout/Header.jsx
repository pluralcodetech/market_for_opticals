import React from "react";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="h-[3rem] w-full bg-white shadow border">
      <div className="flex justify-end items-center h-full w-full">
        <div className="w-[70%] flex justify-between items-center ">
          <div className="flex items-center w-96 h-[2.5rem] border text-center rounded-lg border-gray-300">
            <input
              type="text"
              placeholder="Search"
              className="w-96 h-[2.3rem]  text-center  border-gray-300"
            />
            <BiSearch size={24} className="text-amber-500 mx-3" />
          </div>
          <div>
            <p>11:30 - 18 March 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
