import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ children }) {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token]);

  return <div>{children}</div>;
}

export default Auth;
