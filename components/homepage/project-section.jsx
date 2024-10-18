// Project Section for Home Page

import ProjectCards from "@/components/projects/project-cards";
import { projectsData } from "@/data/my-projects";
import Link from "next/link";
import { GiArmoredBoomerang } from "react-icons/gi";

export default function ProjectsSection() {
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <div className="py-40">
      <h1 className="text-4xl text-gray-700 font-sans font-bold text-center mb-20">
        Explore What I’ve Built
      </h1>

      {/* Display Filtered Projects */}
      <ProjectCards projects={displayedProjects} />

      {/* More Projects Link Button */}
      <div className="featured-text-btn flex justify-center md:justify-center mt-10">
        <Link
          href={"/projects"}
          className="btn flex items-center text-gray-700 dark:text-gray-300 border-2 border-gray-700 px-4 py-2 rounded-2xl bg-gradient-to-r hover:font-semibold hover:text-gray-600 font-serif transition duration-300"
          aria-label="Redirect to Projects Page">
          More Projects <GiArmoredBoomerang className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
