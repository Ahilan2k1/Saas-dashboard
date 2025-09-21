import React from 'react'


export default function Card({ title, children }) {
return (
<div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold">{title}</h3>
<div className="text-sm text-gray-500">Last 30d</div>
</div>
<div>{children}</div>
</div>
)
}