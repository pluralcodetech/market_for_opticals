import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Slidebar({ showSidebar }) {
  return (
    <div
      className={`block md:hidden top-0 right-0 w-[70vw] bg-gray-100  p-10 pl-20 text-white fixed h-full ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <nav className=" w-full pt-12">
        <div className="">
          <h1>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>

          <ul className="text-slate-900 mt-4 text-lg font-bold">
            <li className="my-3">
              <Link to="/">Home</Link>
            </li>
            <li className="my-3">
              <Link to="/about">About</Link>
            </li>
            <li className="my-3">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="my-3">
              <Link to="/faq">Faq</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Slidebar;
