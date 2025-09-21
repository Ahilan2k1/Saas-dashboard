import React from "react";
import clsx from "clsx";

export default function NavItem({ icon, label, active }) {
  return (
    <div
      className={clsx(
        "flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer text-sm font-medium",
        active
          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
      )}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
