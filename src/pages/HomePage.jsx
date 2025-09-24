import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardStats from "../components/DashboardStats";
import AnalyticsSection from "../components/AnalyticsSection";
import RecentActivity from "../components/RecentActivity";

function HomePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Hackathon Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-1">
            Welcome back! Here's what's happening with your hackathon.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700 h-9 sm:h-10 px-3 sm:px-4 py-2">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <DashboardStats />
      </div>

      {/* Analytics Section */}
      <div className="mb-6">
        <AnalyticsSection />
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default HomePage;
