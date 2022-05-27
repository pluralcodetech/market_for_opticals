import React from "react";

function Profile() {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 mx-2 rounded-full bg-gray-400">
        <img
          src="https:picsum.photos/200/300"
          alt="profile"
          className="h-full w-full rounded-full"
        />
      </div>
      <button className="text-[#E16A16] border border-[#E16A16]  text-white text-sm font-bold py-1 px-4 rounded hidden md:block">
        signout
      </button>
    </div>
  );
}

export default Profile;
