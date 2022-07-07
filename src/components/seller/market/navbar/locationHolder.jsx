import { GoLocation } from "react-icons/go";

function LocationHolder() {
  return (
    <div id="location" className=" items-center hidden md:flex">
      <GoLocation size={18} className="mx-2 text-yellow-500" />
      <h4 className="text-sm">ikeja,Lagos.</h4>
    </div>
  );
}

export default LocationHolder;
