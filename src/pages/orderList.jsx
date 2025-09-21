import React, { useMemo, useState } from "react";
import {
  Plus,
  Filter,
  ArrowUpDown,
  Search,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";

/**
 * OrdersDashboard.jsx
 * - TailwindCSS + lucide-react
 * - Paste into your React app (ensure tailwind + lucide-react are installed)
 */

const initialOrders = [
  { id: "#CM9801", user: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/44.jpg", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", user: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/47.jpg", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", user: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/32.jpg", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", user: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/41.jpg", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", user: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/52.jpg", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
  { id: "#CM9806", user: "Emma Brown", avatar: "https://randomuser.me/api/portraits/women/65.jpg", project: "Marketing Site", address: "Hill Street Denver", date: "Feb 5, 2023", status: "In Progress" },
  { id: "#CM9807", user: "John Doe", avatar: "https://randomuser.me/api/portraits/men/66.jpg", project: "Portfolio", address: "Broadway NY", date: "Feb 6, 2023", status: "Complete" },
  { id: "#CM9808", user: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/68.jpg", project: "E-commerce App", address: "Lake Road Miami", date: "Feb 7, 2023", status: "Pending" },
  { id: "#CM9809", user: "Liam Smith", avatar: "https://randomuser.me/api/portraits/men/69.jpg", project: "Admin UI", address: "Green Street Austin", date: "Feb 8, 2023", status: "Approved" },
  { id: "#CM9810", user: "Olivia White", avatar: "https://randomuser.me/api/portraits/women/70.jpg", project: "Finance Dashboard", address: "Oak Avenue Dallas", date: "Feb 9, 2023", status: "Rejected" },
];

const STATUS_CLASSES = {
  "In Progress": "text-blue-500 bg-blue-50",
  Complete: "text-green-500 bg-green-50",
  Pending: "text-sky-400 bg-sky-50",
  Approved: "text-yellow-500 bg-yellow-50",
  Rejected: "text-red-500 bg-red-50",
};

export default function OrdersDashboard() {
  const [orders, setOrders] = useState(initialOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const [selected, setSelected] = useState([]); // selected ids
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [activeStatuses, setActiveStatuses] = useState([]); // filter by status
  const [sortAsc, setSortAsc] = useState(true);

  // filter + search + sort
  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    let result = orders.filter((o) => {
      const matchesSearch =
        !s ||
        o.id.toLowerCase().includes(s) ||
        o.user.toLowerCase().includes(s) ||
        o.project.toLowerCase().includes(s) ||
        o.address.toLowerCase().includes(s);
      const matchesStatus = activeStatuses.length === 0 || activeStatuses.includes(o.status);
      return matchesSearch && matchesStatus;
    });

    // simple sort by numeric part of id (e.g. #CM9801)
    result.sort((a, b) => {
      const na = parseInt(a.id.replace(/\D/g, "")) || 0;
      const nb = parseInt(b.id.replace(/\D/g, "")) || 0;
      return sortAsc ? na - nb : nb - na;
    });
    return result;
  }, [orders, search, activeStatuses, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const page = Math.min(currentPage, totalPages);
  const startIndex = (page - 1) * rowsPerPage;
  const pageData = filtered.slice(startIndex, startIndex + rowsPerPage);

  // selection
  const toggleSelectAllCurrent = () => {
    const pageIds = pageData.map((r) => r.id);
    const allSelected = pageIds.every((id) => selected.includes(id));
    if (allSelected) {
      setSelected((prev) => prev.filter((id) => !pageIds.includes(id)));
    } else {
      setSelected((prev) => Array.from(new Set([...prev, ...pageIds])));
    }
  };
  const toggleSelect = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // actions
  const deleteSelected = () => {
    if (!selected.length) return;
    setOrders((prev) => prev.filter((o) => !selected.includes(o.id)));
    setSelected([]);
    setCurrentPage(1);
  };

  const toggleStatusFilter = (status) => {
    setActiveStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]));
  };

  return (
    <div className="flex h-full">
      {/* Left column would be your sidebar - omitted here to focus on orders table */}
      <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold m-6">Order List</h2>
        {/* Title + controls (Add / Filter / Sort / Search) */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">

            {/* Add, Filter, Sort group */}
            <div className="flex items-center gap-2 ml-4">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white text-sm hover:shadow">
                <Plus className="w-4 h-4" /> 
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowFilter((s) => !s)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white text-sm hover:shadow ${activeStatuses.length ? "ring-1 ring-black/10" : ""}`}
                >
                  <Filter className="w-4 h-4" /> 
                </button>

                {/* simple filter panel */}
                {showFilter && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg border p-3 z-20">
                    <div className="text-sm font-medium mb-2">Status</div>
                    {Object.keys(STATUS_CLASSES).map((status) => (
                      <label key={status} className="flex items-center gap-2 text-sm mb-1 cursor-pointer">
                        <input type="checkbox" checked={activeStatuses.includes(status)} onChange={() => toggleStatusFilter(status)} />
                        <span className="ml-1">{status}</span>
                      </label>
                    ))}
                    <div className="mt-3 flex justify-between">
                      <button className="text-sm text-gray-600" onClick={() => setActiveStatuses([])}>Reset</button>
                      <button className="text-sm text-blue-600" onClick={() => setShowFilter(false)}>Apply</button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setSortAsc((s) => !s)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white text-sm hover:shadow"
                title="Toggle sort"
              >
                <ArrowUpDown className="w-4 h-4" />
              </button>

              {/* If any selected -> show bulk actions */}
              {selected.length > 0 && (
                <div className="ml-3 inline-flex items-center gap-2">
                  <button onClick={deleteSelected} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-50 text-red-600 text-sm border">
                    <Trash2 className="w-4 h-4" /> {selected.length}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right side search input */}
          <div className="w-80">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                placeholder="Search orders, user or project..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden border rounded-lg">
          <table className="min-w-full divide-y table-fixed">
            <colgroup>
              <col style={{ width: "4%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "18%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "12%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "6%" }} />
            </colgroup>

            <thead className="bg-gray-50">
              <tr className="text-sm text-gray-600">
                <th className="py-4 px-6 text-left align-middle">
                  <input
                    type="checkbox"
                    checked={pageData.length > 0 && pageData.every((r) => selected.includes(r.id))}
                    onChange={toggleSelectAllCurrent}
                  />
                </th>
                <th className="py-4 px-6 text-left align-middle">Order ID</th>
                <th className="py-4 px-6 text-left align-middle">User</th>
                <th className="py-4 px-6 text-left align-middle">Project</th>
                <th className="py-4 px-6 text-left align-middle">Address</th>
                <th className="py-4 px-6 text-left align-middle">Date</th>
                <th className="py-4 px-6 text-left align-middle">Status</th>
                <th className="py-4 px-6 text-left align-middle" />
              </tr>
            </thead>

            <tbody className="bg-white divide-y">
              {pageData.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-sm text-gray-500">
                    No orders found.
                  </td>
                </tr>
              ) : (
                pageData.map((order) => (
                  <tr key={order.id} className="text-sm text-gray-800">
                    <td className="py-5 px-6 align-middle">
                      <input type="checkbox" checked={selected.includes(order.id)} onChange={() => toggleSelect(order.id)} />
                    </td>

                    <td className="py-5 px-6 align-middle font-semibold">{order.id}</td>

                    <td className="py-5 px-6 align-middle">
                      <div className="flex items-center gap-3">
                        <img src={order.avatar} alt={order.user} className="w-8 h-8 rounded-full object-cover" />
                        <span>{order.user}</span>
                      </div>
                    </td>

                    <td className="py-5 px-6 align-middle">{order.project}</td>

                    <td className="py-5 px-6 align-middle">{order.address}</td>

                    <td className="py-5 px-6 align-middle">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{order.date}</span>
                      </div>
                    </td>

                    <td className="py-5 px-6 align-middle">
                      <div className="flex items-center gap-2">
                        {/* dot */}
                        <span className={`inline-block w-2 h-2 rounded-full ${STATUS_CLASSES[order.status] ?? "bg-gray-300"}`} />
                        <span className={`font-medium ${STATUS_CLASSES[order.status] ? STATUS_CLASSES[order.status].split(" ")[0] : "text-gray-700"}`}>
                          {order.status}
                        </span>
                      </div>
                    </td>

                    <td className="py-5 px-6 align-middle text-right">
                      <button className="p-2 rounded hover:bg-gray-100">
                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination (right aligned) */}
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* page numbers (show small range if lots of pages) */}
          {Array.from({ length: totalPages }).map((_, i) => {
            const pnum = i + 1;
            return (
              <button
                key={pnum}
                onClick={() => setCurrentPage(pnum)}
                className={`px-3 py-1 rounded ${pnum === page ? "bg-black text-white" : "bg-gray-100"}`}
              >
                {pnum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-2 rounded bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
