// src/components/layout/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RightPanel from "./RightPanel";

export default function Layout({ children, showRightPanel = true }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className={`grid gap-6 ${
            showRightPanel 
              ? 'grid-cols-1 xl:grid-cols-[1fr_20rem]' 
              : 'grid-cols-1'
          }`}>
            {/* Dashboard content */}
            <div>{children}</div>
            {/* Right panel - conditionally rendered */}
            {showRightPanel && <RightPanel />}
          </div>
        </main>
      </div>
    </div>
  );
}