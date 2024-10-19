// About Me Page

import AboutMeBio from "@/components/about/about-me-bio";
import SkillsScroller from "@/components/about/skills-scroller";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-pink-200">
      <div className="container mx-auto py-10 px-4 sm:px-8">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 text-center py-6 sm:py-10 font-serif flex flex-col sm:flex-row justify-center items-center">
          {" Hola..!"}{" "}
          <span className="sm:ml-4"> {" I'm Pragati Chothe 🙂"}</span>
        </h1>

        {/* About Me Section */}
        <div className="mb-10 sm:mb-16">
          <AboutMeBio />
        </div>

        {/* Skills Scroller Section */}
        <div className="mb-10 sm:mb-16">
          <SkillsScroller />
        </div>
      </div>
    </section>
  );
};

export default About;
