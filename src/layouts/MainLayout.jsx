import React from "react";
import { Outlet } from "react-router-dom";
import CollapsibleSidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <CollapsibleSidebar />
      <div className="flex-1 overflow-auto bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
