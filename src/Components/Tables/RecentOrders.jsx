import { recentOrders } from "../../data/dashboardData"

export default function RecentOrders() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 dark:text-white">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left p-2 text-sm font-semibold">Order ID</th>
              <th className="text-left p-2 text-sm font-semibold">Customer</th>
              <th className="text-left p-2 text-sm font-semibold">Amount</th>
              <th className="text-left p-2 text-sm font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b last:border-none dark:border-gray-700"
              >
                <td className="p-2 text-sm dark:text-gray-300">
                  {order.id}
                </td>
                <td className="p-2 text-sm dark:text-gray-300">
                  {order.customer}
                </td>
                <td className="p-2 text-sm dark:text-gray-300">
                  {order.amount}
                </td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
