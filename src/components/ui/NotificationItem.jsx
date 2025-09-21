import React from "react";

export default function NotificationItem({ text, time }) {
  return (
    <div className="text-sm">
      <p className="text-gray-700 dark:text-gray-200">{text}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}
