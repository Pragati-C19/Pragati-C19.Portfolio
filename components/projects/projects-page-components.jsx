// All Project Component

"use client"; // Adding this directive to make it a Client Component

import { useState } from "react";
import ProjectCards from "@/components/projects/projects-cards";
import SearchProjects from "@/components/projects/projects-search";
import { useProjects } from "@/hooks/useProjects";

export default function ProjectsPageComponents() {
  const { getDisplayedProjects } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState(
    getDisplayedProjects()
  );

  return (
    <div className="container mx-auto mb-5 sm:mb-10">
      {/* Search and Filter Projects */}
      <SearchProjects setFilteredProjects={setFilteredProjects} />

      {/* Display Filtered Projects */}
      <ProjectCards projects={filteredProjects} />
    </div>
  );
}
