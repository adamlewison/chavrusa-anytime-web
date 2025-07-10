// src/app/dashboard/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";

// Mock data - in real app this would come from API
const mockUserData = {
  name: "Shimon Kolyakov",
  studyHours: 47,
  dayStreak: 12,
  upcomingSessions: [
    {
      id: 1,
      topic: "Bava Kamma - Chapter 3",
      partner: "Rabbi David Cohen",
      time: "8:00 PM - 9:30 PM",
      minutesUntil: 45,
      status: "upcoming",
    },
  ],
  recentActivity: [
    {
      id: 1,
      type: "achievement",
      title: "Earned Talmud Scholar badge",
      time: "2 hours ago",
      icon: "fas fa-trophy",
      value: "New!",
    },
    {
      id: 2,
      type: "session",
      title: "Completed session with Rabbi Cohen",
      time: "Today at 7:30 PM",
      icon: "fas fa-video",
      value: "1.5h",
    },
    {
      id: 3,
      type: "match",
      title: "New chavrusa match found",
      time: "Yesterday",
      icon: "fas fa-handshake",
      value: "94%",
    },
  ],
};

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Set greeting based on time
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    return () => clearInterval(timer);
  }, []);

  const triggerHaptic = () => {
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }
  };

  const showToast = (message: string) => {
    // Simple toast implementation - in real app this would be a proper toast system
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.85);
      color: white;
      padding: 12px 24px;
      border-radius: 20px;
      font-size: 13px;
      z-index: 1000;
      backdrop-filter: blur(10px);
      font-weight: 500;
      max-width: 300px;
      text-align: center;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 2500);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--gradient-background)" }}
    >
      {/* Header */}
      <header
        style={{
          background: "var(--gradient-card)",
          padding: "var(--space-5) var(--space-6)",
          borderBottom: "1px solid var(--color-gray-200)",
          boxShadow: "var(--shadow-md)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating background elements */}
        <div
          style={{
            position: "absolute",
            top: "-30%",
            right: "-15%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            left: "-8%",
            width: "120px",
            height: "120px",
            background:
              "radial-gradient(circle, rgba(118, 75, 162, 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        <div className="container mx-auto">
          <div
            className="flex items-center justify-between"
            style={{ position: "relative", zIndex: 2 }}
          >
            {/* App Logo */}
            <div
              className="flex items-baseline cursor-pointer"
              onClick={() => showToast("Welcome to Chavrusa-Anytime!")}
            >
              <span
                style={{
                  fontSize: "var(--text-2xl)",
                  fontWeight: "var(--font-extrabold)",
                  color: "var(--color-primary-orange)",
                  letterSpacing: "-0.3px",
                  marginRight: "1px",
                }}
              >
                Chavrusa
              </span>
              <span
                style={{
                  fontSize: "var(--text-2xl)",
                  fontWeight: "var(--font-semibold)",
                  color: "var(--color-primary-blue)",
                  letterSpacing: "-0.2px",
                }}
              >
                Anytime
              </span>
            </div>

            {/* Header Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => showToast("You have 3 new notifications")}
                style={{
                  width: "44px",
                  height: "44px",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                  borderRadius: "var(--radius-xl)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "var(--shadow-md)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                }}
              >
                <i
                  style={{
                    color: "var(--color-primary-blue)",
                    fontSize: "18px",
                  }}
                  className="fas fa-bell"
                ></i>
                {/* Notification badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    background: "var(--gradient-secondary)",
                    color: "white",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    fontSize: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    border: "2px solid white",
                    boxShadow: "0 2px 8px rgba(255, 71, 87, 0.4)",
                  }}
                >
                  3
                </span>
              </button>

              <button
                onClick={() => showToast("Opening calendar view...")}
                style={{
                  width: "44px",
                  height: "44px",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                  borderRadius: "var(--radius-xl)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "var(--shadow-md)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <i
                  style={{
                    color: "var(--color-primary-blue)",
                    fontSize: "18px",
                  }}
                  className="fas fa-calendar-alt"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="container mx-auto"
        style={{ padding: "var(--space-4) var(--space-4) 100px" }}
      >
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div
            className="cursor-pointer interactive"
            onClick={() => showToast("Viewing detailed progress...")}
            style={{
              background: "var(--gradient-card)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-2xl)",
              textAlign: "center",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: "var(--font-extrabold)",
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "var(--space-1)",
              }}
            >
              {mockUserData.studyHours}
            </div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-gray-600)",
                fontWeight: "var(--font-semibold)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Study Hours
            </div>
          </div>

          <div
            className="cursor-pointer interactive"
            onClick={() => showToast("12-day streak! Keep it up!")}
            style={{
              background: "var(--gradient-card)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-2xl)",
              textAlign: "center",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: "var(--font-extrabold)",
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "var(--space-1)",
              }}
            >
              {mockUserData.dayStreak}
            </div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-gray-600)",
                fontWeight: "var(--font-semibold)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Day Streak
            </div>
          </div>
        </div>

        {/* Today's Sessions */}
        <section style={{ marginBottom: "var(--space-5)" }}>
          <div className="flex items-center justify-between mb-4">
            <h2
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: "var(--font-extrabold)",
                color: "var(--color-gray-800)",
              }}
            >
              Today's Sessions
            </h2>
            <button
              onClick={() => showToast("Opening all sessions...")}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-primary-blue)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-semibold)",
                cursor: "pointer",
                padding: "var(--space-2) var(--space-3)",
                borderRadius: "var(--radius-base)",
              }}
            >
              View All
            </button>
          </div>

          {mockUserData.upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="cursor-pointer interactive"
              onClick={() =>
                showToast(`Opening session ${session.id} details...`)
              }
              style={{
                background: "var(--gradient-card)",
                borderRadius: "var(--radius-3xl)",
                padding: "var(--space-5)",
                marginBottom: "var(--space-3)",
                border: "1px solid rgba(0, 0, 0, 0.04)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top border accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "var(--gradient-primary)",
                }}
              />

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-bold)",
                      color: "var(--color-gray-800)",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {session.topic}
                  </h3>
                  <div
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-gray-500)",
                      marginBottom: "var(--space-2)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fas fa-user"
                      style={{
                        marginRight: "var(--space-2)",
                        fontSize: "10px",
                      }}
                    ></i>
                    with {session.partner}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "rgba(102, 126, 234, 0.1)",
                      color: "var(--color-primary-blue)",
                      padding: "var(--space-1) var(--space-2)",
                      borderRadius: "var(--radius-base)",
                      fontSize: "var(--text-xs)",
                      fontWeight: "var(--font-semibold)",
                    }}
                  >
                    <i
                      className="fas fa-clock"
                      style={{ marginRight: "var(--space-1)", fontSize: "9px" }}
                    ></i>
                    {session.time}
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #ff9f43 0%, #ff6b6b 100%)",
                    color: "white",
                    padding: "var(--space-2) var(--space-3)",
                    borderRadius: "var(--radius-xl)",
                    fontSize: "var(--text-xs)",
                    fontWeight: "var(--font-bold)",
                    textAlign: "center",
                    minWidth: "70px",
                    boxShadow: "0 4px 15px rgba(255, 159, 67, 0.3)",
                  }}
                >
                  In {session.minutesUntil} min
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="primary"
                  icon="fas fa-video"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerHaptic();
                    showToast("Connecting to video session...");
                  }}
                  className="flex-1"
                >
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  icon="fas fa-clock"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerHaptic();
                    showToast("Opening reschedule options...");
                  }}
                  className="flex-1"
                >
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section style={{ marginBottom: "var(--space-5)" }}>
          <div className="grid grid-cols-2 gap-3">
            <div
              className="cursor-pointer interactive"
              onClick={() => showToast("Opening smart matching...")}
              style={{
                background: "var(--gradient-card)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-4) var(--space-3)",
                textAlign: "center",
                border: "1px solid rgba(0, 0, 0, 0.04)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  margin: "0 auto var(--space-3)",
                  borderRadius: "var(--radius-xl)",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "white",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <i className="fas fa-search"></i>
              </div>
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-bold)",
                  color: "var(--color-gray-800)",
                  marginBottom: "var(--space-1)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.2px",
                }}
              >
                Find Chavrusa
              </h3>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-gray-500)",
                  lineHeight: "1.3",
                  fontWeight: "var(--font-medium)",
                }}
              >
                Discover new study partners
              </p>
            </div>

            <div
              className="cursor-pointer interactive"
              onClick={() => showToast("Opening Torah library...")}
              style={{
                background: "var(--gradient-card)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-4) var(--space-3)",
                textAlign: "center",
                border: "1px solid rgba(0, 0, 0, 0.04)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  margin: "0 auto var(--space-3)",
                  borderRadius: "var(--radius-xl)",
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "white",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <i className="fas fa-book-open"></i>
              </div>
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-bold)",
                  color: "var(--color-gray-800)",
                  marginBottom: "var(--space-1)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.2px",
                }}
              >
                Browse Topics
              </h3>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-gray-500)",
                  lineHeight: "1.3",
                  fontWeight: "var(--font-medium)",
                }}
              >
                Explore Torah subjects
              </p>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: "var(--font-extrabold)",
                color: "var(--color-gray-800)",
              }}
            >
              Recent Activity
            </h2>
          </div>

          <div
            style={{
              background: "var(--gradient-card)",
              borderRadius: "var(--radius-2xl)",
              padding: "var(--space-4)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {mockUserData.recentActivity.map((activity, index) => (
              <div
                key={activity.id}
                className="flex items-center py-3"
                style={{
                  borderBottom:
                    index < mockUserData.recentActivity.length - 1
                      ? "1px solid rgba(0, 0, 0, 0.04)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "var(--space-3)",
                    fontSize: "12px",
                    color: "white",
                    background:
                      activity.type === "achievement"
                        ? "var(--gradient-success)"
                        : activity.type === "session"
                        ? "var(--gradient-primary)"
                        : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  }}
                >
                  <i className={activity.icon}></i>
                </div>

                <div className="flex-1">
                  <div
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--color-gray-800)",
                      marginBottom: "2px",
                    }}
                  >
                    {activity.title}
                  </div>
                  <div
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-gray-500)",
                      fontWeight: "var(--font-medium)",
                    }}
                  >
                    {activity.time}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-bold)",
                    color: "var(--color-primary-blue)",
                  }}
                >
                  {activity.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button
        onClick={() => showToast("Quick schedule options...")}
        style={{
          position: "fixed",
          bottom: "110px",
          right: "20px",
          width: "56px",
          height: "56px",
          background: "var(--gradient-primary)",
          borderRadius: "var(--radius-2xl)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "var(--shadow-floating)",
          zIndex: 999,
        }}
        className="interactive"
      >
        <i
          style={{ color: "white", fontSize: "20px" }}
          className="fas fa-plus"
        ></i>
      </button>

      {/* Bottom Navigation */}
      <nav
        style={{
          background: "var(--gradient-card)",
          padding: "12px 12px",
          paddingBottom: "max(12px, env(safe-area-inset-bottom))",
          borderTop: "1px solid rgba(0, 0, 0, 0.04)",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "390px",
          boxShadow: "0 -2px 15px rgba(0, 0, 0, 0.04)",
          zIndex: 1000,
        }}
      >
        <div className="grid grid-cols-5 gap-1">
          {[
            { icon: "fas fa-home", label: "Home", active: true, badge: null },
            {
              icon: "fas fa-handshake",
              label: "Matches",
              active: false,
              badge: "3",
            },
            {
              icon: "fas fa-calendar-alt",
              label: "Sessions",
              active: false,
              badge: null,
            },
            {
              icon: "fas fa-comments",
              label: "Messages",
              active: false,
              badge: "5",
            },
            {
              icon: "fas fa-user",
              label: "Profile",
              active: false,
              badge: null,
            },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => showToast(`Opening ${item.label}...`)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "var(--space-2) var(--space-1)",
                borderRadius: "var(--radius-xl)",
                border: "none",
                cursor: "pointer",
                color: item.active ? "white" : "var(--color-gray-500)",
                background: item.active
                  ? "var(--gradient-primary)"
                  : "transparent",
                boxShadow: item.active
                  ? "0 4px 16px rgba(102, 126, 234, 0.3)"
                  : "none",
                position: "relative",
              }}
              className="interactive"
            >
              <div style={{ position: "relative" }}>
                <i
                  className={item.icon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "var(--space-1)",
                    transform: item.active ? "translateY(-1px)" : "none",
                  }}
                ></i>
                {item.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background:
                        "linear-gradient(135deg, #ff4757 0%, #ff3742 100%)",
                      color: "white",
                      borderRadius: "50%",
                      width: "18px",
                      height: "18px",
                      fontSize: "9px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      border: "2px solid white",
                      boxShadow: "0 2px 8px rgba(255, 71, 87, 0.4)",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "var(--font-semibold)",
                  lineHeight: 1,
                  letterSpacing: "0.2px",
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
