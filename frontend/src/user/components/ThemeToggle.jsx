import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "", size = "normal" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="button"
      aria-label={isLight ? "Switch to black background" : "Switch to white background"}
      title={isLight ? "Switch to black background" : "Switch to white background"}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-gasolinlight ${
        isLight
          ? "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 shadow-sm"
          : "bg-white/10 text-yellowlight hover:bg-white/20 border border-white/20 shadow-sm"
      } ${size === "small" ? "w-8 h-8 p-1.5" : "w-9 h-9 p-2"} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center text-gray-800"
          >
            <Moon className={size === "small" ? "w-4 h-4" : "w-4.5 h-4.5"} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center text-yellowlight"
          >
            <Sun className={size === "small" ? "w-4 h-4" : "w-4.5 h-4.5"} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
