"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
 
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const tabs = [
    { name: "Home", to: "/", icon: <FaHome className="text-lg" /> },
    { name: "About", to: "/about", icon: <FaUser className="text-lg" /> },
    { name: "Projects", to: "/projects", icon: <FaProjectDiagram className="text-lg" /> },
    { name: "Resume", to: "/resume", icon: <FaFileAlt className="text-lg" /> },
  ];

  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center justify-center relative py-1">
        {/* Centered Tabs */}
        <div className="flex gap-4 border border-gray-500 rounded-3xl p-4 px-8 bg-transparent">
          {tabs?.map((tab, i) => (
            <div 
            onClick={()=>setCurrentTab(tab.name)}
              key={i}
              className={`${
                currentTab === tab.name
                  ? "text-black bg-neonGreen rounded-3xl px-4"
                  : "text-white hover:underline transition-all duration-300 ease-in-out"
              } p-1 text-sm flex items-center gap-2`}
            >
              {tab.icon}    <Link href={tab.to}>{tab.name}</Link>
            </div>
          ))}
        </div>

        {/* "Hire me" Button on the Right */}
        <div className="absolute right-8">
        <InteractiveHoverButton className="bg-neonGreen hover:bg-black text-sm text-black">Hire Me</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
