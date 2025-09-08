import React from "react";
import {
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    about: ["News", "Events", "Disciplines", "Athletes", "Partners", "Careers"],
    getInvolved: [
      "Clubs",
      "Coaching & Officiating",
      "Join AusCycling",
      "In Our Network",
      "Shop",
      "Contact Us",
    ],
    legal: [
      "Copyright Statement",
      "Social Media Policy",
      "Membership Terms and Conditions",
    ],
  };

  return (
    <footer className="bg-[#f1f1f1] py-40">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Main Footer Content */}
        <div className="flex w-full space-between mb-40">
          {/* Logo and Social Media */}
          <div className="flex-1">
            {/* Logo */}
            <div className="mb-8">
              <div className="w-[104px] h-[72px] flex items-center justify-center">
                {/* AusCycling Footer Logo - placeholder */}
                <Image
                  src="/images/auscycling-footer-logo.png"
                  alt="AusCycling Footer Logo"
                  width={104}
                  height={72}
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-48 h-48 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Twitter className="w-24 h-24 text-[#3c444d]" />
              </a>
              <a
                href="#"
                className="w-48 h-48 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Facebook className="w-24 h-24 text-[#3c444d]" />
              </a>
              <a
                href="#"
                className="w-48 h-48 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Youtube className="w-24 h-24 text-[#3c444d]" />
              </a>
              <a
                href="#"
                className="w-48 h-48 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <Instagram className="w-24 h-24 text-[#3c444d]" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex gap-32">
            {/* About */}
            <div className="w-[183px]">
              <h3 className="text-[#030d17] text-[18px] leading-[28px] font-normal mb-4">
                About
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#3c444d] text-[16px] leading-[24px] hover:text-[#02534d] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div className="w-[183px]">
              <h3 className="text-[#030d17] text-[18px] leading-[28px] font-normal mb-4">
                Get Involved
              </h3>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#3c444d] text-[16px] leading-[24px] hover:text-[#02534d] transition-colors flex items-center gap-1"
                    >
                      {link}
                      {link === "Shop" && <ExternalLink className="w-4 h-4" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="w-[183px]">
              <h3 className="text-[#030d17] text-[18px] leading-[28px] font-normal mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#3c444d] text-[16px] leading-[24px] hover:text-[#02534d] transition-colors flex items-center gap-1"
                    >
                      {link}
                      {link === "Social Media Policy" && (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#d3d5d7] pt-40">
          <div className="flex justify-between items-end">
            {/* Copyright and Acknowledgment */}
            <div className="max-w-[672px]">
              <p className="text-[#3c444d] text-[14px] leading-[20px] mb-2">
                © 2025 AusCycling. All rights reserved.
              </p>
              <p className="text-[#3c444d] text-[14px] leading-[20px]">
                AusCycling acknowledges the Traditional Custodians of country
                throughout Australia and their ongoing
                <br />
                connection to the land and waters. We pay our respects to their
                culture and Elders past and present and
                <br />
                acknowledge the value that First Nations people make to
                Australian sport and society.
              </p>
            </div>

            {/* Site by and Legal Links */}
            <div className="text-right">
              <a
                href="#"
                className="text-[#3c444d] text-[14px] leading-[20px] hover:text-[#02534d] transition-colors block mb-4"
              >
                Site by Thinkmill
              </a>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-[#3c444d] text-[14px] leading-[20px] hover:text-[#02534d] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-[#3c444d] text-[14px] leading-[20px] hover:text-[#02534d] transition-colors border-l border-[#d3d5d7] pl-4"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
