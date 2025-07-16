"use client";

import React, { useState, useEffect } from "react";

// Mock data that would come from API
const mockData = {
  user: {
    name: "Shimon Kolyakov",
    avatar: "S",
    level: "Advanced Scholar",
    streak: 18,
    totalHours: 127,
  },
  upcomingSession: {
    id: 1,
    topic: "Gemara Bava Kamma 3b",
    partner: "Rabbi David Cohen",
    partnerAvatar: "D",
    time: "8:00 PM",
    duration: "90 min",
    minutesUntil: 45,
    status: "confirmed",
  },
  stats: {
    weeklyGoal: { current: 12, target: 15 },
    sessionsThisWeek: 7,
    partnersActive: 4,
    achievementsUnlocked: 3,
  },
  recentActivity: [
    {
      id: 1,
      type: "achievement",
      title: "Talmud Scholar Badge Earned",
      subtitle: "Completed 50 hours of Gemara study",
      time: "2h ago",
      icon: "fas fa-trophy",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      type: "session",
      title: "Completed with Rabbi Cohen",
      subtitle: "Gemara Bava Kamma 2b-3a",
      time: "Today 7:30 PM",
      icon: "fas fa-video",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      type: "match",
      title: "New Chavrusa Found",
      subtitle: "98% compatibility • Mishnah specialist",
      time: "Yesterday",
      icon: "fas fa-handshake",
      color: "from-green-400 to-emerald-600",
    },
  ],
  quickActions: [
    {
      id: 1,
      title: "Find Study Partner",
      subtitle: "Smart AI matching",
      icon: "fas fa-search",
      color: "from-purple-400 to-purple-600",
      action: "match",
    },
    {
      id: 2,
      title: "Browse Torah Library",
      subtitle: "10,000+ sources",
      icon: "fas fa-book-open",
      color: "from-indigo-400 to-indigo-600",
      action: "library",
    },
    {
      id: 3,
      title: "Schedule Session",
      subtitle: "Available partners",
      icon: "fas fa-calendar-plus",
      color: "from-teal-400 to-cyan-600",
      action: "schedule",
    },
    {
      id: 4,
      title: "Join Study Group",
      subtitle: "Live discussions",
      icon: "fas fa-users",
      color: "from-pink-400 to-rose-600",
      action: "groups",
    },
  ],
};

export default function ModernDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animate elements on load
    setIsLoaded(true);

    // Update time
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);

    // Set greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    return () => clearInterval(timer);
  }, []);

  const showToast = (message) => {
    // Simple toast notification
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className =
      "fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm font-medium z-50 shadow-xl";
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 2500);
  };

  const StatCard = ({ title, value, subtitle, trend, color }) => (
    <div
      className={`bg-gradient-to-br ${color} p-6 rounded-3xl text-white shadow-lg hover:shadow-xl transition-all duration-500 ${
        isLoaded ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-black mb-1">{value}</p>
          <p className="text-white/90 text-xs">{subtitle}</p>
        </div>
        {trend && (
          <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
            <i
              className={`fas fa-arrow-${trend > 0 ? "up" : "down"} text-xs`}
            ></i>
            <span className="text-xs font-bold">+{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => (
    <div className="flex items-center p-4 hover:bg-gray-50 rounded-2xl transition-all duration-300 cursor-pointer group">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <i className={`${activity.icon} text-lg`}></i>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 text-sm mb-1">
          {activity.title}
        </h4>
        <p className="text-gray-600 text-xs">{activity.subtitle}</p>
      </div>
      <span className="text-xs text-gray-500 font-medium">{activity.time}</span>
    </div>
  );

  const QuickActionCard = ({ action }) => (
    <div
      onClick={() => showToast(`Opening ${action.title}...`)}
      className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2"
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-3xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <i className={`${action.icon} text-2xl`}></i>
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">{action.title}</h3>
      <p className="text-gray-600 text-sm">{action.subtitle}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-baseline cursor-pointer group">
              <span className="text-3xl font-black text-orange-500 tracking-tight group-hover:scale-105 transition-transform duration-300">
                Chavrusa
              </span>
              <span
                className="text-3xl font-bold text-blue-600 tracking-tight group-hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                Anytime
              </span>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <button
                onClick={() => showToast("Opening search...")}
                className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-xl transition-all duration-300 group"
              >
                <i className="fas fa-search text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </button>

              {/* Notifications */}
              <button
                onClick={() => showToast("You have 3 new notifications")}
                className="relative p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-xl transition-all duration-300 group"
              >
                <i className="fas fa-bell text-lg group-hover:scale-110 transition-transform duration-300"></i>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Calendar */}
              <button
                onClick={() => showToast("Opening calendar...")}
                className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-xl transition-all duration-300 group"
              >
                <i className="fas fa-calendar-alt text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </button>

              {/* Profile */}
              <button
                onClick={() => showToast("Opening profile...")}
                className="flex items-center space-x-3 ml-2 p-2 hover:bg-gray-100/50 rounded-xl transition-all duration-300 group"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">
                  {mockData.user.avatar}
                </div>
                <span className="font-semibold text-gray-700 hidden sm:block group-hover:text-gray-900 transition-colors duration-300">
                  {mockData.user.name.split(" ")[0]}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className={`mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {mockData.user.avatar}
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-1">
                {greeting}, {mockData.user.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Ready for today's Torah learning journey?
              </p>
            </div>
          </div>

          {/* Streak Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl shadow-lg">
            <i className="fas fa-fire mr-2 text-lg animate-pulse"></i>
            <span className="font-bold text-lg">
              {mockData.user.streak} Day Streak!
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Study Hours"
            value={mockData.user.totalHours}
            subtitle="Total learning time"
            trend={12}
            color="from-blue-500 to-blue-700"
          />
          <StatCard
            title="Weekly Goal"
            value={`${mockData.stats.weeklyGoal.current}/${mockData.stats.weeklyGoal.target}`}
            subtitle="Hours this week"
            trend={8}
            color="from-green-500 to-emerald-600"
          />
          <StatCard
            title="Sessions"
            value={mockData.stats.sessionsThisWeek}
            subtitle="This week"
            trend={15}
            color="from-purple-500 to-indigo-600"
          />
          <StatCard
            title="Partners"
            value={mockData.stats.partnersActive}
            subtitle="Active connections"
            trend={5}
            color="from-pink-500 to-rose-600"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Today's Session */}
            <div
              className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden ${
                isLoaded ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-gray-900">
                    Today's Session
                  </h2>
                  <div className="flex items-center space-x-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                    <i className="fas fa-clock text-sm"></i>
                    <span className="text-sm font-bold">
                      In {mockData.upcomingSession.minutesUntil} min
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                          {mockData.upcomingSession.partnerAvatar}
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-gray-900 mb-1">
                            {mockData.upcomingSession.topic}
                          </h3>
                          <p className="text-gray-600 font-semibold">
                            with {mockData.upcomingSession.partner}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-gray-700">
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-clock text-blue-600"></i>
                          <span className="font-semibold">
                            {mockData.upcomingSession.time}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-hourglass-half text-blue-600"></i>
                          <span className="font-semibold">
                            {mockData.upcomingSession.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() =>
                          showToast("Connecting to video session...")
                        }
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <i className="fas fa-video"></i>
                        <span>Join Session</span>
                      </button>
                      <button
                        onClick={() =>
                          showToast("Opening reschedule options...")
                        }
                        className="bg-white text-gray-700 border-2 border-gray-200 px-6 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <i className="fas fa-calendar-alt"></i>
                        <span>Reschedule</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div
              className={`${isLoaded ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mockData.quickActions.map((action) => (
                  <QuickActionCard key={action.id} action={action} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div
              className={`bg-white rounded-3xl shadow-xl border border-gray-100 ${
                isLoaded ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-gray-900">
                    Recent Activity
                  </h3>
                  <button className="text-blue-600 font-semibold text-sm hover:underline">
                    View All
                  </button>
                </div>

                <div className="space-y-2">
                  {mockData.recentActivity.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Progress */}
            <div
              className={`bg-white rounded-3xl shadow-xl border border-gray-100 ${
                isLoaded ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-6">
                  Weekly Progress
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-gray-700">
                        Study Goal
                      </span>
                      <span className="text-2xl font-black text-gray-900">
                        {mockData.stats.weeklyGoal.current}/
                        {mockData.stats.weeklyGoal.target}h
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${
                            (mockData.stats.weeklyGoal.current /
                              mockData.stats.weeklyGoal.target) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>

                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      {Math.round(
                        (mockData.stats.weeklyGoal.current /
                          mockData.stats.weeklyGoal.target) *
                          100
                      )}
                      % complete •
                      {mockData.stats.weeklyGoal.target -
                        mockData.stats.weeklyGoal.current}{" "}
                      hours remaining
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-700">Streak</span>
                      <span className="text-lg font-black text-orange-600 flex items-center">
                        <i className="fas fa-fire mr-1"></i>
                        {mockData.user.streak} days
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Your longest streak yet! 🔥
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Preview */}
            <div
              className={`bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 text-white shadow-xl ${
                isLoaded ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <i className="fas fa-trophy text-2xl"></i>
                <h3 className="text-lg font-black">Latest Achievement</h3>
              </div>
              <p className="font-bold mb-2">Talmud Scholar</p>
              <p className="text-white/90 text-sm">
                Completed 50+ hours of Gemara study
              </p>
              <button
                onClick={() => showToast("Opening achievements...")}
                className="mt-4 bg-white/20 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all duration-300"
              >
                View All Achievements
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button
        onClick={() => showToast("Quick actions menu...")}
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
