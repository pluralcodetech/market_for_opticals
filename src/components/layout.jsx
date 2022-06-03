import { useState, useEffect } from "react";
import Spinner from "../pages/loader/spinner";

function Layout({ title, description, children }) {
  //remeber to add the title and description to the head tag

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 2500);
  }, []);
  return !loading ? (
    <div className="bg-gray-100 h-screen pb-8 overflow-x-auto">{children}</div>
  ) : (
    <Spinner />
  );
}

export default Layout;
