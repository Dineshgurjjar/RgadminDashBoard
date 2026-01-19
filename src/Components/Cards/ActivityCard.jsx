import { Clock, CheckCircle, AlertCircle, Info } from "lucide-react";

export default function ActivityCard({ type, message, time }) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={18} className="text-green-600" />;
      case "warning":
        return <AlertCircle size={18} className="text-yellow-600" />;
      case "info":
        return <Info size={18} className="text-blue-600" />;
      default:
        return <Clock size={18} className="text-gray-600" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-green-900/10";
      case "warning":
        return "bg-yellow-50 dark:bg-yellow-900/10";
      case "info":
        return "bg-blue-50 dark:bg-blue-900/10";
      default:
        return "bg-gray-50 dark:bg-slate-800";
    }
  };

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg border 
      ${getBgColor()} border-gray-100 dark:border-gray-700`}
    >
      <div className="mt-1">{getIcon()}</div>

      <div className="flex-1">
        <p className="text-sm dark:text-gray-200">{message}</p>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {time}
        </span>
      </div>
    </div>
  );
}
