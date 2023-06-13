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

  return (
    <>
      <style jsx>{`
        .burger {
          transition: width 0.3s ease-in-out;
        }
      `}</style>
      <header
        className={`holder transition-all bg-red-100 overflow-hidden items-center ${
          isMobileMenuOpen ? "h-auto" : ""
        }`}
      >
        <div className="flex items-center px-3 py-5 ">
          <nav className="flex w-full justify-between items-center">
            <div className="LogoSide font-extrabold ml-5">MyQuickLoan</div>
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
              <ul className="flex cursor-pointer">
                <NavLink href="/" exact>
                  <li className="px-2">Home</li>
                </NavLink>
                <NavLink href="/about-us">
                  {" "}
                  <li className="px-2">About Us</li>
                </NavLink>
                <NavLink href="/Loan-Process">
                  <li className="px-2">How it Works</li>
                </NavLink>
                <NavLink href="/FAQ">
                  <li className="px-2">FAQ</li>
                </NavLink>
                <NavLink href="/Contact-Us">
                  <li className="px-2">Contact Us</li>
                </NavLink>
              </ul>
            </div>
            <div
              className={`catchysha hidden md:block lg:block xl:block ${
                isMobileMenuOpen ? "hidden" : ""
              }`}
            >
              <button className="rounded-full bg-blue-700 px-4 py-2 font-semibold text-sm">
                Get Started
              </button>
            </div>
          </nav>
        </div>
        <div
          className={`mobile-menus lg:hidden xl:hidden md:hidden w-full justify-center items-center ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col cursor-pointer items-center">
            <NavLink href="/" exact>
              <li className="py-1 ">Home</li>
            </NavLink>
            <NavLink href="/about-us">
              <li className="py-1">About Us</li>
            </NavLink>
            <NavLink href="/Loan-Process">
              <li className="py-1">How it Works</li>
            </NavLink>
            <NavLink href="/FAQ">
              <li className="py-1">FAQ</li>
            </NavLink>
            <NavLink href="/Contact-Us">
              <li className="py-1">Contact Us</li>
            </NavLink>
            <li className="my-10">
              <div className="catchysha">
                <button className="rounded-full bg-blue-700 px-4 py-2 font-semibold text-sm">
                  Get Started
                </button>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
