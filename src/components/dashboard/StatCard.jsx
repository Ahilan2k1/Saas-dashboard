// src/components/dashboard/StatCard.jsx
import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ title, value, change, positive, bg }) {
  return (
    <div className={`rounded-xl p-5 shadow-sm ${bg || "bg-white dark:bg-gray-800"}`}>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
        <div className={`flex items-center text-sm ${positive ? "text-green-600" : "text-red-600"}`}>
          {positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {change}
        </div>
      </div>
    </div>
  );
}
