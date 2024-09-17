import React from "react";
import { NavLink } from "react-router-dom";

const SingleLink = ({ to, title }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => ` 
          ${isActive ? "text-primary   font-bold" : ""}

          px-3 py-2 block hover:bg-foreground/10 rounded
          `}
      >
        {" "}
        {title}{" "}
      </NavLink>
    </li>
  );
};

const NavMenu = ({ className }) => {
  return (
    <nav className={` ${className} `}>
      <ul className=" lg:flex items-center ">
        <SingleLink to="/" title="Find Property" />
        <SingleLink to="/ss" title="Share Stories" />
        <SingleLink to="/ss" title="Rental Guides" />
        <SingleLink to="/ss" title="Download App" />
      </ul>
    </nav>
  );
};

export default NavMenu;
