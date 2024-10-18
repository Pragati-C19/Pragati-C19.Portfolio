// Home Page

import HeroSection from "@/components/homepage/hero-section";
import ProjectsSection from "@/components/homepage/project-section";

const HomePage = () => {
  return (
    <div className="container mx-auto bg-gradient-to-b from-blue-100 to-pink-200">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
