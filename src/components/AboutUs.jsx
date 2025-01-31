import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import heroImage from "../assets/arabi black too.png";
import heroImage2 from "../assets/arabi white tooooo.png";
import { IoFitness } from "react-icons/io5";
import { GiGiftOfKnowledge, GiMagicLamp } from "react-icons/gi";

const AboutUs = () => {
  return (
    <section id="home" className="px-20 py-4">
      <h1 className="text-center mb-5 p-1 text-xl md:text-3xl text-[#cfaf70] font-bold font-heading">
        About | Arabi
      </h1>
      <h2 className="text-center capitalize mb-5 p-1 text-base md:text-2xl text-[#2b2512] font-bold font-heading">
        The Art and Joy of Horse riding
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/2 flex flex-col justify-centeri items-start">
          <p className="text-center md:text-start mb-5 text-sm md:text-xl max-w-250 text-[#cfaf70] font-body tracking-normal font-semibold">
            Arabi intensive horse riding course offers comprehensive training
            designed to improve your riding skills and deepen your understanding
            of horses. Our course is suitable for all levels of riders, from
            total beginners to advanced riders.
          </p>
          <p>
            <strong>We Cover:</strong>
          </p>
          <ol className="list-decimal list-inside text-sm md:text-lg text-[#2b2512] font-body px-4 tracking-normal font-semibold">
            <li>
              <IoFitness className="inline-block mr-1 text-2xl" /> Physical
              fitness Exercises to enhance your strength, balance, and
              coordination for effective riding.
            </li>
            <li>
              <GiGiftOfKnowledge className="inline-block mr-1 text-2xl" />{" "}
              Equine knowledge Horsemanship Basics
            </li>
            <li>
              <GiMagicLamp className="inline-block mr-1 text-2xl" />
              Riding techniques Develop your skills in various riding
              disciplines.
            </li>
          </ol>

          <button className="mt-4 px-6 py-4 bg-[#2b2512] text-white rounded-md capitalize cursor-pointer hover:bg-[#cfaf70] hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
            Start Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <img
                className="w-full md:w-200 shadow-lg"
                src={heroImage}
                alt="Horse Riding 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full md:w-200 shadow-lg"
                src={heroImage2}
                alt="Horse Riding 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full md:w-200 shadow-lg"
                src={heroImage}
                alt="Horse Riding 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
