import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Mainlayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="h-screen flex bg-gray-100 dark:bg-slate-900">
 
      <div className="hidden md:block">
        <Sidebar collapsed={!sidebarOpen} />
      </div>


      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="w-64">
            <Sidebar collapsed={false} />
          </div>
          <div
            className="flex-1 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
    
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

    
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
