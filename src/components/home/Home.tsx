"use client";
import { useEffect } from "react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-6 justify-between mt-4">
        <div className="flex flex-col gap-6">
          <div className="bg-neonGreen p-2 px-7 h-max w-max rounded-xl shadow-lg">
            <TypingAnimation
              className="text-black text-lg font-semibold"
              startOnView
              delay={5}
            >
              Hi there! I am Bhavya! 👋
            </TypingAnimation>
          </div>

          <div className="text-4xl bg-clip-text">Senior Full-Stack Developer</div>

          <div className="text-base leading-relaxed text-gray-300">
            with strong experience building{" "}
            <span className="text-orange-400">scalable SaaS platforms</span>,{" "}
            <span className="text-cyan-400">marketplaces</span>, and{" "}
            <span className="text-purple-400">real-time systems</span>.
            <br />
            Proven ownership of <span className="text-pink-400">end-to-end architecture</span> including frontend, backend, databases, payments, and VPS deployments.
            <br />
            Uses <span className="text-yellow-400">AI-driven development workflows</span> to accelerate delivery and maintain{" "}
            <span className="text-emerald-400">production-grade code quality</span>.
            <br />
            Let's build something{" "}
            <span className="text-green-400">awesome together</span>! 🚀✨
          </div>
          {/* Open to Work Strip */}
          <div
            className="w-full rounded-sm  border-neonGreen  font-bold text-center py-1 bg-black uppercase tracking-widest 
                    border-t border-b shadow-md animate-pulse"
          >
            🚀 Open to Work – Available for Opportunities! 🚀
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/MyImage.png"
            width={250}
            height={100}
            className="rounded-full border-4 z-40 border-gray-800"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
