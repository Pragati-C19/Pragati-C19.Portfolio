// Project Filter Component for Projects Page

import { filterOptions } from "@/data/my-projects";

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium w-full sm:w-auto px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light transition duration-300 ease-in-out"
      aria-label="Choose an option">
      <option value="" className="text-sm sm:text-md">
        All Projects
      </option>

      {filterOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
