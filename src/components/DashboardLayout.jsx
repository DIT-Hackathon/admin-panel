import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col space-y-4 p-4 md:p-6 lg:p-8 pt-6">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
