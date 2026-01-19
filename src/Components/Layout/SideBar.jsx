import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/", badge: null },
  { icon: Users, label: "Users", path: "/users", badge: 3 },
  { icon: ShoppingCart, label: "Orders", path: "/orders", badge: 5 },
  { icon: BarChart, label: "Analytics", path: "/analytics", badge: null },
  { icon: Settings, label: "Settings", path: "/settings", badge: null },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`min-h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
      style={{
        backgroundImage: "url('/sidebar-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/75 min-h-screen p-4 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            {!collapsed && (
              <h1 className="font-bold text-lg">Admin Panel</h1>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-white/10"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl transition-all
                  ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "hover:bg-white/10"
                  }`
                }
              >
                <Icon size={20} />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-sm font-medium">
                      {item.label}
                    </span>

                    {item.badge && (
                      <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
