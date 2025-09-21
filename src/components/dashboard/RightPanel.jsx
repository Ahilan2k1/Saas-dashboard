import React from "react";
import { Bell, Activity, Users } from "lucide-react";

export default function RightPanel({ isOpen }) {
  const notifications = [
    { id: 1, text: "New user signed up", time: "2m ago" },
    { id: 2, text: "Order #1023 completed", time: "15m ago" },
    { id: 3, text: "Server backup finished", time: "1h ago" },
  ];

  const activities = [
    { id: 1, user: "Alice", action: "uploaded a file", time: "3h ago" },
    { id: 2, user: "John", action: "commented on task", time: "5h ago" },
  ];

  const contacts = [
    { id: 1, name: "Sophie Moore", status: "online" },
    { id: 2, name: "Michael Lee", status: "offline" },
    { id: 3, name: "Emily Davis", status: "online" },
  ];

  return (
    <aside
      className={`fixed lg:static top-0 right-0 h-full lg:h-auto w-72 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-l-xl lg:rounded-xl transform transition-transform duration-300 ease-in-out z-50
      ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
    >
      {/* Notifications */}
      <div>
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Bell className="w-5 h-5 text-blue-600" />
          Notifications
        </h2>
        <ul className="space-y-2">
          {notifications.map((n) => (
            <li
              key={n.id}
              className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm flex justify-between items-center transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-600"
            >
              <span>{n.text}</span>
              <span className="text-gray-500 text-xs">{n.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div className="mt-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Activity className="w-5 h-5 text-green-600" />
          Activities
        </h2>
        <ul className="space-y-2">
          {activities.map((a) => (
            <li
              key={a.id}
              className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm transition-all duration-200 hover:translate-x-1 hover:bg-green-50 dark:hover:bg-gray-600"
            >
              <span className="font-medium">{a.user}</span> {a.action}
              <span className="block text-gray-500 text-xs">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div className="mt-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Users className="w-5 h-5 text-purple-600" />
          Contacts
        </h2>
        <ul className="space-y-2">
          {contacts.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:bg-purple-50 dark:hover:bg-gray-600"
            >
              <span>{c.name}</span>
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  c.status === "online" ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
