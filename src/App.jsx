import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/market/product/singleProduct";
import SignupForm from "./components/seller/auth/signupForm";
import Auth from "./pages/auth/auth";
import CartPage from "./pages/cart/cart";
import Home from "./pages/home";
import Index from "./pages/market";
import History from "./pages/orderHistory/history";
import Profile from "./pages/profile/profile";
import Saved from "./pages/saved/saved";
import Login from "./pages/seller/auth/Login";
import Dashboard from "./pages/seller/Dashboard";
import Marketplace from "./pages/seller/marketplace/Marketplace";
import SingleProduct2 from "./components/seller/market/product/singleProduct2";
import Product from "./pages/seller/product/Product";
import SettingsPage from "./pages/seller/settings/SettingsPage";
import ProfilePage from "./pages/seller/profile/ProfilePage";
import Wallet from "./pages/seller/wallet/Wallet";
import OrderPage from "./pages/seller/order/OrderPage";
import ProductDetails from "./pages/seller/product/ProductDetails";
import OrdersDetails from "./pages/seller/order/OrdersDetails";
import UpdateProduct from "./pages/seller/product/UpdateProduct";
import LoginAdmin from "./pages/superAdmin/auth/Login";
import SignupAdmin from "./pages/superAdmin/auth/Signup";
import MarketplaceAdmin from "./pages/superAdmin/marketplace/Marketplace";
import DashboardAdmin from "./pages/superAdmin/Dashboard";
import AdminProduct from "./pages/superAdmin/product/Product";
import ProductDetailsAdmin from "./pages/superAdmin/product/ProductDetails";
import SettingsPageAdmin from "./pages/superAdmin/settings/SettingsPage";
import OrderPageAdmin from "./pages/superAdmin/order/OrderPage";
import Merchants from "./pages/superAdmin/merchants/Merchants";
import Customers from "./pages/superAdmin/customer/Customers";
import WalletAdmin from "./pages/superAdmin/wallet/Wallet";
import OrdersDetailsAdmin from "./pages/superAdmin/order/OrdersDetails";
import CustomersDetails from "./pages/superAdmin/customer/CustomersDetails";
import MerchantDetails from "./pages/superAdmin/merchants/MerchantDetails";
import WalletHistory from "./pages/superAdmin/wallet/WalletHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/waitlist" element={<Home />} />
        <Route path="/market" element={<Index />} />
        <Route path="/market/product/:id" element={<SingleProduct />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<History />} />
        <Route path="/seller/login" element={<Login />} />
        <Route path="/seller/register" element={<SignupForm />} />
        <Route path="/seller/dashboard" element={<Dashboard />} />
        <Route path="/seller/market-place" element={<Marketplace />} />
        <Route
          path="/seller/market-place/product/:id"
          element={<SingleProduct2 />}
        />
        <Route path="/seller/market-place/products" element={<Product />} />
        <Route path="/seller/settings" element={<SettingsPage />} />
        <Route path="/seller/profile" element={<ProfilePage />} />
        <Route path="/seller/wallet" element={<Wallet />} />
        <Route path="/seller/order-list" element={<OrderPage />} />
        <Route path="/seller/orders-detail/:id" element={<OrdersDetails />} />
        <Route path="/seller/product-detail/:id" element={<ProductDetails />} />
        <Route path="/seller/edit-product/:id" element={<UpdateProduct />} />
        <Route path="/superadmin/login" element={<LoginAdmin />} />
        <Route path="/superadmin/register" element={<SignupAdmin />} />
        <Route path="/superadmin/dashboard" element={<DashboardAdmin />} />
        <Route path="/superadmin/products" element={<AdminProduct />} />
        <Route
          path="/superadmin/product/:id"
          element={<ProductDetailsAdmin />}
        />
        <Route path="/superadmin/order-list" element={<OrderPageAdmin />} />
        <Route
          path="/superadmin/order-list/:id/:date/:time"
          element={<OrdersDetailsAdmin />}
        />
        <Route path="/superadmin/customers" element={<Customers />} />
        <Route
          path="/superadmin/customers/:id"
          element={<CustomersDetails />}
        />
        <Route path="/superadmin/wallet" element={<WalletAdmin />} />
        <Route
          path="/superadmin/wallet/history/:date/:id"
          element={<WalletHistory />}
        />
        <Route path="/superadmin/merchants" element={<Merchants />} />
        <Route path="/superadmin/merchants/:id" element={<MerchantDetails />} />
        <Route path="/superadmin/settings" element={<SettingsPageAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
