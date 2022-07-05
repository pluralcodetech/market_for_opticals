import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <section className="h-screen w-screen">
      <div className="grid grid-cols-1 md:grid-cols-7 h-screen w-full">
        <div className="bg-amber-500">
          <Sidebar />
        </div>
        <div className="grid-cols-6 h-screen w-[100%] overflow-y-auto ">
          <Header />
          {children}
        </div>
      </div>
    </section>
  );
}

export default Layout;
