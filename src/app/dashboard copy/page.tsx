// src/app/dashboard/page.tsx

"use client";

import React from "react";
import Button from "@/components/atoms/Button";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-extrabold text-orange-500 tracking-tight">
                Chavrusa
              </span>
              <span className="text-3xl font-semibold text-blue-600 tracking-tight">
                Anytime
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button className="relative p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
              </button>
              <Button variant="primary" icon="fas fa-plus" size="md">
                New Session
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-8 space-y-12">
            {/* Welcome Section */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Good evening, Shimon
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Ready for tonight's learning session?
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    47
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Study Hours
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    12
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Day Streak
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                    23
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Sessions
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                    4
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Partners
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Session */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Today's Session
                </h2>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          R
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Bava Kamma - Chapter 3
                          </h3>
                          <p className="text-gray-600 font-medium">
                            with Rabbi David Cohen
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-gray-700">
                        <i className="fas fa-clock text-blue-600"></i>
                        <span className="font-semibold">8:00 PM - 9:30 PM</span>
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end space-y-4">
                      <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 text-sm font-bold rounded-full">
                        <i className="fas fa-clock mr-2"></i>
                        Starting in 45 minutes
                      </span>

                      <div className="flex space-x-4">
                        <Button variant="primary" icon="fas fa-video" size="md">
                          Join Session
                        </Button>
                        <Button
                          variant="outline"
                          icon="fas fa-calendar-alt"
                          size="md"
                        >
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-users text-white text-2xl"></i>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      Find Chavrusa
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discover your perfect study partner with our smart
                      matching system
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-book-open text-white text-2xl"></i>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      Browse Topics
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Explore our comprehensive library of Torah texts and
                      subjects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-4 space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  Recent Activity
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-trophy text-emerald-600 text-lg"></i>
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-gray-900">
                        Earned Talmud Scholar badge
                      </p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      NEW
                    </span>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-video text-blue-600 text-lg"></i>
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-gray-900">
                        Completed session with Rabbi Cohen
                      </p>
                      <p className="text-sm text-gray-500">Today at 7:30 PM</p>
                    </div>
                    <span className="text-xs font-bold text-blue-600">
                      1.5h
                    </span>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-handshake text-purple-600 text-lg"></i>
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-gray-900">
                        New chavrusa match found
                      </p>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                    <span className="text-xs font-bold text-purple-600">
                      94%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  Weekly Goal
                </h3>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">
                        Study Hours
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        47/50
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">
                        94% complete • 3 hours remaining
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700">
                        Consistency
                      </span>
                      <span className="text-lg font-bold text-emerald-600">
                        12 days
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Your longest streak yet! 🔥
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl border border-orange-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                This Week
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    5
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    Sessions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    12h
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    Studied
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
