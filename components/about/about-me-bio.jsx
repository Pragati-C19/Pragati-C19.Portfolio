// About Me Bio Component for About Me Page

"use client"; // Adding this directive to make it a Client Component

import { useAboutMe } from "@/hooks/useAboutMe";
import AboutBioImage from "./about-bio-image";

const AboutMeBio = () => {
  const { aboutMe } = useAboutMe();

  return (
    <div className="block sm:flex sm:gap-10 py-7">
      {/* Image Section with Framer Motion */}
      <div className="w-full sm:w-1/3 mb-7 sm:mb-0">
        <AboutBioImage />
      </div>

      <div className="font-general-regular w-full p-5 sm:w-3/4 text-left font-serif">
        {aboutMe.map((bio) => (
          <div
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}>
            <div className="flex items-start">
              <span className="text-2xl mr-2">{bio.icon}</span>{" "}
              <div>
                <h2 className="font-bold font-serif">{bio.title}</h2>
                <p className="mt-1 font-serif">{bio.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
