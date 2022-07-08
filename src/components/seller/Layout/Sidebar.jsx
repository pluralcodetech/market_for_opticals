import { useState } from "react";
import { Link } from "react-router-dom";
import { atom, useAtom } from "jotai";
import logoWhite from "../../../assets/images/logo-white.svg";
import { CgHome } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";
import sideBarDatas from "./data";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sideBarData, setsideBarData] = useAtom(sideBarDatas);

  return (
    <div className="flex  items-center h-full w-full flex-col">
      <div className="flex justify-center items-center h-20 px-4">
        <img src={logoWhite} alt="logo" className="w-full" />
      </div>
      <ul className="w-full">
        {sideBarData.map((item, index) => (
          <li
            key={index}
            className={`${
              item.isActive
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
    </div>
  );
}

export default Sidebar;
