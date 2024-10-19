// Home Page

import HeroSection from "@/components/homepage/hero-section";
import ProjectsSection from "@/components/homepage/project-section";

const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-pink-200">
    <div className="container mx-auto">
      <HeroSection />
      <ProjectsSection />
    </div>
    </section>
  );
};

export default HomePage;
