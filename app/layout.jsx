// RootLayout for all pages.

import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Pragati Chothe | Full Stack Developer and UI/UX Designer",
  description: "This is Pragati CHothe's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
