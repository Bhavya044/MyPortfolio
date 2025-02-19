"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
 
import Link from "next/link";
import { MagicCard } from "@/components/magicui/magic-card";
import { useState } from "react";

export default function Navbar() {
  const tabs = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
  ];

  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center justify-center relative py-4">
        {/* Centered Tabs */}
        <div className="flex gap-4 border border-gray-500 rounded-3xl p-4 px-8 bg-transparent">
          {tabs?.map((tab, i) => (
            <div
              key={i}
              className={`${
                currentTab === tab.name
                  ? "text-black bg-neonGreen rounded-3xl px-4"
                  : "text-white hover:underline transition-all duration-300 ease-in-out"
              } p-1`}
            >
              <Link href={tab.to}>{tab.name}</Link>
            </div>
          ))}
        </div>

        {/* "Hire me" Button on the Right */}
        <div className="absolute right-8">
        <InteractiveHoverButton className="bg-neonGreen hover:bg-black">Hire Me</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
