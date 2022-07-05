import React from "react";

function Header() {
  return (
    <div className="h-[3rem] w-full bg-white shadow border">
      <div className="flex justify-end items-center h-full w-full">
        <div className="w-[70%] flex justify-between items-center ">
          <input
            type="text"
            placeholder="Search"
            className="w-96 h-full border-none"
          />
          <div>
            <p>11:30 - 18 March 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
