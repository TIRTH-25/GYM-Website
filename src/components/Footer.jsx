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
    <footer className="bg-black px-5 sm:px-6 pt-12 md:pt-16 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ================= ABOUT ================= */}
          <div>
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full object-contain"
                src={soulFitnessLogo}
                alt="Soul Fitness Logo"
              />

              <h3 className="text-xl font-bold">
                Soul Fitness
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-6 mt-5 max-w-xs">
              Transform your body, transform your life. Join our community and
              embark on a journey to a healthier, stronger you.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                aria-label="Twitter"
                className="border border-gray-700 rounded-full p-2
                hover:bg-red-500 hover:border-red-500
                transition-all duration-200 active:scale-95"
              >
                <RiTwitterXLine size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="border border-gray-700 rounded-full p-2
                hover:bg-red-500 hover:border-red-500
                transition-all duration-200 active:scale-95"
              >
                <RiInstagramLine size={20} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="border border-gray-700 rounded-full p-2
                hover:bg-red-500 hover:border-red-500
                transition-all duration-200 active:scale-95"
              >
                <RiYoutubeLine size={20} />
              </a>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col text-sm text-gray-400 mt-5 gap-4">

              <a
                href="#about"
                className="hover:text-red-500 transition-colors duration-200"
              >
                About Us
              </a>

              <a
                href="#trainers"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Trainers
              </a>

              <a
                href="#membership"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Membership
              </a>

              <a
                href="#contact"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Contact
              </a>

            </div>
          </div>


          {/* ================= CONTACT INFO ================= */}
          <div>

            <h3 className="font-bold text-lg">
              Contact Info
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400 mt-5">

              {/* Phone */}
              <div className="flex items-center gap-3">

                <RiPhoneLine
                  size={18}
                  className="text-red-500 shrink-0"
                />

                <span>
                  08868855925
                </span>

              </div>


              {/* Email */}
              <div className="flex items-center gap-3">

                <RiMailLine
                  size={18}
                  className="text-red-500 shrink-0"
                />

                <span className="break-all">
                  info@soulfitness.com
                </span>

              </div>


              {/* Address */}
              <div className="flex items-start gap-3">

                <RiMapPinLine
                  size={18}
                  className="text-red-500 shrink-0 mt-0.5"
                />

                <span className="leading-5">
                  1st Floor, Nr. Rajyotit Xerox, B/H Bank of India,
                  Hariyavad Rd, Killa Pardi, India-396125
                </span>

              </div>

            </div>

          </div>


          {/* ================= OPENING HOURS ================= */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              Opening Hours
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              {/* Monday - Friday */}
              <div className="flex justify-between gap-5">

                <span className="text-gray-400">
                  Mon - Fri:
                </span>

                <span className="font-semibold">
                  6AM - 10PM
                </span>

              </div>


              {/* Saturday */}
              <div className="flex justify-between gap-5">

                <span className="text-gray-400">
                  Saturday:
                </span>

                <span className="font-semibold">
                  7AM - 9PM
                </span>

              </div>


              {/* Sunday */}
              <div className="flex justify-between gap-5">

                <span className="text-gray-400">
                  Sunday:
                </span>

                <span className="font-semibold">
                  7AM - 9PM
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="border-t border-gray-800 mt-14 md:mt-20"></div>


        {/* ================= BOTTOM FOOTER ================= */}
        <div
          className="
            flex flex-col
            md:flex-row
            justify-between
            gap-4
            text-gray-400
            text-sm
            items-center
            text-center
            md:text-left
            py-8 md:py-10
          "
        >

          <p>
            © 2026 Soul Fitness. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            <span className="hover:text-white transition-colors">
              Privacy Policy
            </span>

            <span>
              |
            </span>

            <span>
              Made By TIRTH-25 🤍
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;