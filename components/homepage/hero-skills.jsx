// Hero Skills Component for Hero Section 

"use client"; // Adding this directive to make it a Client Component

import { heroSkills } from "@/data/about-me";
import { useState, useEffect } from "react";

export default function HeroSkills() {
    const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(heroSkills[index].substring(0, text.length + 1));
      if (text === heroSkills[index]) {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % heroSkills.length);
          setText("");
        }, 2000); // Pause for 2 seconds before switching heroSkills
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [text, index]);

  return (
    <div className="featured-name text-gray-700 text-3xl lg:text-6xl font-bold">
          <p>
            {" I'm "}
            <span className="text-indigo-600 dark:text-indigo-400">{text}</span>
          </p>
    </div>
  )
}
