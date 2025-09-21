// src/components/layout/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";   // ⬅️ Import Link
import { ChevronDown, Folder, BookOpen, Grid, Star, User } from "lucide-react";

export default function Sidebar() {
  const [pagesOpen, setPagesOpen] = useState(true);

  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 overflow-y-auto">
      {/* Logo / Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">BW</div>
        <div>
          <div className="font-semibold text-gray-900 dark:text-gray-100">ByeWind</div>
          <div className="text-xs text-gray-400">Analytics</div>
        </div>
      </div>

      {/* Favorites */}
      <div className="text-xs text-gray-400 uppercase mb-2">Favorites</div>
      <ul className="mb-4 space-y-2">
        <li className="text-sm text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-400" /> Overview
        </li>
        <li className="text-sm text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-400" /> Projects
        </li>
      </ul>

      {/* Dashboards */}
      <div className="text-xs text-gray-400 uppercase mb-2">Dashboards</div>
      <ul className="mb-6 space-y-2">
        <li className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
          <Grid size={16} /> Default
        </li>

        {/* ✅ eCommerce now navigates to /orders */}
        <li>
          <Link
            to="/orders"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            <BookOpen size={16} /> eCommerce
          </Link>
        </li>

        <li className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
          <Folder size={16} /> Projects
        </li>
        <li className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
          <Star size={16} /> Online Courses
        </li>
      </ul>

      {/* Pages (collapsible) */}
      <div className="text-xs text-gray-400 uppercase mb-2">Pages</div>
      <div>
        <button
          onClick={() => setPagesOpen((s) => !s)}
          className="w-full flex items-center justify-between px-1 py-2 text-sm text-gray-700 dark:text-gray-200 hover:opacity-90"
          aria-expanded={pagesOpen}
        >
          <span className="flex items-center gap-2">
            <User size={16} /> <span>User Profile</span>
          </span>
          <ChevronDown size={16} className={pagesOpen ? "transform rotate-180 transition-transform" : "transition-transform"} />
        </button>

        {pagesOpen && (
          <ul className="mt-2 pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li className="py-1">Overview</li>
            <li className="py-1">Projects</li>
            <li className="py-1">Campaigns</li>
            <li className="py-1">Documents</li>
            <li className="py-1">Followers</li>
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-500">
        © {new Date().getFullYear()} ByeWind
      </div>
    </aside>
  );
}
