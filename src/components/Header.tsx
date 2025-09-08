import React from "react";
import { ChevronDown, User } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#02534d] py-3 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              {/* AusCycling Logo - placeholder for now */}
              <Image
                src="/images/auscycling-header-logo.png"
                alt="AusCycling Logo"
                width={70}
                height={48}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-white text-sm font-normal hover:text-white/80 transition-colors"
              >
                About
              </a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            <a
              href="#"
              className="text-white text-sm font-normal hover:text-white/80 transition-colors"
            >
              News
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-white text-sm font-normal hover:text-white/80 transition-colors"
              >
                Events
              </a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-white text-sm font-normal hover:text-white/80 transition-colors"
              >
                Clubs
              </a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-white text-sm font-normal hover:text-white/80 transition-colors"
              >
                Coaching & Officiating
              </a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-white text-sm font-normal hover:text-white/80 transition-colors"
              >
                Join AusCycling
              </a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            <a
              href="#"
              className="text-white text-sm font-normal hover:text-white/80 transition-colors"
            >
              ARA Australian Cycling Team
            </a>
          </div>

          {/* Members Login Button */}
          <div className="flex items-center">
            <button className="bg-white text-[#02534d] px-[18px] py-2 rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors">
              <span className="text-sm font-normal">Members Login</span>
              <User className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
