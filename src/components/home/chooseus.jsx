import whychooseus from "../../assets/images/why.png";
function Chooseus() {
  return (
    <section className="w-full mx-4 md:mx-auto mt-20 h-fit md:h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <img src={whychooseus} alt="" />
        </div>
        <div className=" md:w-10/12 mx-auto w-full pt-8 md:pt-16">
          <h1 className=" text-2xl md:text-3xl font-bold text-center text-slate-800	mb-8">
            Why you should choose us.
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quasi quisquam, quae quidem, quisquam quisquam
          </p>
          <div>
            <div className="mt-8 flex items-center">
              <div className="flex border-2 border-gray-500 w-6 h-6 rounded-full justify-center items-center p-2">
                1
              </div>
              <div className="mx-8">
                <h2 className="text-medium font-bold text-gray-600">
                  Lorem ipsum d
                </h2>
                <p className="text-gray-400  text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias eligendi voluptatem quisquam saepe, exercitationem at
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex border-2 border-gray-500 w-6 h-6 rounded-full justify-center items-center p-2">
                2
              </div>
              <div className="mx-8">
                <h2 className="text-medium font-bold text-gray-600">
                  Lorem ipsum d
                </h2>
                <p className="text-gray-400  text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias eligendi voluptatem quisquam saepe, exercitationem at
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex border-2 border-gray-500 w-6 h-6 rounded-full justify-center items-center p-2">
                3
              </div>
              <div className="mx-8">
                <h2 className="text-medium font-bold text-gray-600">
                  Lorem ipsum d
                </h2>
                <p className="text-gray-400  text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias eligendi voluptatem quisquam saepe, exercitationem at
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chooseus;
