import bgVideo from "../assets/hero-video.mp4";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      {" "}
      {/* Added pt-16 to offset the navbar */}
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {/* Content on top of the video */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold font-heading">
          Welcome to Arabi
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold font-heading p-2">
          <Typewriter
            words={["Horse Riding School", "Organize Trips"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl font-body tracking-tight">
          Arabi intensive horse riding course offers comprehensive training
          designed to improve your riding skills and deepen your understanding
          of horses.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#cfaf70] text-[#2b2512] rounded-md capitalize cursor-pointer hover:bg-white hover:text-[#2b2512] transition duration-300 ease-in-out font-button">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
