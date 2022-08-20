import React from "react";
import { Avatar } from "flowbite-react";

function Purchased() {
  return (
    <div className="flex items-center justify-between py-2 px-3">
      <Avatar />
      <div className="w-[90%]">
        <h5 className="text-base font-semibold">Korean Rectangle Eyeglasses</h5>
        <p className="text-xs">Product Price: ₦10,000.00</p>
        <p className="text-xs">Amount Ordered: 50</p>{" "}
        <p className="text-xs">02:03PM | 27th July, 2022</p>
      </div>
    </div>
  );
}

export default Purchased;
