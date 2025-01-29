import { useState } from "react";
import Logo from "../assets/arabi white tooooo.png";

import { HiMenu, HiX } from "react-icons/hi";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <header className="bg-[#2b2512] px-12 py-4 md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={Logo} alt="" width={90} height={90} />
        <div className="md:hidden">
          <button
            onClick={() => setShowNavLinks(!showNavLinks)}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            {!showNavLinks ? (
              <HiMenu className="text-2xl text-[#F5F5DC]" />
            ) : (
              <HiX className="text-2xl text-[#F5F5DC]" />
            )}
          </button>
        </div>
      </div>
      <NavbarLinks showNavLinks={showNavLinks} />
    </header>
  );
};

export default Navbar;
