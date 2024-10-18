"use client"; // Adding this directive to make it a Client Component

import { useState } from 'react';
import { aboutMeData } from '@/data/about-me';

export const useAboutMe = () => {
  // State for 'About Me' section data
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  // Return all necessary data and functions for the 'About Me' and clients section
  return {
    aboutMe,
    setAboutMe,
  };
};
