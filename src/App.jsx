import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/market/product/singleProduct";
import Auth from "./pages/auth/auth";
import CartPage from "./pages/cart/cart";
import Home from "./pages/home";
import Index from "./pages/market";
import History from "./pages/orderHistory/history";
import Profile from "./pages/profile/profile";
import Saved from "./pages/saved/saved";
import Login from "./pages/seller/Login";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
