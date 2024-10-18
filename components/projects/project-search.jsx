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
    <div className="sm:mt-16">
      <div className="flex justify-between pb-3 gap-3 mb-6 font-serif">
        <div className="flex justify-between gap-2">
          <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
          </span>

          <input
            onChange={(e) => setSearchProject(e.target.value)}
            className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            placeholder="Search Projects"
            aria-label="Search Projects"
          />
        </div>

        <ProjectsFilter setSelectProject={setSelectProject} />
      </div>
    </div>
  );
};

export default SearchProjects;
