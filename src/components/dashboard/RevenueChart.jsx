import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", current: 12000, previous: 10000 },
  { name: "Feb", current: 9000, previous: 11000 },
  { name: "Mar", current: 14000, previous: 12000 },
  { name: "Apr", current: 17000, previous: 15000 },
  { name: "May", current: 21000, previous: 18000 },
  { name: "Jun", current: 25000, previous: 20000 },
];

export default function RevenueChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Revenue</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#93c5fd"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#111827"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
