// Projects Page

"use client"; // Adding this directive to make it a Client Component

import { useState } from "react";
import ProjectCards from "@/components/projects/project-cards";
import SearchProjects from "@/components/projects/project-search";
import { useProjects } from "@/hooks/useProjects";
import ProjectImage from "@/public/assets/my-projects.png";
import Image from "next/image";

const Projects = () => {
  const { getDisplayedProjects } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState(
    getDisplayedProjects()
  );

  return (
    <section className="bg-gradient-to-b from-blue-100 to-pink-200 p-8">
      <div className="text-center mt-10 mb-10 ">
        <div className="flex justify-center items-center">
          {/* Image aligned with the heading */}
          <h1 className="text-4xl sm:text-4xl mb-1 text-indigo-600 dark:text-ternary-light font-bold font-serif">
            Devfest
          </h1>
          <Image
            src={ProjectImage}
            alt="Project Image"
            width={110}
            height={110}
            className="ml-8 mr-8"
          />
          <h1 className="text-4xl sm:text-4xl mb-1 text-indigo-600 dark:text-ternary-light font-bold font-serif">
            Carnival
          </h1>
        </div>
      </div>

      <div className="container mx-auto mb-5 sm:mb-10">
        {/* Search and Filter Projects */}
        <SearchProjects setFilteredProjects={setFilteredProjects} />

        {/* Display Filtered Projects */}
        <ProjectCards projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
