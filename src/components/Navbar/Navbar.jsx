import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { NavLink } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/toprated",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kids",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/men",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/electronics",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* Upper Navbar */}
        <div className="bg-primary/50 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <NavLink
                to="#"
                className="font-bold text-2xl sm:text-3xl flex gap-2"
              >
                <img src={Logo} alt="Logo" className="w-10 uppercase" />
                Shopsy
              </NavLink>
            </div>
            <div className="flex">
              {/* Search bar */}
              <div className="flex justify-between items-center gap-4 px-4">
                <div className="relative group hidden sm:block">
                  <input
                    type="text"
                    placeholder="search"
                    className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                  />
                  <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
              </div>
              {/* order button */}
              <button
                className="bg-gradiant-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group hover:bg-primary"
                onClick={() => {
                  alert("Ordering not available yet");
                }}
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
        {/* Lower Navbar */}
        <div className="flex justify-center bg-white">
          <ul className="sm:flex hidden items-center gap-4 p-4 text-black">
            {Menu.map((data) => (
              <li key={data.id}>
                <NavLink
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "2px solid black" : "",
                  })}
                  to={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
