import React from "react";

function Notify({ notification }) {
  return (
    <div className="flex justify-between items-center w-[100%]  h-16 border-b border-gray-200">
      <div className="bg-[#FADFB6] h-10 w-10 rounded-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <p className="text-sm font-light w-[82%]">
        {notification.notification_name}, category:
        {notification.notification_type}
      </p>
    </div>
  );
}

export default Notify;
