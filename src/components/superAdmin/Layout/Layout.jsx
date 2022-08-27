import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const navigate = useNavigate();
  const [ismodalopen, setismodalopen] = useState(false);

  useEffect(() => {
    /*if (typeof screen.orientation !== "undefined") {
      alert("Please use desktop version to access this page ");
      navigate("/market");
    }*/

    /*  if (window.innerWidth < 768) {
      alert("Please use desktop version to access this page ");
      navigate("/superadmin/dashboard");
    }
*/
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
  }, []);

  return (
    <section className="h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-7 h-screen w-full">
        <div
          className={`bg-amber-500 ${
            ismodalopen ? "block" : "hidden"
          } md:block`}
        >
          <Sidebar />
        </div>
        <div className="col-col-6 h-full w-full md:w-[85.5vw] overflow-y-auto">
          <Header setismodalopen={setismodalopen} />
          {children}
        </div>
      </div>
    </section>
  );
}

export default Layout;
