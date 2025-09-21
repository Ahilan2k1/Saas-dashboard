import React from "react";

const locations = [
  { country: "USA", revenue: 3900, percent: 60 },
  { country: "UK", revenue: 2200, percent: 34 },
  { country: "India", revenue: 1800, percent: 28 },
  { country: "Germany", revenue: 1200, percent: 20 },
  { country: "Canada", revenue: 800, percent: 12 },
];

export default function LocationCard() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Revenue by Location</h2>

      <div className="space-y-4">
        {locations.map((loc, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">
                {loc.country}
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                ${loc.revenue.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${loc.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
