import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (screen.orientation !== null) {
      alert("Please use desktop version to access this page xx");
      navigate("/market");
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/seller/login");
    }
  }, []);

  return (
    <section className="h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-7 h-screen w-full">
        <div className="bg-amber-500">
          <Sidebar />
        </div>
        <div className="col-col-6 h-full w-[85.5vw] overflow-y-auto">
          <Header />
          {children}
        </div>
      </div>
    </section>
  );
}

export default Layout;
