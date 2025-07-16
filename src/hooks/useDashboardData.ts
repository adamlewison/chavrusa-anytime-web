// src/hooks/useDashboardData.ts
import { useState } from 'react';
import type { DashboardData } from '../types/dashboard';

const mockData: DashboardData = {
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
      color: "from-rose-400 to-rose-600",
      action: "group",
    },
  ],
};

export const useDashboardData = () => {
  const [data] = useState<DashboardData>(mockData);
  // In a real app, you might fetch this data from an API
  return data;
};
