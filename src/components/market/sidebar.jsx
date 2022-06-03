import { useState, useEffect } from "react";

function Sidebar({ selectedSubCat, setselectedSubCat, sub }) {
  const [showstage1, setshowstage1] = useState(false);
  const [showstage2, setshowstage2] = useState(false);

  return (
    <div key={sub.id}>
      <h3
        className="flex items-center mb-2"
        onClick={(e) => setshowstage1(!showstage1)}
      >
        {showstage1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#E16A16]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#E16A16]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {sub.name}
      </h3>
      {showstage1
        ? sub.children.map((child) => (
            <div>
              <h3
                className="flex items-center ml-2"
                onClick={(e) => setshowstage2(!showstage2)}
              >
                {showstage2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#E16A16]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#E16A16]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {child.name}
              </h3>
              {showstage2
                ? child.children.map((child2) => (
                    <div className="flex  items-center ml-4" key={child2.id}>
                      <input
                        type="checkbox"
                        className="border border-yellow-500 mr-1"
                      />
                      <h4>{child2.name}</h4>
                    </div>
                  ))
                : ""}
            </div>
          ))
        : ""}
    </div>
  );
}

export default Sidebar;
