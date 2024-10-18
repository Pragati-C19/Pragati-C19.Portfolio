// RootLayout for all pages.

import React from "react";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Pragati Chothe | Full Stack Developer and UI/UX Designer",
  description: "This is Pragati Chothe's Portfolio",
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
