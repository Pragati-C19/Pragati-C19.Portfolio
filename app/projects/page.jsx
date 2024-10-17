import ProjectCards from '@/components/projects/project-cards';
import ProjectSearch from '@/components/projects/project-search';
import { ProjectsProvider } from '@/context/ProjectsContext';

const Projects = () => {
	return (
		<section className='bg-gradient-to-b from-blue-100 to-pink-200 p-8'>
		 <div className="text-center mt-10 mb-10 ">
        <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light font-serif">
          All Projects
        </h1>
      </div>
		<ProjectsProvider>
			<div className="container mx-auto mb-5 sm:mb-10">
				<ProjectCards />
			</div>
		</ProjectsProvider>
		</section>
	);
};

export default Projects;
