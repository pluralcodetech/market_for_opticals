import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/market/product/singleProduct";
import Home from "./pages/home";
import Index from "./pages/market";
import Saved from "./pages/saved/saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Index />} />
        <Route path="/market/product/:id" element={<SingleProduct />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
