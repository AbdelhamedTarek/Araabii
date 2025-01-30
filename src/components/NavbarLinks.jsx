/* eslint-disable react/prop-types */
const NavbarLinks = ({ showNavLinks }) => {
  return (
    <nav>
      <ul
        className={`${
          showNavLinks
            ? "flex flex-col items-start px-10 py-2 gap-2 w-full bg-transparent absolute top-[70%] left-[10%] z-50" // Mobile view - full width and stacked
            : "hidden"
        } md:flex md:flex-row md:gap-5 md:static md:w-auto font-button`} // Desktop view - inline
      >
        <li>
          <a className="nav-links" href="/home">
            Home
          </a>
        </li>
        <li>
          <a className="nav-links" href="/about-us">
            About us
          </a>
        </li>
        <li>
          <a className="nav-links" href="/services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-links" href="/contact">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
