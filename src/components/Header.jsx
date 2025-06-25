import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiHome, FiBookOpen, FiInfo } from "react-icons/fi";
import GlassIcons from "../Bits/GlassIcons";

export default function Header() {
  const [open, setOpen] = useState(false);

  const items = [
    { icon: <FiHome size={16} />, color: "gray", label: "Home", to: "/" },
    { icon: <FiBookOpen size={16} />, color: "gray", label: "Courses", to: "/courses" },
    { icon: <FiInfo size={16} />, color: "gray", label: "About Us", to: "/About-us" },
  ];

  return (
    <header className="top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">EduAI</h1>

        {/* GlassIcons for Desktop Only */}
        <div className="hidden md:block">
          <GlassIcons items={items} className=" gap-5 scale-90" />
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden flex flex-col space-y-3 px-4 pb-4 text-white bg-black">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-2 hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
