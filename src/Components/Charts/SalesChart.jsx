import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../../data/dashboardData";

export default function SalesChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Weekly Sales
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
