"use client"; // Making it a Client Component

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Logo from '../../public/assets/home-page.png'; 
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

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
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        
		{/* Header menu links and small screen menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}
                priority={true}
              />
            </Link>
          </div>

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

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }
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
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
          >
            About Me
          </Link>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden sm:flex m-0 sm:ml-4 mt-5 sm:mt-3 p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
