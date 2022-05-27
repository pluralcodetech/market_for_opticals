import React from "react";

function Howitworks() {
  return (
    <section className="w-full md:w-10/12 mx-4 md:mx-auto mt-20 h-fit md:h-screen">
      <div className="text-center">
        <h1 className=" text-3xl md:text-4xl font-extrabold leading-10	tracking-wider	">
          How it Works.
        </h1>
        <p className="mt-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-3 mt-16">
        <div className="shadow shadow-lg h-fit py-8 px-4 rounded-2xl	">
          <div className="flex flex-col justify-center items-center">
            <div className=" h-24 w-24 bg-gray-400"></div>
            <h2 className="text-xl font-bold mt-4">Lorem ipsum d</h2>
          </div>

          <p className="text-gray-400 mt-8 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            eligendi voluptatem quisquam saepe, exercitationem at molestias
            illum sed, expedita ipsum reprehenderit vitae impedit, vel beatae
            velit repellendus maxime sint veritatis.
          </p>
        </div>
        <div className="shadow shadow-lg h-fit py-8 px-4 rounded-2xl	">
          <div className="flex flex-col justify-center items-center">
            <div className=" h-24 w-24 bg-gray-400"></div>
            <h2 className="text-xl font-bold mt-4">Lorem ipsum d</h2>
          </div>

          <p className="text-gray-400 mt-8 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            eligendi voluptatem quisquam saepe, exercitationem at molestias
            illum sed, expedita ipsum reprehenderit vitae impedit, vel beatae
            velit repellendus maxime sint veritatis.
          </p>
        </div>{" "}
        <div className="shadow shadow-lg h-fit py-8 px-4 rounded-2xl	">
          <div className="flex flex-col justify-center items-center">
            <div className=" h-24 w-24 bg-gray-400"></div>
            <h2 className="text-xl font-bold mt-4">Lorem ipsum d</h2>
          </div>

          <p className="text-gray-400 mt-8 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            eligendi voluptatem quisquam saepe, exercitationem at molestias
            illum sed, expedita ipsum reprehenderit vitae impedit, vel beatae
            velit repellendus maxime sint veritatis.
          </p>
        </div>{" "}
      </div>
    </section>
  );
}

export default Howitworks;
