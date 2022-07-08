import React from "react";

function Card({ title, amount }) {
  return (
    <div className="h-20 w-full bg-white rounded-lg flex flex-col justify-between items-center p-2 shadow">
      <h4 className="text-lg font-light">{title}</h4>
      <h1 className="text-xl font-bold">{amount} </h1>
    </div>
  );
}

export default Card;
