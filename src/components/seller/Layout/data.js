import { atom, useAtom } from "jotai";
import { CgHome } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";

const sideBarDatas = atom([
  {
    name: "Home",
    icon: CgHome,
    link: "/seller/dashboard",
    isActive: true,
  },
  {
    name: "Market Place",
    icon: MdAddShoppingCart,
    link: "/seller/market-place",
    isActive: false,
  },

  {
    name: "Products",
    icon: GiPriceTag,
    link: "/seller/market-place/products",
    isActive: false,
  },
  {
    name: "Orders",
    icon: GiShoppingCart,
    link: "/seller/order-list",
    isActive: false,
  },
  {
    name: "Wallet",
    icon: GiWallet,
    link: "/seller/wallet",
    isActive: false,
  },

  {
    name: "Settings",
    icon: GrSettingsOption,
    link: "/seller/profile",
    isActive: false,
  },
]);

export default sideBarDatas;
