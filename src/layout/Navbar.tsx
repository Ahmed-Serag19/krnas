import { NavLink } from "react-router";
import Logo from "../assets/images/krnas-logo.jpg";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-start gap-10 lg:gap-40 py-1 px-2 md:px-10">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Krnas logo"
            className="h-16 w-auto"
            width="48"
            height="48"
          />
        </NavLink>

        {/* Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="flex space-x-26 text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-primary/70 font-semibold text-black transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-primary/70 font-semibold text-black transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                خدماتنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  `hover:text-primary/70 font-semibold text-black transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                العروض
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `hover:text-primary/70 font-semibold text-black transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
