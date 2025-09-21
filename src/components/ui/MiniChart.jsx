import React from 'react'


export default function MiniChart(){
const points = [12, 15, 10, 18, 22, 28, 24, 32, 30, 36, 40, 34, 44, 48, 42]
const width = 600
const height = 160
const max = Math.max(...points)
const step = width / (points.length - 1)
const path = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - (v / max) * (height - 20)}`).join(' ')


return (
<div className="h-40">
<svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
<defs>
<linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopOpacity="0.3" stopColor="#7c3aed" />
<stop offset="100%" stopOpacity="0" stopColor="#7c3aed" />
</linearGradient>
</defs>
<path d={path} stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round" />
<path d={`${path} L ${width} ${height} L 0 ${height} Z`} fill="url(#g1)" opacity="0.6" />
</svg>
</div>
)
}