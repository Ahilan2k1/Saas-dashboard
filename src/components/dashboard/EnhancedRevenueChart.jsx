import React from 'react';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export default function EnhancedRevenueChart() {
  const data = [
    { month: "Jan", current: 12, previous: 7, projection: null },
    { month: "Feb", current: 8, previous: 17, projection: null },
    { month: "Mar", current: 6, previous: 14, projection: null },
    { month: "Apr", current: 14, previous: 10, projection: 10 },
    { month: "May", current: 18, previous: 20, projection: 18 },
    { month: "Jun", current: 23, previous: 22, projection: 20 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name === 'current' 
                ? 'Current Week' 
                : entry.name === 'previous' 
                  ? 'Previous Week' 
                  : 'Projection'}: ${entry.value}M
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-xl p-6 bg-white shadow-sm border  w-3/4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-8 mb-4">
           <h2 className="text-xl font-semibold">Revenue</h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="text-sm text-gray-600">Current Week</span>
            <span className="font-semibold text-lg">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Previous Week</span>
            <span className="font-semibold text-lg">$68,768</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 20 }}>

        <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb"
              horizontal={true}
              vertical={false}
        />

          <XAxis 
            dataKey="month" 
            axisLine={true}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 14 }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 14 }}
            tickFormatter={(value) => `${value}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            padding={{ top: 20, bottom: 20 }}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Previous week */}
          <Line 
            type="monotone" 
            dataKey="previous" 
            stroke="#60a5fa" 
            strokeWidth={3}
            dot={false}
          />

          {/* Current week */}
          <Line 
            type="monotone" 
            dataKey="current" 
            stroke="#000" 
            strokeWidth={3}
            dot={false}
          />

          {/* Projection (dashed) */}
          {/* <Line 
            type="monotone" 
            dataKey="projection" 
            stroke="#000" 
            strokeWidth={3}
            strokeDasharray="8 8"
            dot={false}
            connectNulls={true}
          /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
