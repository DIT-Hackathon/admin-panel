import React, { useState } from "react";

export default function CollapsibleSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 relative">
  
      {isOpen ? (
        <aside
          className="relative flex flex-col w-56 bg-black text-white transition-all duration-300 ease-in-out shrink-0"
        >
     
          <div className="px-4 py-6 flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm font-semibold">
                H
              </div>
              <div className="text-lg font-semibold">Hackathon</div>
            </div>

            <div className="h-px bg-white/6 my-1" />

            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 cursor-pointer">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-white/6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <div className="font-medium">Dashboard</div>
            </div>
          </div>
        </aside>
      ) : (

        <div className="w-1 bg-black shrink-0" />
      )}

      <button
        aria-label={isOpen ? "Collapse sidebar" : "Open sidebar"}
        onClick={() => setIsOpen((s) => !s)}
        className={`absolute top-6 ${isOpen ? "left-56" : "left-1"} w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md focus:outline-none transition-all duration-300`}
      >
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
