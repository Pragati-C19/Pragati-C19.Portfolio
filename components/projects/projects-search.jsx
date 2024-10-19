// Project Search Component for Projects Page

"use client"; // Adding this directive to make it a Client Component

import { useEffect } from "react";
import { useProjects } from "@/hooks/useProjects";
import { FiSearch } from "react-icons/fi";
import ProjectsFilter from "./projects-filter";

const SearchProjects = ({ setFilteredProjects }) => {
  const { setSearchProject, setSelectProject, getDisplayedProjects } =
    useProjects();

  // Get displayed projects based on search/filter and pass them to the parent
  const displayedProjects = getDisplayedProjects();

  // Update filtered projects in parent component
  useEffect(() => {
    setFilteredProjects(displayedProjects);
  }, [displayedProjects, setFilteredProjects]);

  return (
    <div className="mt-8 sm:mt-16 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center pb-3 gap-4 sm:gap-3 mb-6 font-serif">
        {/* Search Input and Icon */}
        <div className="flex w-full sm:w-auto justify-between items-center gap-2 sm:gap-4">
          {/* Search Icon: Hidden on small screens, visible on medium and larger */}
          <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
          </span>

          {/* Search Input */}
          <input
            onChange={(e) => setSearchProject(e.target.value)}
            className="font-general-medium w-full sm:w-64 pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            id="name"
            name="name"
            type="search"
            placeholder="Search Projects"
            aria-label="Search Projects"
          />
        </div>

        {/* Projects Filter (Aligned below input on small screens) */}
        <div className="w-full sm:w-auto">
          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>
    </div>
  );
};

export default SearchProjects;
