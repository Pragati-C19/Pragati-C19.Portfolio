// Custom Hook for About Me Page

"use client"; // Adding this directive to make it a Client Component

import { useState } from "react";
import { aboutMeData } from "@/data/about-me";

export const useAboutMe = () => {
  //? INFO: For now, we don't have much data for the About Me Page, but we'll need it in the future for expansion.

  const [aboutMe, setAboutMe] = useState(aboutMeData);

  // Return all necessary data and functions for the 'About Me' and clients section
  return {
    aboutMe,
    setAboutMe,
  };
};
