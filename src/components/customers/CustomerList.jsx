import React, { useMemo } from 'react'
import { motion } from 'framer-motion'


export default function CustomerList(){
const customers = useMemo(() => new Array(5).fill(0).map((_,i)=>({ id:i+1, name:`Customer ${i+1}`, email:`customer${i+1}@example.com`, plan: i%2===0?'Pro':'Starter'})), [])


return (
<ul className="space-y-2">
{customers.map(c=> (
<motion.li key={c.id} whileHover={{ x:6 }} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
<div>
<div className="font-medium">{c.name}</div>
<div className="text-xs text-gray-500">{c.email}</div>
</div>
<div className="text-sm text-gray-600 dark:text-gray-300">{c.plan}</div>
</motion.li>
))}
</ul>
)
}