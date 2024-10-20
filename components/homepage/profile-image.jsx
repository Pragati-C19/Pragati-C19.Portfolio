
"use client"; // Adding this directive to make it a Client Component

import ProfileImage from "@/public/profile-image.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroProfileImage() {
  return (
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
          width={5000}
          height={5000}
          className="w-full h-auto rounded-full shadow-xl"
        />
      </motion.div>
  )
}
