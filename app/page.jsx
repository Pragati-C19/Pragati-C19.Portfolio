
import Link from 'next/link';
import HeroSection from '../components/shared/hero-section';
import ProjectsGrid from '../components/projects/project-cards';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

const HomePage = () => {
	return (
		<div className="container mx-auto">
			<HeroSection />

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					href={"/projects"}
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
