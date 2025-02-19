"use client";

import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

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
    { name: "Projects", to: "/projects", icon: <FaProjectDiagram className="text-lg" /> },
    { name: "Resume", to: "/resume", icon: <FaFileAlt className="text-lg" /> },
  ];

  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    const matching: ITabs | undefined = tabs.find((tab) => tab.to === pathname);
    if (matching) setCurrentTab(matching.name);
  }, [pathname]);

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center justify-center relative py-1">
        {/* Centered Tabs */}
        <div className="flex gap-4 border border-gray-500 rounded-3xl p-4 px-8 bg-transparent">
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

        {/* "Hire me" Button on the Right */}
        <div className="absolute right-8">
          <InteractiveHoverButton className="bg-neonGreen hover:bg-black text-sm text-black">
            Hire Me
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
