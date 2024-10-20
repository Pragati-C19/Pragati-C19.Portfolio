// ABout Me Image Animation

"use client"; // Adding this directive to make it a Client Component

import AboutImage from "@/public/assets/about-me.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBioImage() {
  // Floating animation setup
  const floatAnimation = {
    y: [0, -10, 0], // Moves up and down by 10px
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity, // Loops infinitely
      repeatType: "loop",
    },
  };

  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
      animate={floatAnimation} // Apply the floating animation
    >
      <Image
        src={AboutImage}
        width={2000} 
        height={3100}
        className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
        alt="About Me Image"
      />
    </motion.div>
  );
}
