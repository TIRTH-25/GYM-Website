import { useState } from "react";
import { RiMenuLine, RiCloseLine, RiUserLine } from "@remixicon/react";
import soulFitnessLogo from "../assets/soul-fitness-logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Trainers", href: "#trainers" },
    { name: "Membership", href: "#membership" },
    { name: "Contact", href: "#contact" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav className="bg-black w-full min-h-16 px-5 md:px-6 text-white relative">
      {/* Main Navbar */}
      <div className="h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <img
            src={soulFitnessLogo}
            alt="Soul Fitness logo"
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain bg-white rounded-full"
          />

          <a href="#" className="text-lg sm:text-xl font-bold">
            Soul Fitness
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-red-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Admin Button */}
        <a
          href="/GYM-Website/admin"
          className="hidden md:flex items-center gap-2 border border-gray-600 text-gray-300 text-sm font-semibold px-4 py-2 rounded-full hover:border-red-500 hover:text-red-500 active:scale-95 transition-all duration-200"
        >
          <RiUserLine size={18} />
          Admin
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1 hover:text-red-500 transition-colors duration-200"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 py-4">
          <div className="flex flex-col gap-2 text-sm items-center">
            {/* Mobile Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:text-red-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Admin Button */}
            <a
              href="/GYM-Website/admin"
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-gray-600 text-gray-300 text-sm font-semibold px-4 py-2 rounded-full hover:border-red-500 hover:text-red-500 active:scale-95 transition-all duration-200"
            >
              <RiUserLine size={18} />
              Admin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
