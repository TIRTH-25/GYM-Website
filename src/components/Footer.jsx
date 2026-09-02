import React from "react";
import soulFitnessLogo from "../assets/soul-fitness-logo.jpg";
import {
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-black px-6 pt-10 text-white">
      <div className="max-w-7xl mx-auto">
        {/* main block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12 rounded-full"
                src={soulFitnessLogo}
                alt="Soul Fitness Logo"
              />
              <h3 className="text-xl font-bold">Soul Fitness</h3>
            </div>
            <p className="text-gray-400 text-sm leading-6 mt-5 max-w-3xs">
              Transform your body, transform your life. Join our community and
              embark on a journey to a healthier, stronger you.
            </p>
            {/* Social Link */}
            <div className="flex gap-8 mt-6">
              <a
                href="#"
                className="border border-gray-700 rounded-full p-2 hover:bg-red-500 hover:border-red-500 transition active:scale-95"
              >
                <RiTwitterXLine size={20} />
              </a>
              <a
                href="#"
                className="border border-gray-700 rounded-full p-2 hover:bg-red-500 hover:border-red-500 transition active:scale-95"
              >
                <RiInstagramLine size={20} />
              </a>
              <a
                href="#"
                className="border border-gray-700 rounded-full p-2 hover:bg-red-500 hover:border-red-500 transition active:scale-95"
              >
                <RiYoutubeLine size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col text-sm text-gray-400 mt-5 gap-5">
              <a href="#about">About Us</a>
              <a href="#trainers">Trainers</a>
              <a href="#membership">Membership</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400 mt-5">
              <div className="flex items-center gap-3">
                <RiPhoneLine size={18} className="text-red-500" />
                <span>08868855925</span>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine size={18} className="text-red-500" />
                <span>info@soulfitness.com</span>
              </div>
              <div className="flex items-start gap-3">
                <RiMapPinLine size={18} className="text-red-500 shrink-0" />
                <span>
                  1st Floor, Nr. Rajyotit Xerox, B/H Bank of India, Hariyavad
                  Rd, Killa Pardi, India-396125
                </span>
              </div>
            </div>
          </div>
          {/* Timing */}
          <div>
            <h4 className="font-bold text-sm mb-5">Opening Hours</h4>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex justify-between gap-5">
                <span className="text-gray-400">Mon - Fri:</span>
                <span className="font-semibold">6AM - 10PM</span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-gray-400">Saturday:</span>
                <span className="font-semibold">7AM - 9PM</span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-gray-400">Sunday:</span>
                <span className="font-semibold">7AM - 9PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-20"></div>
        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between gap-5 text-gray-400 text-sm items-center py-10">
          <p>© 2026 Soul Fitness. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Made By TIRTH-25 🤍</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
