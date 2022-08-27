import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import axios from "axios";
import logoWhite from "../../../assets/images/logo-white.svg";
import sideBarDatas from "./data";

function Sidebar() {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [sideBarData, setsideBarData] = useAtom(sideBarDatas);

  const logout = () => {
    if (window.confirm("are you sure you want to logout?")) {
      axios
        .get(`${api_url}/admin_logout`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("super_token")}`,
          },
        })
        .then((res) => {
          sessionStorage.removeItem("super_token");
          navigate("/superadmin/login");
        })
        .catch((err) => {
          sessionStorage.removeItem("super_token");
          navigate("/superadmin/login");
        });
    }
  };

  return (
    <div className="flex  items- h-full w-full flex-col">
      <div className="flex justify-center items-center h-20 px-4">
        <img src={logoWhite} alt="logo" className="w-full" />
      </div>
      <ul className="w-full">
        {sideBarData.map((item, index) => (
          <li
            key={index}
            className={`${
              location.pathname === item.link
                ? "bg-[#E16A16] text-white flex  items-center my-4 py-2 px-4 border-l-8 border-solid border-white rounded-l-lg"
                : "bg-transparent text-gray-100 flex  items-center my-4 py-2 px-4"
            }`}
            onClick={() => {
              setsideBarData(
                sideBarData.map((item) => {
                  item.isActive = false;
                  return item;
                })
              );
              sideBarData[index].isActive = true;
              setsideBarData(sideBarData);
            }}
          >
            <Link to={item.link} className="flex  items-center">
              <div className="flex justify-center items-center h-full mr-2">
                <item.icon size={22} />
              </div>
              <h1 className="flex justify-center items-center h-full font-medium text-base">
                {item.name}
              </h1>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="bg-white px-5 py-2 rounded-lg w-32 mx-3 mb-3"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
