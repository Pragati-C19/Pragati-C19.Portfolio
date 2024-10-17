// Projects Page

"use client"; // Making it a Client Component

import { useState } from "react";
import ProjectCards from "@/components/projects/project-cards";
import SearchProjects from "@/components/projects/project-search";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const { getDisplayedProjects } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState(
    getDisplayedProjects()
  );

  return (
    <section className="bg-gradient-to-b from-blue-100 to-pink-200 p-8">
      <div className="text-center mt-10 mb-10 ">
        <h1 className="text-4xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light font-bold">
          All Projects
        </h1>
      </div>
      <div className="container mx-auto mb-5 sm:mb-10">
        {/* Search and Filter Projects */}
        <SearchProjects setFilteredProjects={setFilteredProjects} />

        {/* Display Filtered Projects */}
        <ProjectCards filteredProjects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
