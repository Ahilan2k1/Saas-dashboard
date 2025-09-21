import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actual: 20, projected: 25 },
  { name: "Feb", actual: 28, projected: 26 },
  { name: "Mar", actual: 18, projected: 24 },
  { name: "Apr", actual: 22, projected: 30 },
  { name: "May", actual: 30, projected: 28 },
  { name: "Jun", actual: 24, projected: 27 },
];

export default function BarComparison() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Projections vs Actuals</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Bar dataKey="projected" fill="#93c5fd" />
          <Bar dataKey="actual" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
