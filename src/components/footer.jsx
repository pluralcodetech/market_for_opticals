import glasses from "../assets/images/glasses-white.png";
import logowhite from "../assets/images/logo-white.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="h-fit bg-[#E16A16]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div
          className="h-60 w-full pt-6"
          style={{
            background: `url(${glasses})`,
            backgroundSize: "cover",
          }}
        >
          <a href="/">
            <img src={logowhite} alt="" />
          </a>
        </div>
        <div className=" w-full md:w-9/12 flex justify-between -pt-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold text-center text-white	mb-4">
              Lorem
            </h1>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold text-center text-white	mb-4">
              Lorem
            </h1>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold text-center text-white	mb-4">
              Lorem
            </h1>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
            <h5 className="text-base text-white">lorem</h5>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex justify-between items-center pb-4">
        <h5 className="text-white text-sm">copyright &#169; {year}</h5>
        <div className="flex justify-between items-center">
          <div className="h-6 w-6 rounded-full bg-white mx-2 flex justify-center items-center">
            <FcGoogle className="h-5 w-5" />
          </div>
          <div className="h-6 w-6 rounded-full bg-white mx-2 flex justify-center items-center">
            <BsFacebook className="h-5 w-5 text-[#E16A16]" />
          </div>
          <div className="h-6 w-6 rounded-full bg-white mx-2 flex justify-center items-center">
            <IoLogoWhatsapp className="h-5 w-5 text-[#E16A16]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
