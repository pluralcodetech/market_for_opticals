import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { HiCube } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";
import Cart from "./cart";
import Profile from "./profile";
import LocationHolder from "./locationHolder";
import Cat from "./cat";
import Wishlist from "./wishlist";

function Navbar2({ setShowSidebar, showSidebar, selectedCat, setselectedCat }) {
  return (
    <header className="h-fit pb-2 md:pb-1 pb-2 w-full bg-white shadow	">
      <nav className="flex justify-between items-center w-full md:w-11/12 mx-4 md:mx-auto py-3">
        <div className="flex justify-between items-center w-full">
          <h1>
            <Link to="/market">
              <img src={logo} alt="logo" />
            </Link>
          </h1>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div
                id="searchholder"
                className="hidden h-8 border border-gray-300 w-96 bg-white md:flex justify-center items-center rounded-md"
              >
                <input
                  type="text"
                  className="h-full bg-white border-0 w-full focus:outline-0 rounded-md"
                />
                <BiSearchAlt size={24} className=" ml-2" />
              </div>
              <BiSearchAlt size={24} className="md:hidden ml-2" />

              <div className="flex items-center ml-2">
                <Link
                  to="/Orders"
                  className="flex items-center hover:border hover:border-[#E16A16] hover:pr-1 hover:py-1"
                >
                  <HiCube size={20} className="mx-2 text-[#E16A16]" />

                  <h6 className="hidden md:block">Orders</h6>
                </Link>
                <Wishlist />
                <Cart />
              </div>
            </div>
            <div className="flex ml-1 md:ml-6">
              <Profile />
              {showSidebar ? (
                <button
                  className="flex text-4xl text-slate-900 items-center cursor-pointer fixed right-10 top-6 z-50 md:hidden"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  x
                </button>
              ) : (
                <svg
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="fixed   z-30 flex items-center cursor-pointer right-10 top-6 hidden"
                  fill="#E16A16"
                  viewBox="0 0 100 80"
                  width="30"
                  height="30"
                >
                  <rect width="100" height="10"></rect>
                  <rect y="30" width="100" height="10"></rect>
                  <rect y="60" width="100" height="10"></rect>
                </svg>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar2;
