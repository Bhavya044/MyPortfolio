"use client";

import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import HireMeDialog from "./hire-me/HireMeDialog";
import { PiCertificateFill } from "react-icons/pi";

interface ITabs {
  name: string;
  to: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const pathname = usePathname();

  const tabs: ITabs[] = [
    { name: "Home", to: "/", icon: <FaHome className="text-lg" /> },
    { name: "About", to: "/about", icon: <FaUser className="text-lg" /> },
    { name: "Experience", to: "/experience", icon: <CgWorkAlt className="text-lg" /> },
    { name: "Certifications", to: "/certifications", icon: <PiCertificateFill className="text-lg" /> },
    { name: "Projects", to: "/projects", icon: <FaProjectDiagram className="text-lg" /> },
    { name: "Resume", to: "/resume", icon: <FaFileAlt className="text-lg" /> },
  ];

  const [currentTab, setCurrentTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const matching: ITabs | undefined = tabs.find((tab) => tab.to === pathname);
    if (matching) setCurrentTab(matching.name);
  }, [pathname]);

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center justify-between relative py-1">
        {/* 🌟 Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🌐 Tabs - Hidden on Mobile, Shown as Drawer */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-900 shadow-lg z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-neonGreen">Menu</h2>
              <FaTimes
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-4">
              {tabs.map((tab, i) => (
                <Link
                  href={tab.to}
                  key={i}
                  className={`p-2 text-sm flex items-center gap-3 transition-all rounded-lg duration-300 ease-in-out ${
                    currentTab === tab.name
                      ? "text-black bg-neonGreen"
                      : "text-white hover:bg-gray-700"
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setCurrentTab(tab.name);
                    setMenuOpen(false); // Close drawer after selecting
                  }}
                >
                  {tab.icon}
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 🌓 Overlay when Drawer is Open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* 💻 Tabs for Larger Screens */}
        <div className="hidden lg:flex gap-4 border border-gray-500 rounded-3xl p-4 px-8 bg-transparent">
          {tabs.map((tab, i) => (
            <Link
              href={tab.to}
              key={i}
              className={`p-1 text-sm flex items-center gap-2 transition-all duration-300 ease-in-out ${
                currentTab === tab.name
                  ? "text-black bg-neonGreen rounded-3xl px-4"
                  : "text-white hover:underline"
              }`}
              role="button"
              tabIndex={0}
              onClick={() => setCurrentTab(tab.name)}
            >
              {tab.icon}
              {tab.name}
            </Link>
          ))}
        </div>

        {/* 💼 "Hire me" Button on the Right */}
        <div className="absolute right-2">
          <InteractiveHoverButton
            onClick={() => setIsOpen(true)}
            className="bg-neonGreen hover:bg-black text-xs md:text-base text-black"
          >
            Hire Me
          </InteractiveHoverButton>

          <HireMeDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
