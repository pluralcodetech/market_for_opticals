import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <section className="h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-7 h-screen w-full">
        <div className="bg-amber-500">
          <Sidebar />
        </div>
        <div className="col-col-6 h-full w-[85vw] overflow-y-auto">
          <Header />
          {children}
        </div>
      </div>
    </section>
  );
}

export default Layout;
