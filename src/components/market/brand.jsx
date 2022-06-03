import React from "react";

function Brand({ brand }) {
  return (
    <div className="flex  items-center ml-4" key={brand.id}>
      <input type="checkbox" className="border border-yellow-500 mr-1" />
      <h4>{brand.name}</h4>
    </div>
  );
}

export default Brand;
