"use client";
import { ThemeProvider } from "../app/ThemeContext";
import Header from "@/components/Header";
import "./globals.css"; // Import your global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
