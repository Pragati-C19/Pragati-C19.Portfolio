// Skills Scroller Component for About Me Page

import Marquee from "react-fast-marquee"; // Marquee is used for auto Scrolling
import { skillsData } from "@/data/about-me";
import style from "@/styles/SkillsScroller.module.css";

const SkillsScroller = () => (
  <div className={`${style.my10} px-2 md:px-4 lg:px-8`}>
    <Marquee gradient={false} speed={60}>
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="px-2 md:px-4 lg:px-6 py-1 md:py-2 border-2 border-gray-700 dark:border-gray-500 bg-gradient-to-tr dark:from-gray-600 dark:to-gray-700 rounded-full mx-2 text-center text-sm md:text-lg lg:text-xl text-gray-900 dark:text-gray-200 font-medium transition-transform transform hover:scale-100">
          {skill}
        </div>
      ))}
    </Marquee>
  </div>
);

export default SkillsScroller;
