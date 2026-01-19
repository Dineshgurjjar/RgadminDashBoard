import {Bell,Search,Sun,Moon,Settings,User,LogOut,Keyboard,} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const notifications = [
  { id: 1, message: "New order received", time: "2 min ago" },
  { id: 2, message: "Payment completed", time: "10 min ago" },
  { id: 3, message: "Server backup successful", time: "1 hour ago" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifyRef = useRef(null);
  const profileRef = useRef(null);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  useEffect(() => {
    const handler = (e) => {
      if (
        notifyRef.current &&
        !notifyRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        document.getElementById("global-search")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b dark:border-slate-700 px-6 py-3 flex items-center justify-between">

      <div className="relative w-1/3">
        <Search
          className="absolute left-3 top-2.5 text-gray-400"
          size={18}
        />
        <input
          id="global-search"
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-20 py-2 rounded-lg border text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-slate-800 dark:text-white dark:border-slate-700"
        />
        <span className="absolute right-3 top-2.5 text-xs text-gray-400 flex items-center gap-1">
          <Keyboard size={12} /> Ctrl K
        </span>
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="relative" ref={notifyRef}>
          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
              {notifications.length}
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="px-4 py-3 font-semibold border-b dark:border-slate-700">
                Notifications
              </div>
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <p>{n.message}</p>
                  <span className="text-xs text-gray-500">
                    {n.time}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
          <Settings size={20} />
        </button>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 pl-4 border-l dark:border-slate-700"
          >
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <User size={16} />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">
                Admin User
              </p>
              <p className="text-xs text-gray-500">             
               admin@rgcs.co.in
              </p>
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 text-left">
                Profile
              </button>
              <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 text-left">
                Account Settings
              </button>
              <button className="w-full px-4 py-2 text-sm hover:bg-red-500 hover:text-white flex items-center gap-2">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
