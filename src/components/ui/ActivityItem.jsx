import React from "react";

export default function ActivityItem({ user, action, time }) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div>
        <p className="text-gray-700 dark:text-gray-200">
          <span className="font-medium">{user}</span> {action}
        </p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
}
