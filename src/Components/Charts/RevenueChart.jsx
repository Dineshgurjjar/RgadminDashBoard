import { LineChart,  Line,  XAxis,  YAxis,  Tooltip,  CartesianGrid,  ResponsiveContainer,} from "recharts";
import { revenueData } from "../../data/dashboardData";

const formatCurrency = (value) =>
  `₹${value.toLocaleString("en-IN")}`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow text-sm">
        <p className="font-medium">{label}</p>
        <p className="text-blue-600">
          Revenue: {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  if (!revenueData || revenueData.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow text-center text-gray-500">
        No revenue data available
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
    
      <div className="mb-4">
        <h2 className="text-lg font-semibold dark:text-white">
          Revenue Trend
        </h2>
        <p className="text-sm text-gray-500">
          Monthly revenue overview
        </p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>

            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              strokeOpacity={0.2}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              tickFormatter={formatCurrency}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="url(#revenueGradient)"
              strokeWidth={3}
              dot={{ r: 4, fill: "#2563eb" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
