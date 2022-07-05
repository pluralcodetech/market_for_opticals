import { useState } from "react";
import logoWhite from "../../../assets/images/logo-white.svg";
import { CgHome } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sideBarData, setsideBarData] = useState([
    {
      name: "Dashboard",
      icon: <CgHome size={21} />,
      link: "/seller/dashboard",
      isActive: true,
    },
    {
      name: "Market Place",
      icon: <MdAddShoppingCart size={21} />,
      link: "/seller/dashboard",
      isActive: false,
    },
    {
      name: "Wallet",
      icon: <GiWallet size={21} />,
      link: "/seller/dashboard",
      isActive: false,
    },
    {
      name: "Products",
      icon: <GiPriceTag size={21} />,
      link: "/seller/dashboard",
      isActive: false,
    },
    {
      name: "Orders",
      icon: <GiShoppingCart size={21} />,
      link: "/cart",
      isActive: false,
    },
    {
      name: "Profile",
      icon: <AiOutlineUser size={21} />,
      link: "/seller/dashboard",
      isActive: false,
    },
    {
      name: "Settings",
      icon: <GrSettingsOption size={21} />,
      link: "/seller/dashboard",
      isActive: false,
    },
  ]);

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
            <div className="flex justify-center items-center h-full mr-2">
              {item.icon}
            </div>
            <h1 className="flex justify-center items-center h-full font-medium text-base">
              {item.name}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
