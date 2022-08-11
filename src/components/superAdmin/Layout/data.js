import { atom, useAtom } from "jotai";
import { CgHome } from "react-icons/cg";
import { MdSettingsSuggest } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";

const sideBarDatas = atom([
  {
    name: "Home",
    icon: CgHome,
    link: "/superadmin/dashboard",
    isActive: true,
  },
  {
    name: "Products",
    icon: GiPriceTag,
    link: "/superadmin/products",
    isActive: false,
  },
  {
    name: "Orders",
    icon: GiShoppingCart,
    link: "/superadmin/order-list",
    isActive: false,
  },
  {
    name: "Wallet",
    icon: GiWallet,
    link: "/superadmin/wallet",
    isActive: false,
  },

  {
    name: "Customer",
    icon: AiOutlineUser,
    link: "/superadmin/profile",
    isActive: false,
  },
  {
    name: "Merchant",
    icon: TiGroup,
    link: "/superadmin/profile",
    isActive: false,
  },
  {
    name: "Settings",
    icon: MdSettingsSuggest,
    link: "/superadmin/settings",
    isActive: false,
  },
]);

export default sideBarDatas;
