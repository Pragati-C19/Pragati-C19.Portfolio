
"use client"; // Adding this directive to make it a Client Component

import AboutImage from '@/public/assets/about-me.png'
import Image from 'next/image';
import { useAboutMe } from '@/hooks/useAboutMe';
import { motion } from 'framer-motion';

const AboutMeBio = () => {

	const { aboutMe } = useAboutMe();

	// Floating animation setup
	const floatAnimation = {
		y: [0, -10, 0], // Moves up and down by 10px
		transition: {
		  duration: 4,
		  ease: 'easeInOut',
		  repeat: Infinity, // Loops infinitely
		  repeatType: 'loop',
		},
	  };

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 py-7">
			{/* Image Section with Framer Motion */}
			<div className="w-full sm:w-1/3 mb-7 sm:mb-0">
        <motion.div
          className="relative w-full max-w-xs mx-auto"
          animate={floatAnimation} // Apply the floating animation
        >
          <Image
            src={AboutImage}
            className="transform hover:scale-105 transition-transform duration-500"
            alt="About Me Image"
          />
        </motion.div>
      </div>

			<div className="font-general-regular w-full p-6 sm:w-3/4 text-left font-serif">
			<h2 className="text-3xl font-bold mb-8 text-indigo-500">Hola!... I'm Pragati Chothe 🙂 </h2>
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.info}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
