import heroImage from "../assets/arabi black too.png";
import heroImage2 from "../assets/arabi white tooooo.png";

const OurTrips = () => {
  return (
    <section id="services" className="px-20 py-4">
      <h1 className="text-center mb-5 p-1 text-xl md:text-3xl text-[#cfaf70] font-bold font-heading">
        Arabi | Trips
      </h1>
      <h2 className="text-center capitalize mb-5 p-1 text-base md:text-2xl text-[#2b2512] font-bold font-heading">
        Arabi will help you to improve your riding skills just believe in the
        process
      </h2>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="relative group w-96 h-64">
          <img
            src={heroImage}
            alt="Trip 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">Description for Trip 1</p>
          </div>
        </div>
        <div className="relative group w-96 h-64">
          <img
            src={heroImage2}
            alt="Trip 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">Description for Trip 2</p>
          </div>
        </div>
        <div className="relative group w-96 h-64">
          <img
            src={heroImage}
            alt="Trip 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">Description for Trip 3</p>
          </div>
        </div>
        <div className="relative group w-96 h-64">
          <img
            src={heroImage2}
            alt="Trip 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">Description for Trip 4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrips;
