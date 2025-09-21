import { useMemo } from 'react'


export default function usePagination(data, page, perPage) {
return useMemo(() => {
const total = data.length
const pages = Math.max(1, Math.ceil(total / perPage))
const current = data.slice((page - 1) * perPage, page * perPage)
return { total, pages, current }
}, [data, page, perPage])
}