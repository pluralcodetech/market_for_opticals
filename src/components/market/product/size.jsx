import React from "react";

function Size({ size }) {
  return (
    <div className="border border-yellow-500 h-6 w-8 bg-yellow-50 text-center mx-1 rounded">
      <h4> {size}</h4>
    </div>
  );
}

export default Size;
