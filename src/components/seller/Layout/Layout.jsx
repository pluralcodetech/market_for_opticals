import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isOnMobile, setisOnMobile] = useState(false);

  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setisOnMobile(true);
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setisOnMobile(true);
    }
    setisOnMobile(false);
  };

  useEffect(() => {
    deviceType();
  }, []);

  return (
    <section className="h-screen w-full">
      {isOnMobile ? (
        <div className="h-full w-full">
          <h1>please view this page on a desktop for optimum performance</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-7 h-screen w-full">
          <div className="bg-amber-500">
            <Sidebar />
          </div>
          <div className="col-col-6 h-full w-[85.5vw] overflow-y-auto">
            <Header />
            {children}
          </div>
        </div>
      )}
    </section>
  );
}

export default Layout;
