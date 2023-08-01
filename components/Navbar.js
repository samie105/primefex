"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "./customComponents/Navlink";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { link: "/", text: "Home" },
    { link: "/about-us", text: "About Us" },
    { link: "/Loan-Process", text: "How it Works" },
    { link: "/FAQ", text: "FAQ" },
    { link: "/Contact-Us", text: "Contact Us" },
  ];

  return (
    <header
      className={`holder transition-all bg-white overflow-hidden items-center text-slate-800 ${
        isMobileMenuOpen ? "h-auto transition-all" : "transition"
      }`}
    >
      <div className="flex items-center px-3 py-3">
        <nav className="flex w-full justify-between items-center">
          <div className="LogoSide font-extrabold ml-5">Primefexloans</div>
          <div
            className={`burger lg:hidden xl:hidden md:hidden cursor-pointer py-2 pr-6 ${
              isMobileMenuOpen ? "w-10" : "w-auto"
            }`}
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="text-sm w-5 h-5"
            />
          </div>
          <div
            className={`menus hidden lg:block xl:block md:block ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            <ul className="flex cursor-pointer items-center">
              {menuItems.map((item, index) => (
                <NavLink key={index} href={item.link} exact>
                  <li className="px-2">{item.text}</li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div
            className={`catchysha hidden md:block lg:block xl:block ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            <button className="rounded-full bg-slate-800 text-white py-3 px-6 font-semibold text-sm">
              Get Started
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`mobile-menus transition-all lg:hidden xl:hidden md:hidden w-full justify-center items-center ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col cursor-pointer items-center">
          {menuItems.map((item, index) => (
            <NavLink key={index} href={item.link} exact>
              <li className="font-semibold py-3 w-full my-2 px-10">
                {item.text}
              </li>
            </NavLink>
          ))}
          <NavLink href="/">
            <li className="my-5 font-semibold py-3 w-full px-10">
              Get Started
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
