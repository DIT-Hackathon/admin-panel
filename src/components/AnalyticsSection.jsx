import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

const AnalyticsSection = () => {
  const topTeams = [
    {
      name: "Code Crusaders",
      score: 94.5,
      project: "AI Healthcare Assistant",
      tech: ["React", "Python", "TensorFlow"],
    },
    {
      name: "Digital Dynamos",
      score: 92.8,
      project: "Blockchain Voting System",
      tech: ["Solidity", "Web3", "React"],
    },
    {
      name: "Tech Titans",
      score: 91.2,
      project: "Smart City Dashboard",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      name: "Innovation Squad",
      score: 89.7,
      project: "AR Learning Platform",
      tech: ["Unity", "C#", "ARCore"],
    },
    {
      name: "Future Builders",
      score: 88.3,
      project: "Green Energy Tracker",
      tech: ["Vue.js", "Python", "IoT"],
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
      {/* Team Progress Chart */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Team Progress Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-green-400">
                  156
                </div>
                <div className="text-xs text-gray-400">Submitted</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                  91
                </div>
                <div className="text-xs text-gray-400">In Progress</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-red-400">
                  0
                </div>
                <div className="text-xs text-gray-400">Not Started</div>
              </div>
            </div>
            <div className="h-24 sm:h-100 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400 text-xs sm:text-sm">
                📊 Project Progress Visualization
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Teams */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Top Performing Teams
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 sm:space-y-3">
            {topTeams.map((team, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-white text-xs sm:text-sm truncate">
                      {team.name}
                    </div>
                    <div className="text-xs text-gray-400 truncate">
                      {team.project}
                    </div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {team.tech.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-600 px-1 sm:px-1.5 py-0.5 rounded text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <div className="font-bold text-purple-400 text-sm">
                    {team.score}
                  </div>
                  <div className="text-xs text-gray-400">score</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsSection;
