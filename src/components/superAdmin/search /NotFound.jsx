import React from "react";
import { Card } from "flowbite-react";
import { RiFinderLine } from "react-icons/ri";

function NotFound() {
  return (
    <Card href="#">
      <RiFinderLine size={50} className="text-amber-500" />
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Search not found
      </p>
    </Card>
  );
}

export default NotFound;
