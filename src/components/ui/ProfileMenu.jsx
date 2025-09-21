import React from 'react'


export default function ProfileMenu(){
return (
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none" aria-label="Notifications">🔔</button>
<button className="flex items-center gap-2 rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
<img src={`https://i.pravatar.cc/40?u=demo`} alt="avatar" className="h-8 w-8 rounded-full" />
<span className="text-sm">Ahilan</span>
</button>
</div>
)
}