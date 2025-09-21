// src/components/layout/RightPanel.jsx
import React from "react";
import { Bell, Activity, Users } from "lucide-react";

export default function RightPanel() {
  return (
    <aside className="hidden xl:block w-80 p-4 space-y-6 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
      
      {/* Notifications */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="w-5 h-5 text-blue-500" />
          <h2 className="font-semibold">Notifications</h2>
        </div>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li>New customer signed up 🎉</li>
          <li>Revenue report is ready 📊</li>
          <li>Server uptime 100% ✅</li>
        </ul>
      </div>

      {/* Activities */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-green-500" />
          <h2 className="font-semibold">Activities</h2>
        </div>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li>🛒 Order #1024 completed</li>
          <li>📦 Shipment sent to New York</li>
          <li>💳 Payment processed</li>
        </ul>
      </div>

      {/* Contacts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-purple-500" />
          <h2 className="font-semibold">Contacts</h2>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium">Alex Johnson</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium">Sophia Lee</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/40?img=3" alt="User" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium">Michael Chen</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
