import waitlist from "../../assets/images/waitlist.png";
import Waitlist from "./waitlist";

function Waitlistsection() {
  return (
    <section
      className="w-full h-[300px] md:h-screen mt-12 flex justify-center items-center"
      style={{
        background: `url(${waitlist})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-6/12 mx-4 md:mx-auto text-center">
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800	mb-4">
            Join Our Waitlist
          </h1>
          <p>Get informed once we’re live</p>
        </div>
        <Waitlist />
      </div>
    </section>
  );
}

export default Waitlistsection;
