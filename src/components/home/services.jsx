import React from "react";
import Product from "./product";

function Services() {
  return (
    <section className="w-full md:w-10/12 md:mx-auto mt-20 h-fit md:h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800	mb-4  mx-4">
        Our Services
      </h1>
      <p className="text-gray-400 text-center md:w-10/12 mx-auto mx-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quasi quisquam, quae quidem, quisquam quisquam.Consequuntur quasi
        quisquam, quae quidem, quisquam quisquam
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 md:mx-auto mt-12">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

export default Services;
