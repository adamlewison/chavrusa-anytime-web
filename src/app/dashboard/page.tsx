"use client";

import React, { useState, useEffect } from "react";
import type { RecentActivity, QuickAction } from "../../types/dashboard";
import { useToast } from "../../hooks/useToast";
import { useGreeting } from "../../hooks/useGreeting";
import { useDashboardData } from "../../hooks/useDashboardData";

export default function ModernDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [countdown, setCountdown] = useState("");

  const showToast = useToast();
  const greeting = useGreeting();
  const data = useDashboardData();

  useEffect(() => {
    setIsLoaded(true);

    if (!data) return;

    const timer = setInterval(() => {
      const now = new Date();
      const sessionTime = new Date();
      const [time, period] = data.upcomingSession.time.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (period === "PM" && hours < 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      sessionTime.setHours(hours, minutes, 0, 0);

      const diff = sessionTime.getTime() - now.getTime();
      if (diff > 0) {
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
            .toString()
            .padStart(2, "0")}`
        );
      } else {
        setCountdown("Live");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [data]);

  if (!data) {
    return <div>Loading dashboard...</div>; // Or a proper skeleton loader
  }

  // Helper components defined inside for brevity, can be moved to separate files
  const StatCard = ({
    icon,
    value,
    label,
    color,
  }: {
    icon: string;
    value: string | number;
    label: string;
    color: string;
  }) => (
    <div
      className={`bg-gradient-to-br ${color} p-5 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="text-white">
          <p className="text-3xl font-black mb-1">{value}</p>
          <p className="text-sm font-medium opacity-80">{label}</p>
        </div>
        <i className={`${icon} text-4xl text-white opacity-30`}></i>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }: { activity: RecentActivity }) => (
    <div className="flex items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mr-4 shadow-inner`}
      >
        <i className={`${activity.icon} text-white text-xl`}></i>
      </div>
      <div className="flex-grow">
        <p className="font-bold text-gray-800 text-sm">{activity.title}</p>
        <p className="text-xs text-gray-500">{activity.subtitle}</p>
      </div>
      <p className="text-xs text-gray-400 font-medium ml-4 whitespace-nowrap">
        {activity.time}
      </p>
    </div>
  );

  const QuickActionCard = ({ action }: { action: QuickAction }) => (
    <button
      onClick={() => showToast(`Performing ${action.title}...`)}
      className={`p-4 rounded-3xl bg-gradient-to-br ${action.color} text-white text-left shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
    >
      <i className={`${action.icon} text-2xl mb-3 opacity-70`}></i>
      <p className="font-bold text-sm">{action.title}</p>
      <p className="text-xs opacity-80">{action.subtitle}</p>
    </button>
  );

  return (
    <div
      className={`min-h-screen bg-gray-50 text-gray-800 transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-md mx-auto p-6 pb-28">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {data.user.avatar}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => showToast("Opening notifications...")}
              className="relative text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
              <i className="fas fa-bell text-2xl"></i>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                3
              </span>
            </button>
            <button
              onClick={() => showToast("Opening settings...")}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
              <i className="fas fa-cog text-2xl"></i>
            </button>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 leading-tight">
            {greeting},{" "}
            <span className="text-blue-600">
              {data.user.name.split(" ")[0]}
            </span>
          </h1>
          <p className="text-lg text-gray-500 mt-2">{data.user.level}</p>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <StatCard
            icon="fas fa-fire-alt"
            value={data.user.streak}
            label="Day Streak"
            color="from-orange-400 to-red-500"
          />
          <StatCard
            icon="fas fa-clock"
            value={`${data.user.totalHours}h`}
            label="Total Study"
            color="from-teal-400 to-blue-500"
          />
          <StatCard
            icon="fas fa-users"
            value={data.stats.partnersActive}
            label="Active Partners"
            color="from-purple-400 to-indigo-500"
          />
          <StatCard
            icon="fas fa-trophy"
            value={data.stats.achievementsUnlocked}
            label="Achievements"
            color="from-yellow-400 to-amber-500"
          />
        </section>

        {/* Upcoming Session */}
        <section className="mb-8 p-6 bg-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
          <div className="absolute -bottom-8 -left-2 w-32 h-32 bg-purple-500/10 rounded-full"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                {data.upcomingSession.partnerAvatar}
              </div>
              <div>
                <p className="font-bold text-gray-800">
                  {data.upcomingSession.topic}
                </p>
                <p className="text-sm text-gray-600">
                  with {data.upcomingSession.partner}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-100/70 p-4 rounded-2xl mb-4">
              <div className="flex items-center">
                <i className="fas fa-calendar-alt text-blue-500 mr-3 text-lg"></i>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {data.upcomingSession.time}
                  </p>
                  <p className="text-xs text-gray-500">
                    {data.upcomingSession.duration}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-blue-600">
                  {countdown || "--:--:--"}
                </p>
                <p className="text-xs text-gray-500">until session</p>
              </div>
            </div>
            <button
              onClick={() =>
                showToast(`Joining session on ${data.upcomingSession.topic}`)
              }
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fas fa-video mr-2"></i>
              Join Session NOOOW
            </button>
          </div>
        </section>

        {/* Weekly Goal */}
        <section className="mb-8 p-6 bg-white rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Weekly Goal Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
              style={{
                width: `${
                  (data.stats.weeklyGoal.current /
                    data.stats.weeklyGoal.target) *
                  100
                }%`,
              }}
            ></div>
          </div>
          <p className="text-sm font-bold text-gray-800 mt-2">
            {data.stats.weeklyGoal.current} /{" "}
            <span className="font-medium text-gray-500">
              {data.stats.weeklyGoal.target} hours
            </span>
          </p>
        </section>

        {/* Recent Activity */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {data.recentActivity.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.quickActions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </div>
        </section>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => showToast("Opening new session scheduler...")}
        className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-30 flex items-center justify-center"
      >
        <i className="fas fa-plus text-xl"></i>
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 z-40">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="grid grid-cols-5 gap-1">
            {[
              { icon: "fas fa-home", label: "Home", active: true },
              { icon: "fas fa-handshake", label: "Matches", badge: "3" },
              { icon: "fas fa-calendar-alt", label: "Sessions" },
              { icon: "fas fa-comments", label: "Messages", badge: "5" },
              { icon: "fas fa-user", label: "Profile" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => showToast(`Opening ${item.label}...`)}
                className={`flex flex-col items-center py-2 px-1 rounded-2xl transition-all duration-300 ${
                  item.active
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <div className="relative">
                  <i className={`${item.icon} text-lg mb-1`}></i>
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold leading-none">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
