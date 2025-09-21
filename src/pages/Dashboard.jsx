import StatCard from "../components/dashboard/StatCard"
import CustomPieChart from "../components/dashboard/CustomPieChart"
import EnhancedRevenueChart from "../components/dashboard/EnhancedRevenueChart"


import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer,CartesianGrid, LineChart, Line, Tooltip, Legend } from "recharts"

const barData = [
  { month: "Jan", actual: 18, projected: 20 },
  { month: "Feb", actual: 19, projected: 22 },
  { month: "Mar", actual: 21, projected: 21 },
  { month: "Apr", actual: 22, projected: 25 },
  { month: "May", actual: 18, projected: 20 },
  { month: "Jun", actual: 23, projected: 24 },
]

const lineData = [
  { month: "Jan", current: 10, previous: 15 },
  { month: "Feb", current: 12, previous: 14 },
  { month: "Mar", current: 14, previous: 16 },
  { month: "Apr", current: 18, previous: 17 },
  { month: "May", current: 22, previous: 19 },
  { month: "Jun", current: 25, previous: 21 },
]

const topSellingProducts = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const salesData = [
  { name: "Direct", value: 300.56, color: "#ef4444" },
  { name: "Affiliate", value: 135.18, color: "#84cc16" },
  { name: "Sponsored", value: 154.02, color: "#8b5cf6" },
  { name: "E-mail", value: 48.96, color: "#06b6d4" },
];

const locationData = [
  { name: "New York", revenue: "72K", progress: 85 },
  { name: "San Francisco", revenue: "39K", progress: 45 },
  { name: "Sydney", revenue: "25K", progress: 30 },
  { name: "Singapore", revenue: "61K", progress: 70 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6" min-width='892px'>

      <div className="flex gap-6" max-height='252px'>
        {/* Stat cards */}
        <div className="grid grid-cols-1 w-1/2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <StatCard title="Customers" value="3,781" change="+11.01%" positive={true} bg="bg-blue-50" />
          <StatCard title="Orders" value="1,219" change="-0.03%" positive={false} />
          <StatCard title="Revenue" value="$695" change="+15.03%" positive={true} bg="bg-purple-50" />
          <StatCard title="Growth" value="30.1%" change="+6.08%" positive={true} bg="bg-indigo-50" />
        </div>
        {/* Bar chart */}
        <div className="w-1/2 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm col-span-2">
          <h2 className="font-semibold mb-4">Projections vs Actuals</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData} barGap={-18}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                horizontal={true}
                vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={true}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 14 }}
                padding={{ left: 20, right: 20 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 14 }}
                tickFormatter={(value) => `${value}M`}
                domain={[0, 30]}
                ticks={[0, 10, 20, 30]} />
              <Tooltip />
              <Bar dataKey="projected" fill="#cbd5e1" barSize={18} opacity={0.99} radius={[3, 3, 0, 0]} />
              <Bar dataKey="actual" fill="#60a5fa" barSize={18} opacity={1} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex gap-6">

        {/* Line chart */}
        <EnhancedRevenueChart />
        {/* <RevenueChart/> */}

        {/* Map / Revenue by location */}
        <div className="rounded-xl p-6 bg-white w-1/4 dark:bg-gray-800 shadow-sm">
          <h2 className="font-semibold mb-4">Revenue by Location</h2>
          <img
            src="/World Map.png"
            alt="World Map"
            className="w-full h-32 object-cover rounded-lg opacity-30 filter grayscale" />
          <ul className="space-y-4">
            {locationData.map((location, index) => (
              <li key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{location.name}</span>
                  <span className="font-semibold text-gray-900">{location.revenue}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-blue-300 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${location.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Dashboard Content - Top Row */}
      <div className="flex gap-6">
        {/* Top Selling Products Table */}
        <div className="bg-white rounded-xl p-6 shadow-sm w-3/4">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Price</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Quantity</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
                </tr>
              </thead>
              <tbody>
                {topSellingProducts.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-900">{product.name}</td>
                    <td className="py-3 text-sm text-gray-700">{product.price}</td>
                    <td className="py-3 text-sm text-gray-700">{product.quantity}</td>
                    <td className="py-3 text-sm text-gray-900 font-medium">{product.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Sales Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm w-1/4">
          <h2 className="text-lg font-semibold mb-4">Total Sales</h2>

          <CustomPieChart data={salesData} />

          {/* Legend */}
          <div className="mt-6 space-y-3">
            {salesData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium">${item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
