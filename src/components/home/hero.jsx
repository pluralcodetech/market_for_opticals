import heroimg from "../../assets/images/heroimg.png";
import Waitlist from "./waitlist";

function Hero() {
  return (
    <section className="w-full md:w-10/12 mx-4 md:mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-left">
          <h1 className=" text-3xl md:text-4xl font-extrabold leading-10	tracking-wider	">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-3">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              autem rem ipsa ullam consequuntur laboriosam voluptatum omnis sunt
              consequatur. Porro ratione, quos quaerat rerum ipsum odit atque
              voluptates ullam provident.
            </span>
          </p>
          <div className="mt-4">
            <Waitlist />
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center items-center">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
