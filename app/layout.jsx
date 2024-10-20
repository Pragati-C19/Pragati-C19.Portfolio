// RootLayout for all pages.

import React from "react";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Pragati Chothe | Full Stack Developer and UI/UX Designer",
  description: "Explore my portfolio! I’m Pragati Chothe, a Full Stack Developer and UI/UX Designer with 2 years of experience. I specialize in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and Firebase. My projects include Hi-tech, DokumenHub, Snackmate, and the Pokémon-themed Dragamine game. I’m passionate about learning new technologies, currently focusing on Docker. Connect with me for exciting collaborations!",
  keywords:
    "Freelancer, Full Stack Developer, UI Designer, Web Developer, UX Designer, Frontend Developer, Backend Developer, MERN Stack Developer, Responsive Web Designer",
  openGraph: {
    title: "Pragati Chothe's Portfolio",
    description:
      "Showcasing my work as a Full Stack Developer and UI/UX Designer.",
    url: "https://pragatichothe.in/",
    siteName: "Pragati Chothe",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// TODO: Need to check the testing if it's working or need to add <head><script type="application/ld+json"> {JSON.stringify(structuredData)} </script></head>
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pragati Chothe",
  "alternateName": ["Pragati_C19", "pragati-c19", "Pragati", "Pragati-C19", "Chothe", "PC19", "Pragati Chothe Projects", "Pragati Chothe Portfolio"],
  "jobTitle": ["Freelancer", "Full Stack Developer", "UI/UX Designer"],
  "url": "https://pragatichothe.in/", 
  "image": "https://pragatichothe.in/profile-image.png", 
  "email": "mailto:pragatichothe@gmail.com",
  "description": "Explore my portfolio! I’m Pragati Chothe, a Full Stack Developer and UI/UX Designer with 2 years of experience. I specialize in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and Firebase. My projects include Hi-tech, DokumenHub, Snackmate, and the Pokémon-themed Dragamine game. I’m passionate about learning new technologies, currently focusing on Docker. Connect with me for exciting collaborations!",
  "sameAs": [
    "https://linkedin.com/in/pragati-c19",
    "https://github.com/Pragati-C19",
    "https://dribbble.com/pragati_c19",
    "https://www.behance.net/pragatichothe",
    "https://www.instagram.com/pragati_c19/",
    "https://lichess.org/@/Pragati_C19",
    "https://www.chess.com/member/pragati_c19",
    "https://www.hackerrank.com/profile/pragati_c19",
    "https://leetcode.com/u/pragati__c19/"
  ],
  "knowsAbout": [
    "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", 
    "MongoDB", "MySQL", "Firebase", "UI/UX Design", "Figma", "HTML", "CSS", 
    "Redux", "REST APIs", "Git", "SQL Database Design", "Data Structures", 
    "Algorithms", "jQuery UI", "Release Notes", "Amazon Route 53", "Netlify", 
    "Secure Authentication", "Notion Productivity Software", "Problem Solving", 
    "Mobile User Experience", "Back-End Web Development", "Client Side Scripting", 
    "Agile Web Development", "Software Development Life Cycle (SDLC)", "JWT", 
    "Python", "C++", "Graphic Design"
  ],
  "award": {
    "@type": "CreativeWork",
    "name": "Toycathon 2021 Grand Finalist",
    "issuer": {
      "@type": "Organization",
      "name": "MHRD's Ministry"
    },
    "datePublished": "2021-06"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
