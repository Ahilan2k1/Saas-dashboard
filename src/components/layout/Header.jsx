import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, PanelRight } from "lucide-react";

export default function Header({ togglePanel }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        SaaS Dashboard
      </h1>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>

        {/* Right Panel Toggle */}
        <button
          onClick={togglePanel}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
        >
          <PanelRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </header>
  );
}
