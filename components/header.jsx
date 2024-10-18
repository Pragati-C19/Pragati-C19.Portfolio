// Header Section

"use client"; // Adding this directive to make it a Client Component

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGrid, FiMinimize } from "react-icons/fi";
import { TbBookDownload } from "react-icons/tb";
import Logo from "@/public/assets/home-page.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true); // Start with menu hidden on mobile screens

  // Use useEffect to update showMenu based on screen size without using window
  useEffect(() => {
    //! WAR: I know using window is wrong, but without it, I'm having issues with showing the menu on laptop or mobile views. If useState is false, the header menu is hidden by default on the laptop; if it's true, the mobile view shows the menu by default.

    const mediaQuery = window.matchMedia("(max-width: 640px)"); // Adjust the breakpoint here

    const handleMediaQueryChange = () => {
      setShowMenu(!mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(); // Initial check

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto">
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-10 mt-5 px-6 font-sans">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            {/* Logo and Project Name */}
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                priority={true}
                className="mr-3 "
              />
            </Link>
          </div>
          <Link
            href="/"
            className="text-2xl font-medium text-primary-dark dark:text-ternary-light font-serif">
            .pragati-c19
          </Link>

          {/* Small Screen Menu Icon */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Menu">
              {showMenu ? (
                <FiMinimize className="h-7 w-7  text-secondary-dark dark:text-ternary-light text-3xl" />
              ) : (
                <FiGrid className="h-7 w-7  text-secondary-dark dark:text-ternary-light text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Header links for small screens */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } m-0 sm:ml-4 mt-5 sm:mt-0 p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none bg-white dark:bg-dark sm:bg-transparent sm:dark:bg-transparent rounded-lg sm:rounded-none flex flex-col sm:flex-row`} // Use flex-row for larger screens
        >
          <Link
            href={"/projects"}
            className="text-center text-xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-6 sm:mb-0 sm:py-2 font-serif"
            aria-label="Projects">
            Projects
          </Link>
          <Link
            href={"/about-me"}
            className="text-center text-xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-6 sm:mb-0 sm:py-2 font-serif"
            aria-label="About Me">
            About Me
          </Link>

          {/* Download Resume */}
          <Link
            href={"/Pragati-Chothe-SDE-v16-10-2024.pdf"}
            target="_blank"
            download="Pragati-Chothe-SDE-v16-10-2024.pdf"
            className="bg-gradient-to-b from-yellow-200 to-pink-200 hover:from-yellow-200 hover:to-pink-300 transition duration-300 rounded-xl text-lg text-gray-700 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:mb-0 sm:py-2 p-2 flex items-center shadow-md"
            aria-label="Download Resume">
            <TbBookDownload className="sm:mr-1 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
            Resume
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;