import { FaInstagram, FaTiktok } from "react-icons/fa";
import heroImage from "../assets/arabi white tooooo.png";

const Footer = () => {
  return (
    <footer className="font-button bg-black text-white py-4  ">
      <div className="w-[60%] mx-auto flex justify-between items-center">
        <div>
          <img src={heroImage} alt="" className="w-40 h-40 object-cover" />
        </div>
        <div className="flex space-x-4  ">
          <a
            href="https://google.com"
            target="_blank"
            className="cursor-pointer"
          >
            <FaTiktok className="text-4xl" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            className="cursor-pointer"
          >
            <FaInstagram className="text-4xl" />
          </a>
        </div>
      </div>
      <p className="text-sm md:text-base text-center">
        &copy; {new Date().getFullYear()} Arabi Horse Riding School. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
