import AboutMeBio from '@/components/about/about-me-bio';
import SkillsScroller from '@/components/about/skills-scroller';

const About = () => {
	return (
		<div className="container mx-auto bg-gradient-to-b from-blue-100 to-pink-200">
				<AboutMeBio />
				<SkillsScroller />
		</div>
	);
};

export default About;
