import { useState, useEffect } from "react";
import Spinner from "../pages/loader/spinner";

function Layout({ title, description, children }) {
  //remeber to add the title and description to the head tag

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 2500);
  }, []);
  return !loading ? <div>{children}</div> : <Spinner />;
}

export default Layout;
