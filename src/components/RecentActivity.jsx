import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

const RecentActivity = () => {
  const activities = [
    {
      action: "Team 'Code Warriors' submitted their project",
      time: "2 minutes ago",
      type: "submission",
      avatar: "CW",
    },
    {
      action:
        "Judge Sarah M. completed evaluation for 'Smart Waste Management'",
      time: "5 minutes ago",
      type: "evaluation",
      avatar: "SM",
    },
    {
      action: "New team 'AI Innovators' registered",
      time: "12 minutes ago",
      type: "registration",
      avatar: "AI",
    },
    {
      action: "Team 'Green Tech' updated their project description",
      time: "18 minutes ago",
      type: "update",
      avatar: "GT",
    },
    {
      action: "Judge panel review scheduled for tomorrow 9 AM",
      time: "1 hour ago",
      type: "system",
      avatar: "SY",
    },
  ];

  const submissions = [
    {
      id: "PRJ-001",
      team: "Code Crusaders",
      project: "AI Healthcare Assistant",
      status: "Under Review",
      date: "Sep 24, 2025",
      score: "94.5",
      category: "Healthcare",
    },
    {
      id: "PRJ-002",
      team: "Digital Dynamos",
      project: "Blockchain Voting System",
      status: "Evaluated",
      date: "Sep 24, 2025",
      score: "92.8",
      category: "Blockchain",
    },
    {
      id: "PRJ-003",
      team: "Tech Titans",
      project: "Smart City Dashboard",
      status: "Under Review",
      date: "Sep 23, 2025",
      score: "91.2",
      category: "Smart City",
    },
    {
      id: "PRJ-004",
      team: "Innovation Squad",
      project: "AR Learning Platform",
      status: "Pending",
      date: "Sep 23, 2025",
      score: "Pending",
      category: "Education",
    },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      "Under Review": "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
      Evaluated: "bg-green-500/20 text-green-400 border-green-500/50",
      Pending: "bg-gray-500/20 text-gray-400 border-gray-500/50",
    };
    return `px-2 py-1 rounded-full text-xs font-medium border ${
      styles[status] || styles.Pending
    }`;
  };

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
      {/* Recent Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-gray-300">
                    {activity.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-300 break-words">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Recent Submissions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium text-gray-400">
                      ID
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium text-gray-400">
                      Team
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium text-gray-400 hidden sm:table-cell">
                      Project
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium text-gray-400">
                      Status
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium text-gray-400 hidden md:table-cell">
                      Date
                    </th>
                    <th className="text-right py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium text-gray-400">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="border-b border-gray-700 hover:bg-gray-700/50"
                    >
                      <td className="py-2 sm:py-3 px-2">
                        <div className="font-medium text-xs sm:text-sm text-white">
                          {submission.id}
                        </div>
                      </td>
                      <td className="py-2 sm:py-3 px-2">
                        <div>
                          <div className="font-medium text-xs sm:text-sm text-white truncate max-w-[100px] sm:max-w-none">
                            {submission.team}
                          </div>
                          <div className="text-xs text-gray-400 truncate max-w-[100px] sm:max-w-none">
                            {submission.category}
                          </div>
                          <div className="text-xs text-gray-400 sm:hidden mt-1 truncate max-w-[120px]">
                            {submission.project}
                          </div>
                        </div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 hidden sm:table-cell">
                        <span className="text-sm text-gray-300 truncate max-w-[150px] block">
                          {submission.project}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2">
                        <span className={getStatusBadge(submission.status)}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 hidden md:table-cell">
                        <span className="text-sm text-gray-400">
                          {submission.date}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 text-right">
                        <span
                          className={`font-medium text-xs sm:text-sm ${
                            submission.score === "Pending"
                              ? "text-gray-400"
                              : "text-purple-400"
                          }`}
                        >
                          {submission.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivity;
