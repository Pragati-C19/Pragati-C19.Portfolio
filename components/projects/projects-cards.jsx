// Projects Card Component for Projects Page

import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectCards = ({ projects }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full transition-transform transform hover:scale-105">
            {/* Image on top */}
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full overflow-hidden rounded-t-md"
              aria-label="Redirect to Github">
              <Image
                src={project.image}
                alt="project-image"
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
            </Link>

            {/* Project details below image */}
            <div className="p-4 text-center">
              {/* Project title */}
              <h1 className="mb-4 mt-4 text-slate-800 text-lg sm:text-xl font-semibold">
                {project.title}
              </h1>

              {/* Category and Type */}
              <div className="mb-4 flex space-x-2 justify-center">
                <div className="rounded-xl bg-green-200 text-green-800 border border-transparent py-1 px-3 text-xs transition-all shadow-sm font-extralight text-center">
                  {project.category}
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Redirect to Github">
                  <FaGithub className="text-gray-500 hover:text-gray-800 text-2xl" />
                </Link>
                <div className="rounded-xl bg-cyan-200 text-cyan-800 border border-transparent py-1 px-3 text-xs transition-all font-extralight shadow-sm text-center">
                  {project.type}
                </div>
              </div>

              {/* Project description */}
              <p className="text-slate-600 leading-normal font-light text-sm sm:text-base">
                {project.description}
              </p>

              {/* Project tech */}
              <p className="mt-4 mb-4 text-xs sm:text-sm italic text-gray-500">
                {project.technologies.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
