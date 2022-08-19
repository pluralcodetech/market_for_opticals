import React from "react";

function Card({ title, amount }) {
  return (
    <div className="h-[110px] w-full bg-white rounded-lg flex flex-col justify-between items-center p-2 py-3 shadow">
      <h4 className="text-lg font-light">{title}</h4>
      <h1 className="text-xl font-bold">{amount} </h1>
    </div>
  );
}

export default Card;
