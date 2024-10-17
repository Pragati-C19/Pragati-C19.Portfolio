"use client"; // Making it a Client Component

import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './projects-filter';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/ProjectCards.module.css"; // You may keep this for any custom styles

const ProjectCards = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const getDisplayedProjects = () => {
    if (selectProject) {
      return selectProjectsByCategory;
    } else if (searchProject) {
      return searchProjectsByTitle;
    } else {
      return projects;
    }
  };

  const displayedProjects = getDisplayedProjects()

  return (
    <>
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
       {/* Adjust grid layout for two cards per row */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 font-serif">
        {displayedProjects.map((project) => (
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-lg transition-transform transform hover:scale-105">
            {/* Image on top */}
            <Link href={project.github}
    target="_blank"
    rel="noopener noreferrer" className="relative w-full overflow-hidden rounded-t-md">
              <Image
                src={project.image}
                alt="project-image"
                width={500}
                height={300}
                className="object-fit"
              />
            </Link>

            {/* Project details below image */}
            <div className="p-4 text-center">
              {/* Category and Type */}
<div className="mb-4 flex space-x-2 justify-center">
  <div className="rounded-xl bg-green-500 border border-transparent py-1 px-2 text-xs text-white transition-all shadow-sm text-center">
    {project.category}
  </div>
  <Link
    href={project.github}
    target="_blank"
    rel="noopener noreferrer">
    <FaGithub className="text-gray-500 hover:text-gray-800 text-2xl" />
  </Link>
  <div className="rounded-xl bg-cyan-500 border border-transparent py-1 px-2 text-xs text-white transition-all shadow-sm text-center">
    {project.type}
  </div>
</div>


              {/* Project title */}
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {project.title}
              </h6>

              {/* Project description */}
              <p className="text-slate-600 leading-normal font-light">
                {project.description}
              </p>

              <p className="mt-2 text-sm italic text-gray-500">{project.technologies.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
