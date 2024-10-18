// About Me Page

import AboutMeBio from "@/components/about/about-me-bio";
import SkillsScroller from "@/components/about/skills-scroller";

const About = () => {
  return (
    <div className="container mx-auto bg-gradient-to-b from-blue-100 to-pink-200 py-10">
      <h2 className="text-3xl font-bold text-indigo-600 text-center p-10 font-serif">
        Hola!... I'm Pragati Chothe 🙂{" "}
      </h2>
      <AboutMeBio />
      <SkillsScroller />
    </div>
  );
};

export default About;
