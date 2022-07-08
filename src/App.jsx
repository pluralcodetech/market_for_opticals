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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
          path="/seller/market-place/product/"
          element={<SingleProduct2 />}
        />
        <Route path="/seller/market-place/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
