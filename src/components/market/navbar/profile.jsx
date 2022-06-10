import { useNavigate, Link } from "react";

function Profile() {
  const token = sessionStorage.getItem("token");

  const logout = () => {
    if (window.confirm("are you sure you want to logout?")) {
      sessionStorage.clear();
      window.location.reload();
    }
  };

  return (
    <>
      {token ? (
        <button
          onClick={logout}
          className="text-[#E16A16] border border-[#E16A16]  text-white text-sm font-bold py-1 px-4 rounded hidden md:block"
        >
          signout
        </button>
      ) : (
        <a
          href="/auth"
          className="text-[#E16A16] border border-[#E16A16]  text-white text-sm font-bold py-1 px-4 rounded hidden md:block"
        >
          signin
        </a>
      )}
    </>
  );
}

export default Profile;
