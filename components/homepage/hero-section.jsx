// Hero Section for Homepage

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import ProfileImage from "@/public/profile-image.png";
import Link from "next/link";
import HeroSkills from "./hero-skills";

const HeroSection = () => {
  return (
    <section className="featured-box flex flex-col items-center justify-center md:flex-row mt-12 md:mt-16 space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-6">
        {/* Name Card */}
        <div className="bg-gradient-to-r from-indigo-300 to-purple-400 py-1 px-3 rounded-full shadow-md inline-block">
          <span className="text-sm font-medium text-white">Pragati Chothe</span>
        </div>

        {/* I'm <Type> */}
        <HeroSkills />

        {/* Short Description */}
        <div className="featured-text-info font-serif text-lg text-gray-600 dark:text-gray-300">
          <p>
            Every project is a chance to push boundaries and create something
            cool.
            <br />I love talking to people, bouncing around ideas, and turning
            them into real solutions.
            <br />
            For me, it’s not just about getting the job done it’s about doing it
            with passion and always finding a better way to make things work.
          </p>
        </div>

        {/* Download CV Button */}
        <div className="featured-text-btn flex justify-center md:justify-start space-x-4 mt-4">
          <Link
            href={"/Pragati-Chothe-SDE-v16-10-2024.pdf"}
            target="_blank"
            download="Pragati-Chothe-SDE-v16-10-2024.pdf"
            className="btn flex items-center text-gray-700 dark:text-gray-300 border-2 border-gray-300 px-4 py-2 rounded-md hover:border-indigo-500 hover:text-indigo-500 transition duration-300"
            aria-label="Download Resume">
            Download Resume <FiDownloadCloud className="ml-2" />
          </Link>
        </div>

        {/* Social Icons //? INFO: You'll only find the data outside the data folder in this instance. */}
        <div className="social_icons flex justify-center md:justify-start space-x-6 mt-6">
          <Link
            href="https://linkedin.com/in/pragati-c19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Link">
            <FaLinkedinIn className="text-gray-500 hover:text-blue-500 text-2xl" />
          </Link>
          <Link
            href="https://www.instagram.com/pragati_c19/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Link">
            <FaInstagram className="text-gray-500 hover:text-pink-500 text-2xl" />
          </Link>
          <Link
            href="https://github.com/Pragati-C19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Link">
            <FaGithub className="text-gray-500 hover:text-gray-800 text-2xl" />
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="featured-image w-full md:w-2/5 flex justify-center md:justify-end">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          width={400}
          height={400}
          className="rounded-full shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
