import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/market/product/singleProduct";
import Home from "./pages/home";
import Index from "./pages/market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Index />}></Route>
        <Route path="/market/product/:id" element={<SingleProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
