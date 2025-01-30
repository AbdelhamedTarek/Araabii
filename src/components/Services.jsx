import { FaHorseHead } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="px-20 py-4">
      <h1 className="text-center mb-5 p-1 text-xl md:text-3xl text-[#cfaf70] font-bold font-heading">
        What we Offer
      </h1>
      <h2 className="text-center capitalize mb-5 p-1 text-base md:text-2xl text-[#2b2512] font-bold font-heading">
        Arabi will help you to improve your riding skills just believe in the
        process
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/3 border-2 border-[#cfaf70] rounded-md p-4 flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <FaHorseHead className="text-9xl text-[#2b2512] font-extrabold" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="mt-2">Horse Riding Training</h4>
            <p>
              Physical fitness Exercises to enhance your strength, balance, and
              coordination for effective riding.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-6 px-6 py-3 bg-[#cfaf70] text-[#2b2512] rounded-md capitalize cursor-pointer hover:bg-white hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 border-2 border-[#cfaf70] rounded-md p-4 flex flex-col items-center gap-4">
          <div>
            <FaHorseHead className="text-9xl text-[#2b2512] font-extrabold" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="mt-2">Horse Riding Training</h4>
            <p>
              Physical fitness Exercises to enhance your strength, balance, and
              coordination for effective riding.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-6 px-6 py-3 bg-[#cfaf70] text-[#2b2512] rounded-md capitalize cursor-pointer hover:bg-white hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 border-2 border-[#cfaf70] rounded-md p-4 flex flex-col items-center gap-4">
          <div>
            <FaHorseHead className="text-9xl text-[#2b2512] font-extrabold" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="mt-2">Horse Riding Training</h4>
            <p>
              Physical fitness Exercises to enhance your strength, balance, and
              coordination for effective riding.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-6 px-6 py-3 bg-[#cfaf70] text-[#2b2512] rounded-md capitalize cursor-pointer hover:bg-white hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
