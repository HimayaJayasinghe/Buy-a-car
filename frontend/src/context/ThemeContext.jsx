import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("app-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    } catch (e) {
      // ignore
    }
    return "dark"; // Default background is dark (black/#1C1C1C)
  });

  useEffect(() => {
    try {
      localStorage.setItem("app-theme", theme);
    } catch (e) {
      // ignore
    }

    if (theme === "light") {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.setAttribute("data-theme", "light");
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#111827";
    } else {
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add("dark-theme");
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.style.backgroundColor = "#1C1C1C";
      document.body.style.color = "#FFFFFF";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
