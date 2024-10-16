"use client"; // Making it a Client Component

import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './projects-filter';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/ProjectCards.module.css";

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

  const displayedProjects = getDisplayedProjects();

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center mb-10">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects Portfolio
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
          Search projects by title or filter by category
        </h3>
        <div className="flex justify-between pb-3 gap-3 mb-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProjects.map((project) => (
          <Link
            href={project.github}
            key={project.id || project.title}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full h-80 ${styles.cardContainer}`}
          >
            <div className={styles.card}>
              <div className={styles.cardFront}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    layout="fill" 
                    objectFit="cover" 
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.cardBack}>
                <h3 className="text-xl font-semibold text-secondary-dark dark:text-ternary-light">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Category:</strong> {project.category}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Date:</strong> {project.date}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Type:</strong> {project.type}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
