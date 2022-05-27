import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <header className="h-[4rem] w-full 	">
      <nav className="flex justify-between items-center w-full md:w-10/12 mx-4 md:mx-auto pt-5">
        <div className="flex">
          <h1>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>

          <ul className=" md:ml-3 hidden md:flex">
            <li className="mx-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="text-[#E16A16]  text-white font-bold py-2 px-4 rounded hidden md:block">
            Faq
          </button>
          <button className="bg-[#E16A16] hover:bg-amber-500 text-white font-bold py-2 px-4 rounded hidden md:block">
            Join Waitlist
          </button>
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
              className="fixed   z-30 flex items-center cursor-pointer right-10 top-6 md:hidden"
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
      </nav>
    </header>
  );
}

export default Navbar;
