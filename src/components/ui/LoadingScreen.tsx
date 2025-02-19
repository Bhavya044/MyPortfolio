// components/LoadingScreen.tsx
"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import AnimatedCursor from "react-animated-cursor";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import { Fira_Code as FontCode } from "next/font/google";

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "600"],
});

export default function LoadingScreen() {
  return (
  
     <div className="mx-20 text-xl">
            <TypingAnimation>&gt; Initializing Bhavya&apos;s Portfolio 🚀</TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
              <span>✔ Booting up creativity engine... 🎨</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-green-500">
              <span>✔ Loading awesome code snippets... 💻</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2500} className="text-green-500">
              <span>✔ Optimizing caffeine levels... ☕</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-green-500">
              <span>✔ Debugging life decisions... 🤔</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-green-500">
              <span>✔ Fetching next big idea... 💡</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-green-500">
              <span>✔ Compiling dreams into code... 🌌</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-green-500">
              <span>✔ Assembling full-stack awesomeness... 🛠️</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-green-500">
              <span>✔ Injecting React ⚛️ and TypeScript 📝 magic... ✨</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5500} className="text-green-500">
              <span>✔ Deploying cool side projects... 🌟</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6000} className="text-blue-500">
              <span>ℹ Adding final touches... ✍️</span>
              <span className="pl-2">- Perfecting animations 💫</span>
            </AnimatedSpan>

            <TypingAnimation delay={6500} className="text-yellow-400">
              🎉 Success! Portfolio fully operational and looking sharp. 💯
            </TypingAnimation>

            <TypingAnimation delay={7000} className="text-pink-400">
              🚀 Let’s build something awesome together! ✨
            </TypingAnimation>
        </div>

  );
}
