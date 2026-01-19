import MainLayout from "../Components/Layout/MainLayout";

import StatCard from "../Components/Cards/StatCard";
import RevenueChart from "../Components/Charts/RevenueChart";
import SalesChart from "../Components/Charts/SalesChart";
import TrafficChart from "../Components/Charts/TrafficChart";
import RecentOrders from "../Components/Tables/RecentOrders";
import ActivityCard from "../Components/Cards/ActivityCard";

import { stats, recentActivity } from "../data/dashboardData";

export default function Dashboard() {
  return (
    <MainLayout>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold dark:text-white">
          Dashboard Overview 👋
        </h1>
        <p className="text-sm text-gray-500">
          Here’s what’s happening with your business today
        </p>
      </div>

      {/* STATS */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.id}
              className="transform transition hover:-translate-y-1 hover:scale-[1.02]"
              onClick={() =>
                console.log(`Clicked on ${s.title}`)
              }
            >
              <StatCard
                title={s.title}
                value={s.value}
                growth={s.growth}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CHARTS */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="hover:shadow-lg transition rounded-xl">
            <RevenueChart />
          </div>
          <div className="hover:shadow-lg transition rounded-xl">
            <SalesChart />
          </div>
        </div>
      </section>

      {/* TRAFFIC + ACTIVITY */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Traffic */}
          <div className="lg:col-span-2 hover:shadow-lg transition rounded-xl">
            <TrafficChart />
          </div>

          {/* Activity */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-3 dark:text-white">
              Recent Activity
            </h2>

            <div className="space-y-3">
              {recentActivity.map((a) => (
                <div
                  key={a.id}
                  className="hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition"
                >
                  <ActivityCard
                    type={a.type}
                    message={a.message}
                    time={a.time}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORDERS */}
      <section className="mb-6">
        <div className="hover:shadow-lg transition rounded-xl">
          <RecentOrders />
        </div>
      </section>
    </MainLayout>
  );
}
