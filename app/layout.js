import "./globals.css";

export const metadata = {
  title: "pragati-c19.portfolio",
  description: "This is Pragati CHothe's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
