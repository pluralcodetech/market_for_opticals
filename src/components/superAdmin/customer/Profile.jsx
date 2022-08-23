import React from "react";
import { Avatar, Badge } from "flowbite-react";

function Profile({ customer }) {
  console.log("na customer", customer);
  return (
    <div className=" border rounded-lg flex items-center flex-col p-5 ">
      <Avatar size="lg" rounded={true} />
      <h1 className="text-lg font-semibold">{customer.name}</h1>
      <Badge color="success" size="sm">
        verified
      </Badge>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Email</h6>
        <h6>{customer.email}</h6>
      </div>{" "}
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Phone</h6>
        <h6>{customer.phone_number}</h6>
      </div>
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">Address</h6>
        <h6 className="text-sm font-light">
          {customer.destination_address},{customer.destination_state}
        </h6>
      </div>
    </div>
  );
}

export default Profile;
