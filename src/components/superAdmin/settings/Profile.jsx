import React, { useState, useEffect } from "react";
import { Avatar, Badge, Button } from "flowbite-react";
import Quest from "./Quest";
import EditEmail from "./EditEmail";

function Profile({ setisEditing, dashboarddatas }) {
  const [isSettingQuest, setisSettingQuest] = useState(false);
  const [isSettingEmail, setisSettingEmail] = useState(false);

  //console.log("na merchant", merchant);
  return (
    <div className="  rounded-lg flex items-center flex-col p-5 md:w-6/12 mx-auto pt ">
      <h6 className="text-base font-light mb-3">Super Admin</h6>
      <Avatar size="xl" rounded={true} />
      <h1 className="text-xl font-semibold mt-2">
        {dashboarddatas?.super_admin_name}
      </h1>
      <Badge color="success" size="sm">
        verified
      </Badge>
      <div className="flex flex-col justify-between items-center w-full mt-3">
        <h6 className="text-lg font-semibold text-amber-400">Email address</h6>
        <h6 className="text-base font-light mb-3">
          {" "}
          {dashboarddatas?.super_admin_email}
        </h6>
      </div>{" "}
      <div className="flex flex-col justify-between items-center w-full">
        <h6 className="text-lg font-semibold text-amber-400">Mobile</h6>
        <h6 className="text-base font-light mb-3">
          {dashboarddatas.phone_number}
        </h6>
      </div>
      {isSettingEmail && <EditEmail setisSettingQuest={setisSettingEmail} />}
      {isSettingQuest && <Quest setisSettingQuest={setisSettingQuest} />}
      <div className="md:flex justify-around items-center w-full mt-2">
        {!dashboarddatas?.super_admin_secret_question ? (
          <div className="mb-2">
            <Button
              outline={true}
              gradientDuoTone="redToYellow"
              onClick={() => setisSettingQuest((prev) => !prev)}
            >
              Set Secret Question
            </Button>
          </div>
        ) : (
          <div className="mb-2">
            <Button
              outline={true}
              gradientDuoTone="redToYellow"
              onClick={() => setisSettingEmail((prev) => !prev)}
            >
              Edit Email
            </Button>
          </div>
        )}
        <Button color="warning" onClick={() => setisEditing((prev) => !prev)}>
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default Profile;
