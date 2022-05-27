import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Index from "./pages/market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
