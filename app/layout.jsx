// RootLayout for all pages.

import React from "react";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Pragati Chothe | Full Stack Developer and UI/UX Designer",
  description: "Explore my portfolio! I’m Pragati, a Full Stack Developer and UI/UX Designer with 2 years of experience. I specialize in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and Firebase. My projects include Hi-tech, DokumenHub, Snackmate, and the Pokémon-themed Dragamine game. I’m passionate about learning new technologies, currently focusing on Docker. Connect with me for exciting collaborations!",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pragati Chothe",
  url: "https://pragatichothe.in/", // live URL
  image: "https://pragatichothe.in/profile-image.png", // Your image URL
  description: "Explore my portfolio! I’m Pragati, a Full Stack Developer and UI/UX Designer with 2 years of experience. I specialize in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and Firebase. My projects include Hi-tech, DokumenHub, Snackmate, and the Pokémon-themed Dragamine game. I’m passionate about learning new technologies, currently focusing on Docker. Connect with me for exciting collaborations!",
  sameAs: [
    "https://linkedin.com/in/pragati-c19",
    "https://github.com/Pragati-C19",
    "https://dribbble.com/pragati_c19",
    "https://www.behance.net/pragatichothe",
    "https://www.instagram.com/pragati_c19/",
    "https://lichess.org/@/Pragati_C19",
    "https://www.chess.com/member/pragati_c19",
    "https://www.hackerrank.com/profile/pragati_c19",
    "https://leetcode.com/u/pragati__c19/"
    // Add more social links if needed
  ],
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
