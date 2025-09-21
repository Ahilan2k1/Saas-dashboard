import React, { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'


const SAMPLE_USERS = new Array(58).fill(0).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 5 === 0 ? 'inactive' : 'active',
    created: new Date(Date.now() - (i * 86400000)).toISOString().slice(0, 10),
}))

function stableSort(array, comparator) {
    const stabilized = array.map((el, index) => [el, index])
    stabilized.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilized.map((el) => el[0])
}


function getComparator(key, asc) {
    return (a, b) => {
        if (a[key] < b[key]) return asc ? -1 : 1
        if (a[key] > b[key]) return asc ? 1 : -1
        return 0
    }
}

export default function UsersTable() {
    const [q, setQ] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')
    const [sortKey, setSortKey] = useState('id')
    const [asc, setAsc] = useState(true)
    const [page, setPage] = useState(1)
    const perPage = 10


    const filtered = useMemo(() => {
        let data = SAMPLE_USERS
        if (filterStatus !== 'all') data = data.filter(d => d.status === filterStatus)
        if (q) data = data.filter(d => d.name.toLowerCase().includes(q.toLowerCase()) || d.email.toLowerCase().includes(q.toLowerCase()))
        data = stableSort(data, getComparator(sortKey, asc))
        return data
    }, [q, filterStatus, sortKey, asc])


    const pages = Math.max(1, Math.ceil(filtered.length / perPage))
    useEffect(() => { if (page > pages) setPage(1) }, [pages])
    const current = useMemo(() => filtered.slice((page - 1) * perPage, page * perPage), [filtered, page])

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                    <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search users" className="input" />
                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="input">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>


                <div className="flex items-center gap-2">
                    <button onClick={() => setAsc(!asc)} className="btn">Sort {asc ? '↑' : '↓'}</button>
                    <select value={sortKey} onChange={(e) => setSortKey(e.target.value)} className="input">
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                        <option value="created">Created</option>
                    </select>
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-xs text-gray-500">
                            <th className="py-2">ID</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {current.map(u => (
                            <motion.tr key={u.id} whileHover={{ scale: 1.01 }} className="border-t border-gray-100 dark:border-gray-800">
                                <td className="py-3 font-mono text-xs">{u.id}</td>
                                <td className="py-3">{u.name}</td>
                                <td className="py-3 text-gray-500 text-sm">{u.email}</td>
                                <td className="py-3"><span className={`px-2 py-1 rounded-full text-xs ${u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>{u.status}</span></td>
                                <td className="py-3 text-sm text-gray-500">{u.created}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="flex items-center justify-between mt-4">
                <div className="text-xs text-gray-500">Showing {(page - 1) * perPage + 1} - {Math.min(page * perPage, filtered.length)} of {filtered.length}</div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setPage(1)} disabled={page === 1} className="btn">⏮</button>
                    <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="btn">Prev</button>
                    <div className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">{page}</div>
                    <button onClick={() => setPage(p => Math.min(p + 1, pages))} disabled={page === pages} className="btn">Next</button>
                    <button onClick={() => setPage(pages)} disabled={page === pages} className="btn">⏭</button>
                </div>
            </div>
        </div>
    )
}