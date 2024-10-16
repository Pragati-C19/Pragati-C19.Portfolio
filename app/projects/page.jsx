import ProjectCards from '@/components/projects/project-cards';
import { ProjectsProvider } from '@/context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectCards />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
