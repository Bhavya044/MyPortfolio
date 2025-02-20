"use client";
import { useEffect } from "react";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  

  return (
    <div>
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <div className="bg-neonGreen p-2 px-7 h-max w-max rounded-xl shadow-lg">
            <TypingAnimation
              className="text-black text-lg font-semibold"
              startOnView
              delay={5}
              onStart={() => {
                const audio = new Audio("/typing-sound.mp3");
                audio.currentTime = 0;
                audio.play().catch((error) => {
                  console.error("Audio playback failed:", error);
                });
              }}
              onEnd={() => {
                const audio = new Audio("/typing-sound.mp3");
                audio.pause();
                audio.currentTime = 0;
              }}
            >
              Hi there! I am Bhavya! 👋
            </TypingAnimation>
          </div>

          <div className="text-4xl bg-clip-text">A Full Stack Developer</div>

          <div className="text-base leading-relaxed text-gray-300">
            with experience in crafting{" "}
            <span className="text-orange-400">scalable web apps</span> using{" "}
            <span className="text-cyan-400">React / Next</span>,{" "}
            <span className="text-purple-400">TypeScript</span>, and{" "}
            <span className="text-pink-400">Express.js</span>.
            <br />
            In my free time, you will find me{" "}
            <span className="text-yellow-400">exploring the latest tech trends</span>
            ,{" "}
            <span className="text-emerald-400">tinkering with side projects</span>
            , or binge-watching{" "}
            <span className="text-red-400">coding tutorials</span> I’ll probably
            never use. 😄 Let’s build something{" "}
            <span className="text-green-400">awesome together</span>! 🚀✨
          </div>

          <div className="border py-2 border-neonGreen px-6 rounded-2xl w-max mt-3 text-white shadow-lg ">
            ✨ Open to Work ✨
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
