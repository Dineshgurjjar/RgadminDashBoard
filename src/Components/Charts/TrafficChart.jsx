import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { trafficData } from "../../data/dashboardData";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function TrafficChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Traffic Sources
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficData}
              dataKey="value"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {trafficData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend-like summary */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {trafficData.map((t, i) => (
          <div key={t.source} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[i] }}
            ></span>
            <span className="dark:text-gray-300">
              {t.source}: {t.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
