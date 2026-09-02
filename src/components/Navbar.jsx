import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import soulFitnessLogo from "../assets/soul-fitness-logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Trainers", href: "#trainers" },
    { name: "Membership", href: "#membership" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav className="bg-black w-full min-h-16 px-5 md:px-6 text-white relative">

      {/* Main Navbar */}
      <div className="h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex gap-3 items-center">
          <img
            className="h-12 w-12 object-contain bg-white rounded-full"
            src={soulFitnessLogo}
            alt="Soul Fitness logo"
          />

          <a href="#" className="text-xl font-bold">
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

        {/* Desktop Join Button */}
        <button className="hidden md:block bg-red-500 text-sm font-bold px-5 py-2 rounded-full hover:bg-red-600 active:scale-95 transition-all duration-200">
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <RiCloseLine size={28} />
          ) : (
            <RiMenuLine size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 py-5">

          <div className="flex flex-col gap-5 text-sm">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => setMenuOpen(false)}
              className="bg-red-500 text-sm font-bold px-5 py-2 rounded-full hover:bg-red-600 active:scale-95 transition-all duration-200"
            >
              Join Now
            </button>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;