import React from 'react'
import { motion } from 'framer-motion'


export default function StatCard({ title, value, change, subtitle }){
return (
<motion.div whileHover={{ y: -4 }} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
<div className="text-xl font-semibold mt-1">{value}</div>
</div>
<div className={`text-sm font-medium ${change && change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{change}</div>
</div>
<div className="text-xs text-gray-400 mt-2">{subtitle}</div>
</motion.div>
)
}