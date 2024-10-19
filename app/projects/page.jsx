// Projects Page

import ProjectImage from "@/public/assets/my-projects.png";
import Image from "next/image";
import ProjectsPageComponents from "@/components/projects/projects-page-components";

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-pink-200 p-8">
      <div className="text-center mt-10 mb-10">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* Image aligned with the heading */}
          <h1 className="text-4xl sm:text-5xl mb-1 text-indigo-600 dark:text-ternary-light font-bold font-serif">
            Devfest
          </h1>
          <Image
            src={ProjectImage}
            alt="Project Image"
            width={90}
            height={90}
            className="my-4 sm:my-0 sm:ml-8 sm:mr-8 w-24 sm:w-32 lg:w-40"
          />
          <h1 className="text-4xl sm:text-5xl mb-1 text-indigo-600 dark:text-ternary-light font-bold font-serif">
            Carnival
          </h1>
        </div>
      </div>

      <ProjectsPageComponents />
    </section>
  );
};

export default Projects;
