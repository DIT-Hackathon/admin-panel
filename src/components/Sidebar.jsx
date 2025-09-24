import React, { useState, useEffect } from "react";

export default function CollapsibleSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Start closed by default
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  // Initial setup - detect mobile and set appropriate initial state
  useEffect(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    setIsOpen(!mobile); // Open on desktop, closed on mobile
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      const wasMobile = isMobile;
      setIsMobile(mobile);

      // Close sidebar on mobile by default, but only on initial load or mobile transition
      if (mobile && !wasMobile) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMobile]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      name: "Teams",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      name: "Projects",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: "Submissions",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
    },
    {
      name: "Judging",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      name: "Leaderboard",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-gray-900 relative">
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        ${
          isMobile
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        }
        ${isMobile ? "fixed" : "relative"} z-40 lg:z-0
        flex flex-col 
        ${isMobile ? "w-64" : isOpen ? "w-64" : "w-16"}
        bg-gray-800 border-r border-gray-700
        transition-all duration-300 ease-in-out
        h-full lg:h-auto
      `}
      >
        <div
          className={`${
            isOpen || isMobile ? "px-4 lg:px-6" : "px-2"
          } py-6 flex flex-col gap-6 h-full transition-all duration-300`}
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
              H
            </div>
            <div
              className={`text-xl font-semibold text-white transition-all duration-300 overflow-hidden ${
                !isOpen && !isMobile ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              AIoThon
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 flex-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  if (isMobile) setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeItem === item.name
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                } ${!isOpen && !isMobile ? "justify-center px-2" : ""}`}
                title={!isOpen && !isMobile ? item.name : ""}
              >
                <div className="flex items-center justify-center w-5 h-5">
                  {item.icon}
                </div>
                <span
                  className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
                    !isOpen && !isMobile ? "opacity-0 w-0" : "opacity-100"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div
                className={`flex-1 min-w-0 transition-all duration-300 overflow-hidden ${
                  !isOpen && !isMobile ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                <div className="text-sm font-medium text-white truncate">
                  Organizer
                </div>
                <div className="text-xs text-gray-400 truncate">
                  admin@hackathon.dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        aria-label={isOpen ? "Collapse sidebar" : "Open sidebar"}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed top-4 z-50
          ${
            isMobile
              ? isOpen
                ? "left-64 -translate-x-12"
                : "left-4"
              : isOpen
              ? "left-64"
              : "left-16"
          } 
          ${!isMobile ? "-translate-x-1/2" : ""} 
          w-10 h-10 lg:w-8 lg:h-8 
          rounded-lg
          bg-gray-700 border border-gray-600 text-gray-300 
          flex items-center justify-center 
          shadow-lg hover:bg-gray-600 active:bg-gray-500
          focus:outline-none focus:ring-2 focus:ring-purple-500
          transition-all duration-300 cursor-pointer
          touch-manipulation
        `}
      >
        {isMobile ? (
          isOpen ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )
        ) : (
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        )}
      </button>

      {/* Main Content */}
      <main
        className={`flex-1 overflow-auto bg-gray-900 transition-all duration-300 ${
          isMobile ? "w-full" : isOpen ? "lg:ml-0" : "lg:ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
