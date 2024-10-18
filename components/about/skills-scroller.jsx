
import Marquee from "react-fast-marquee";
import { skillsData } from "@/data/about-me";

const SkillsScroller = () => (
  <div className="skills-scroller my-10">
    <h2 className="text-2xl font-semibold text-center mb-4">My Skills</h2>
    <Marquee gradient={false} speed={40}>
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg mx-2 text-center text-lg font-medium"
        >
          {skill}
        </div>
      ))}
    </Marquee>
  </div>
);

export default SkillsScroller;
