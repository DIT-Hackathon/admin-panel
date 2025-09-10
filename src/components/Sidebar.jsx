import { useState } from "react";
import { Plus, Mail, LayoutDashboard, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-56" : "w-16"
        } bg-black text-white h-screen p-4 flex flex-col transition-all duration-300`}
      >
    
        <h1 className="text-lg font-bold mb-6">{isOpen ? "Acme Inc." : "A"}</h1>

        <div className="flex items-center gap-2 mb-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <Plus size={20} />
          {isOpen && <span>Quick Create</span>}
          <Mail size={18} className="ml-auto" />
        </div>

        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <LayoutDashboard size={20} />
          {isOpen && <span>Dashboard</span>}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-black text-white"
      >
        <Menu size={20} />
      </button>

      <div className="flex-1 p-6">Your main content here...</div>
    </div>
  );
}
