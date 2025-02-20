// components/LoadingScreen.tsx
"use client";

import {
  AnimatedSpan,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { Fira_Code as FontCode } from "next/font/google";

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "600"],
});

type LoadingScreenProps = {
  tab: "home" | "about" | "experience" | "certifications" | "projects" | "resume";
};

// Dynamic loading messages based on tab
const tabMessages: Record<string, string[]> = {
  home: [
    "✔ Booting up creativity engine... 🎨",
    "✔ Setting up the landing page vibes... 🎧",
    "✔ Optimizing intro animations... ✨",
    "✔ Finalizing welcome messages... 🌟",
  ],
  about: [
    "✔ Gathering interesting facts... 💡",
    "✔ Assembling skill orbit animations... 🪐",
    "✔ Highlighting career journey... 📜",
    "✔ Loading personality quirks... 😄",
  ],
  experience: [
    "✔ Fetching work experiences... 🏢",
    "✔ Optimizing professional milestones... 🏆",
    "✔ Highlighting growth stories... 🌱",
    "✔ Adding impactful achievements... 💪",
  ],
  certifications: [
    "✔ Verifying certifications... 📜",
    "✔ Polishing achievements... 🏅",
    "✔ Unlocking new skill levels... 🎯",
    "✔ Displaying learning journeys... 📚",
  ],
  projects: [
    "✔ Loading awesome code snippets... 💻",
    "✔ Deploying cool side projects... 🌟",
    "✔ Injecting React ⚛️ and TypeScript 📝 magic... ✨",
    "✔ Compiling dreams into code... 🌌",
  ],
  resume: [
    "✔ Fetching resume from Google Drive... 📄",
    "✔ Optimizing skills showcase... 🛠️",
    "✔ Aligning work history... 📝",
    "✔ Formatting experiences... 🎨",
  ],
};

export default function LoadingScreen({ tab }: LoadingScreenProps) {
  return (
    <div className="md:mx-20 mx-6 text-xl">
      <TypingAnimation>{`> Initializing ${tab} tab 🚀`}</TypingAnimation>

      {/* Dynamic sentences based on tab */}
      {tabMessages[tab]?.map((message, index) => (
        <AnimatedSpan
          key={index}
          delay={1500 + index * 400}
          className="text-green-500"
        >
          {message}
        </AnimatedSpan>
      ))}

      {/* Final universal success message */}
      <TypingAnimation delay={1500 + tabMessages[tab].length * 1000} className="text-yellow-400">
        {`🎉 Success! ${tab.charAt(0).toUpperCase() + tab.slice(1)} tab fully operational and looking sharp. 💯`}
      </TypingAnimation>

      <TypingAnimation
        delay={2000 + tabMessages[tab].length * 1000}
        className="text-pink-400"
      >
        {"🚀 Let’s build something awesome together! ✨"}
      </TypingAnimation>
    </div>
  );
}
