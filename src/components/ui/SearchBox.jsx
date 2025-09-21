import React, { useState } from 'react'


export default function SearchBox() {
const [q, setQ] = useState('')
return (
<div className="relative">
<input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search customers, invoices..." aria-label="Search" className="input w-64" />
{q && <button onClick={()=>setQ('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-60">✕</button>}
</div>
)
}