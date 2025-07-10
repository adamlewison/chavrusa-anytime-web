// src/types/dashboard.ts

export interface User {
  name: string;
  avatar: string;
  level: string;
  streak: number;
  totalHours: number;
}

export interface UpcomingSession {
  id: number;
  topic: string;
  partner: string;
  partnerAvatar: string;
  time: string;
  duration: string;
  minutesUntil: number;
  status: string;
}

export interface Stats {
  weeklyGoal: { current: number; target: number };
  sessionsThisWeek: number;
  partnersActive: number;
  achievementsUnlocked: number;
}

export interface RecentActivity {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  time: string;
  icon: string;
  color: string;
}

export interface QuickAction {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  action: string;
}

export interface DashboardData {
  user: User;
  upcomingSession: UpcomingSession;
  stats: Stats;
  recentActivity: RecentActivity[];
  quickActions: QuickAction[];
}
