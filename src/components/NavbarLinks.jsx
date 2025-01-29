/* eslint-disable react/prop-types */
const NavbarLinks = ({ showNavLinks }) => {
  return (
    <nav>
      <ul
        className={`${
          showNavLinks ? "flex flex-col items-start px-10 py-2 gap-2" : "hidden"
        }  md:flex md:flex-row md:gap-5 font-button`}
      >
        <li>
          <a className="nav-links" href="/">
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
