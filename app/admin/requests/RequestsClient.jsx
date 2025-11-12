"use client";

import { useState } from "react";
import ActionButtons from "./ActionButtons";

export default function RequestsClient({ requests }) {
  const [filter, setFilter] = useState("All");

  // Client-side filtering
  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <div>
      {/* Dropdown Filter */}
      <div className="flex items-center justify-end mb-4">
        <label className="text-white mr-2 font-semibold">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 rounded  bg-black text-white"
          style={{outline:"none", border:"1px solid #1f1f1f"}}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Declined">Declined</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-container">
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Visit Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((req) => (
                <tr key={req.id} className="border-t hover:bg-gray-50">
                  <td>{req.name}</td>
                  <td>{req.email}</td>
                  <td>{req.title}</td>
                  <td>{req.date}</td>
                  <td>{req.time}</td>
                  <td>{req.location}</td>
                  <td
                    className="p-3 font-semibold"
                    style={{
                      color:
                        req.status === "Accepted"
                          ? "green"
                          : req.status === "Declined"
                          ? "red"
                          : "#3b82f6",
                    }}
                  >
                    {req.status || "Pending"}
                  </td>
                  <td className="p-3">
                    {req.status === "Pending" ? (
                      <ActionButtons req={req} />
                    ) : (
                      <button
                        className="bg-black text-white px-3 mt-2 py-1 rounded"
                        style={{ cursor: "not-allowed" }}
                      >
                        Done
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center text-gray-500 py-3"
                >
                  No {filter} requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
