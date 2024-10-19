// About Me Bio Component for About Me Page

"use client"; // Adding this directive to make it a Client Component

import { useAboutMe } from "@/hooks/useAboutMe";
import AboutBioImage from "./about-bio-image";

const AboutMeBio = () => {
  const { aboutMe } = useAboutMe();

  return (
    <div className="block lg:flex lg:gap-10 py-7 px-4 md:px-8">
      {/* Image Section with Framer Motion */}
      <div className="w-full lg:w-1/3 mb-7 lg:mb-0">
        <AboutBioImage />
      </div>

      {/* Text Section */}
      <div className="font-general-regular w-full lg:w-2/3 text-left font-serif">
        {aboutMe.map((bio) => (
          <div
            className="mb-6 lg:mb-8 text-ternary-dark dark:text-ternary-light text-base md:text-lg lg:text-xl"
            key={bio.id}>
            <div className="flex items-start">
              <span className="text-xl md:text-2xl lg:text-3xl mr-4">
                {bio.icon}
              </span>
              <div>
                <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
                  {bio.title}
                </h2>
                <p className="mt-1 text-sm md:text-base lg:text-lg">
                  {bio.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
