// Footer Section

import FooterIcon from "@/public/assets/contact-me.png";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/about-me";

const Footer = () => {
  return (
    <div className="container mx-auto h-[80vh] flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-serif">
      {/* Say Hello and Footer Icon */}
      <div className="flex flex-col items-center mb-8">
        <p className="text-7xl text-primary-dark dark:text-primary-light mb-10 text-center font-extrabold">
          Say Hello.
        </p>

        {/* Footer Icon */}
        <div className="mb-4">
          <Image
            src={FooterIcon}
            alt="Footer Icon"
            width={200} 
            height={200}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center mb-8">
        <button
          className="flex items-center border-2 border-gray-600 bg-white transition duration-300 rounded-full font-serif text-gray-700 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light p-3 shadow-md"
          aria-label="Contact">
          <span>
            pragatichothe@gmail.com |{" "}
            <span className="font-sans">+91 9021927662</span>
          </span>
        </button>
      </div>

      {/* Copyright line and social links */}
      <div className="flex justify-between items-center w-full max-w-6xl pt-6">
        {/* Left-aligned copyright */}
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          with 🤗 &copy; {new Date().getFullYear()} Pragati_C19. All rights
          reserved.
        </p>

        {/* Right-aligned social links */}
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li>
            <Link
              href={link.url}
              target="_blank"
              key={link.id}
              className="text-gray-400 hover:text-black dark:hover:text-white cursor-pointer rounded-full p-2 duration-300 transform transition-all hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              aria-label="Footer Links">
              <i className="text-sm sm:text-lg md:text-xl">{link.icon}</i>
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
