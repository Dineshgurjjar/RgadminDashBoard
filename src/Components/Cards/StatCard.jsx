import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ title, value, growth }) {
  const isPositive = growth?.includes("+");

  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h2 className="text-2xl font-bold mt-1 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
            isPositive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}
          {growth}
        </div>
      </div>
    </div>
  );
}
