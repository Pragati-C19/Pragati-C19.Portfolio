// Custom Hook for Projects Page

"use client"; // Adding this directive to make it a Client Component

import { useState, useMemo } from "react";
import { projectsData } from "@/data/my-projects";

export const useProjects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");

  // Search projects by title
  const searchProjectsByTitle = useMemo(() => {
    return projects.filter((item) =>
      item.title.toLowerCase().includes(searchProject.toLowerCase())
    );
  }, [projects, searchProject]);

  // Filter projects by category
  const selectProjectsByCategory = useMemo(() => {
    if (!selectProject) return projects; // If selectProject is empty, return all projects

    return projects.filter((item) => {
      let category =
        item.category.charAt(0).toUpperCase() + item.category.slice(1);
      return category.includes(selectProject);
    });
  }, [projects, selectProject]);

  // Get displayed projects based on search or category filter
  const getDisplayedProjects = () => {
    if (selectProject) {
      return selectProjectsByCategory;
    } else if (searchProject) {
      return searchProjectsByTitle;
    } else {
      return projects;
    }
  };

  return {
    projects,
    setProjects,
    searchProject,
    setSearchProject,
    selectProject,
    setSelectProject,
    getDisplayedProjects,
  };
};
