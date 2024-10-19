// Footer Section

import FooterIcon from "@/public/assets/contact-me.png";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/about-me";

const Footer = () => {
  return (
    <div className="container mx-auto h-[90vh] flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-serif p-10">
      {/* Say Hello and Footer Icon */}
      <div className="flex flex-col items-center mb-8">
        <p className="sm:text-7xl text-5xl text-primary-dark dark:text-primary-light mb-10 text-center sm:font-extrabold font-bold">
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
    className="flex flex-col sm:flex-row items-center border-2 border-gray-600 bg-white transition duration-300 rounded-full font-serif text-gray-700 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light p-3 shadow-md"
    aria-label="Contact"
  >
    <span className="text-center sm:text-left">
      pragatichothe@gmail.com
    </span>
    <span className="font-sans sm:ml-2 sm:border-l sm:border-gray-400 sm:pl-2 text-center sm:text-left">
      +91 9021927662
    </span>
  </button>
</div>


      {/* Copyright line and social links */}
      <div className="flex justify-center items-center w-full max-w-6xl pt-6">
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
