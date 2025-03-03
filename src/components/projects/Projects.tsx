"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Pokémon Explorer",
    description:
      "A FullStack stack web app that allows users to explore Pokémon data fetched from the PokeAPI. Features include search, pagination, and a Pokémon-themed UI using Tailwind CSS. Optimized for performance and usability.",
    techStack: ["TypeScript", "TailwindCSS", "Nextdotjs"],
    image: "/pokeexplore.png",
    video: "",
    link: "https://github.com/Bhavya044/pokemon-explore",
  },
  {
    title: "AI Recipe Generator",
    description:
      "An AI-powered web application that suggests personalized recipes based on the ingredients you have on hand. It uses machine learning models to simplify meal planning and make cooking more enjoyable with real-time, tailored recipe suggestions.",
    techStack: ["react", "nodedotjs", "Vercel"],
    image: "", // No image provided to show avatar
    video: "/recipe-gen.webm",
    link: "https://github.com/Bhavya044/Ai-Recipe-Gen",
  },
  {
    title: "Developer Portfolio",
    description:
      "A terminal-themed developer portfolio with Magic UI animations, orbiting skill icons, and seamless integration with Google Drive for resume hosting.",
    techStack: ["React", "Next.js", "Tailwindcss"],
    image:
      "https://www.shutterstock.com/image-vector/coding-programming-software-creating-symbol-260nw-1844920264.jpg",
    video: "",
    link: "https://github.com/Bhavya044/MyPortfolio",
  },
  {
    title: "Travel Gemini",
    description:
      "A React Native itinerary planner app integrated with Gemini AI for personalized travel recommendations, smart scheduling, and real-time updates, offering a seamless travel planning experience.",
    techStack: ["android", "Node.js"],
    image: "/travel.webp",
    link: "https://github.com/Bhavya044/travelGemini",
  },
  {
    title: "React Widget Application",
    description:
      "An interactive forecasting application displaying weather conditions, temperature, sunrise, sunset, pressure, humidity, and India's latest news. Features include real-time data fetching, responsive design, and autocomplete for country selection with robust error handling for improved user experience.",
    techStack: ["React", "Axios"],
    image: "", // No image provided to show avatar
    video: "",
    link: "https://github.com/Bhavya044/Widget-app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-3 px-4 md:px-24 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl mb-10 sm:text-4xl text-neonGreen"
      >
        $ projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl"
          >
            <InteractiveGridPattern
              className={cn(
                "absolute inset-0 z-20 opacity-20 rounded-3xl pointer-events-none",
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] border-gray-200 border h-[200%] skew-y-12"
              )}
            />
            <motion.div
              whileHover={{ scale: 1.06, y: -12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-md"
            >
              <Card className="group backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden hover:shadow-lg">
                <div className="relative overflow-hidden flex items-center justify-center bg-gray-800 h-48">
                  {project.video ? (
                    <video
                      src={project.video}
                      controls
                      className="object-cover w-full h-46"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-46 transform transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-4xl font-semibold text-white bg-gradient-to-br from-gray-700 to-gray-900">
                      {project.title
                        .split(" ")
                        .slice(0, 3)
                        .map((word) => word.charAt(0))
                        .join("")
                        .toUpperCase()}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardContent className="p-6">
                  <h2 className="text-2xl mb-3 group-hover:text-neonGreen/90 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-base mb-5 leading-relaxed line-clamp-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full shadow-[0_0_8px_rgba(0,255,128,0.3)] hover:shadow-[0_0_15px_rgba(0,255,128,0.5)] transition-shadow duration-300"
                      >
                        <Image
                          width={20}
                          height={20}
                          alt={tech}
                          src={`https://cdn.simpleicons.org/${tech}`}
                        />
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-neonGreen hover:text-neonGreen/80 hover:underline underline-offset-4 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  >
                    <FaGithub className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                    <span className="group-hover:underline">
                      View on GitHub
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 relative z-10 bg-gradient-to-br backdrop-blur-xl p-6 rounded-3xl border border-gray-700 shadow-2xl"
      >
        <h2 className="text-xl font-semibold text-neonGreen mb-4">
          &gt; GitHub Contributions
        </h2>
        <GitHubCalendar username="Bhavya044" />
      </motion.div>
    </div>
  );
}
