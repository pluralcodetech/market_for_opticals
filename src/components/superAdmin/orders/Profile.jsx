import React from "react";
import { Avatar, Badge } from "flowbite-react";

function Profile() {
  return (
    <div className=" border rounded-lg flex items-center flex-col p-5 ">
      <Avatar size="lg" rounded={true} />
      <h1 className="text-lg font-semibold">John Do Smith</h1>
      <h4 className="mb-3">Username: @Jhondo</h4>
      <Badge color="success" size="sm">
        verified
      </Badge>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Date Of Birth</h6>
        <h6>March 20, 1989</h6>
      </div>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Country Of Origin</h6>
        <h6>March 20, 1989</h6>
      </div>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Email Address</h6>
        <h6>March 20, 1989</h6>
      </div>
      <div className="flex justify-between items-center w-full mt-3">
        <h6 className="text-sm font-light">Joined Date</h6>
        <h6>March 20, 1989</h6>
      </div>
      <div className="w-full mt-3">
        <h6 className="text-lg font-semibold">Address</h6>
        <h6 className="text-sm font-light">
          Phasellus ultrices, velit a feugiat placerat, massa odio efficitur
          orci, porttitor varius ligula ipsum in arcu. Praesent tempus mi nisi,
          ut tempus libero porta eget.
        </h6>
      </div>
    </div>
  );
}

export default Profile;
