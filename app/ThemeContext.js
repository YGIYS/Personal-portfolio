"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Optional: Save theme preference to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === "true");
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode); // Save to localStorage
      return newMode;
    });
  };

  // Provide the context value
  const contextValue = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
