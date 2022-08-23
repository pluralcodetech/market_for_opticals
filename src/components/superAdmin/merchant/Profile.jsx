import React from "react";
import { Avatar, Badge } from "flowbite-react";

function Profile({ merchant }) {
  console.log("na merchant", merchant);
  return (
    <div className=" border rounded-lg flex items-center flex-col p-5 ">
      <Avatar size="lg" img={`${merchant.passport_photo}`} rounded={true} />
      <h1 className="text-lg font-semibold">{merchant.company_name}</h1>
      <Badge color="success" size="sm">
        verified
      </Badge>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Wallet Balance</h6>
        <h6>₦{merchant.wallet}</h6>
      </div>{" "}
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Email</h6>
        <h6>{merchant.email}</h6>
      </div>{" "}
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Phone</h6>
        <h6>{merchant.company_phone_number}</h6>
      </div>
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">Address</h6>
        <h6 className="text-sm font-light">
          {merchant.address},{merchant.state}
        </h6>
      </div>
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">license</h6>
        <img src={merchant.license} className="h-96 w-full rounded-lg" />
      </div>
    </div>
  );
}

export default Profile;
