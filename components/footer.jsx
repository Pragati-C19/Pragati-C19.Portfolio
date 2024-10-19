// Footer Section

import FooterIcon from "@/public/assets/contact-me.png";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/about-me";

const Footer = () => {
  return (
    <div className="container mx-auto min-h-[80vh] flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-serif p-6 sm:p-10">
      {/* Say Hello and Footer Icon */}
      <div className="flex flex-col items-center mb-8">
        <p className="text-4xl sm:text-6xl text-primary-dark dark:text-primary-light mb-6 text-center font-bold">
          Say Hello.
        </p>

        {/* Footer Icon */}
        <div className="mb-6">
          <Image
            src={FooterIcon}
            alt="Footer Icon"
            width={150}
            height={150}
            className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] object-contain aspect-[108/100]"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center mb-8">
        <button
          className="flex flex-col sm:flex-row items-center border-2 border-gray-600 bg-white transition duration-300 rounded-full font-serif text-gray-700 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light px-4 py-2 shadow-md"
          aria-label="Contact">
          {/* Email (Stacked in mobile) */}
          <span className="text-center sm:text-left">
            pragatichothe@gmail.com
          </span>

          {/* Phone (Stacks under email in mobile) */}
          <span className="font-sans sm:ml-2 sm:border-l sm:border-gray-400 sm:pl-2 mt-2 sm:mt-0 text-center sm:text-left">
            +91 9021927662
          </span>
        </button>
      </div>

      {/* Copyright line and social links */}
      <div className="w-full max-w-6xl flex justify-center pt-6">
        {/* Social Links Section */}
        <div className="flex gap-4 flex-wrap justify-center">
          {socialLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              target="_blank"
              className="text-gray-400 hover:text-black dark:hover:text-white cursor-pointer rounded-full p-2 duration-300 transform transition-all hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              aria-label="Footer Links">
              <i className="text-xl">{link.icon}</i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
