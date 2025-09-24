import React, { useState, useRef, useEffect } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-md border bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none"
      >
        Open
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-neutral-900 text-white border border-neutral-700 z-50">
          <ul className="py-1 text-sm">
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">My Account</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Billing</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Keyboard Shortcuts</li>

            <hr className="my-1 border-neutral-700" />

            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Team</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Invite Users</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">New Team</li>

            <hr className="my-1 border-neutral-700" />

            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">GitHub</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">Support</li>
            <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">API</li>

            <hr className="my-1 border-neutral-700" />

            <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
