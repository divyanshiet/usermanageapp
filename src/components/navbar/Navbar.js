import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Importing the hamburger icon from react-icons
import { RiCloseLargeLine } from "react-icons/ri"; // Importing the close icon from react-icons
import "./navbar.css"; // Importing navbar styles
import { NavLink } from "react-router-dom"; // NavLink from react-router-dom for navigation

const Navbar = () => {
  const [active, setActive] = useState(true); // State to manage mobile menu toggle (hamburger menu)

  return (
    <>
      <nav>
        <div className="logo">User-management-app</div> 
        <div className="toggle" onClick={() => setActive(!active)}> {/* Toggle menu */}
          {active ? <GiHamburgerMenu /> : <RiCloseLargeLine />} {/* Conditional icon rendering based on active state */}
        </div>
        <ul id="sidebar" className={active ? "menu" : "mobmenu active"}> {/* Mobile menu toggle */}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "" // Conditional class based on NavLink active state
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#about">About us</a> 
          </li>
          <li className="contact">
            <a href="#contact">Contact us</a> 
          </li>
          <li>
            <button>
              <NavLink to="/">Login/Signup</NavLink> {/* Button to navigate to Login/Signup */}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
