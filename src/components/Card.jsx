import React from "react";

// Base Card Component
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg border border-gray-700 bg-gray-800 text-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight text-white ${className}`}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className = "" }) => {
  return <p className={`text-sm text-gray-400 ${className}`}>{children}</p>;
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

// Hackathon Stats Card Component
export const StatCard = ({ title, value, description, icon, trend }) => {
  return (
    <Card className="hover:bg-gray-750 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-gray-400">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-xs text-gray-400 flex items-center gap-1">
          {trend && (
            <span
              className={`flex items-center ${
                trend.positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {trend.positive ? (
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              )}
              {trend.value}
            </span>
          )}
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default Card;
