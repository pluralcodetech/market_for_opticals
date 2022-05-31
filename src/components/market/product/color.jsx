import React from "react";

function Color({ color }) {
  const bg = `bg-${color}-500`;
  const border = `border-${color}-600`;

  return (
    <div
      className={`border ${border} h-6 w-8 ${bg} text-center mx-1 rounded`}
    ></div>
  );
}

export default Color;
