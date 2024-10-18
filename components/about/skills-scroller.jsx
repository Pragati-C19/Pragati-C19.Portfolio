// Skills Scroller Component for About Me Page

"use client"; // Adding this directive to make it a Client Component

import Marquee from "react-fast-marquee";   // Marquee is used for auto Scrolling
import { skillsData } from "@/data/about-me";

const SkillsScroller = () => (
  <div className="my-10">
    <Marquee gradient={false} speed={40}>
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="px-4 py-2 border-2 border-gray-700 bg-gradient-to-tr dark:bg-gray-700 rounded-full mx-2 text-center text-lg text-gray-700 font-medium">
          {skill}
        </div>
      ))}
    </Marquee>
  </div>
);

export default SkillsScroller;
