"use client"; // Making it a Client Component

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Logo from "../../public/assets/home-page.png"; 
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true); // Start with menu hidden on mobile screens

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6 px-6 font-serif">
        
        {/* Logo and Project Name */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                priority={true}
                className="mr-3"
              />
            </Link>
          </div>
          <span className="text-2xl font-semibold text-primary-dark dark:text-ternary-light">
              Pragati-C19
            </span>
        
        {/* Small screen menu */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
            aria-label="Menu"
          >
            {showMenu ? (
              <FiX className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light text-3xl" />
            ) : (
              <FiMenu className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light text-3xl" />
            )}
          </button>
        </div>
        </div>

        {/* Header links for small screens */}
        <div
          className={`${showMenu ? "block" : "hidden"} m-0 sm:ml-4 mt-5 sm:mt-0 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none bg-white dark:bg-dark sm:bg-transparent sm:dark:bg-transparent rounded-lg sm:rounded-none`}
        >
          <Link
            href={"/projects"}
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            href={"/about-me"}
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            About Me
          </Link>
          {/* Download CV Button */}
          <button className="block bg-gradient-to-b from-yellow-200 to-pink-200 hover:from-yellow-300 hover:to-pink-300 transition duration-300 rounded-full text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 p-2 shadow-md">
            Resume
          </button>
        </div>

        {/* Header links for large screens */}
        <div className="hidden sm:flex m-0 sm:ml-4 mt-5 sm:mt-0 p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <Link
            href={"/projects"}
            className="block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            href={"/about-me"}
            className="block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            About Me
          </Link>
          {/* Download CV Button */}
          <button className="text-lg bg-yellow-200 hover:bg-yellow-300 transition duration-300 text-primary-dark dark:text-black font-medium rounded-full px-5 py-2 sm:ml-4">
            Grab My CV
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
