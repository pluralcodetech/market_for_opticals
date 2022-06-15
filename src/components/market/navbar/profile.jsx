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
        <div className="bg-gray-200 h-8 w-8 rounded-full flex justify-center items-center">
          <a href="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
      ) : (
        <>
          <a
            href="/auth"
            className="text-[#E16A16] border border-[#E16A16]  text-white text-sm font-bold py-1 px-4 rounded hidden md:block"
          >
            signin
          </a>
          <div className="bg-gray-200 h-8 w-8 rounded-full flex md:hidden justify-center items-center ">
            <a href="/auth">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
