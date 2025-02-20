"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    "react",
    "nextdotjs",
    "typescript",
    "javascript",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "tailwindcss",
    "mongodb",
    "docker",
    "vercel",
    "git",
    "jira",
    "bitbucket",
    "github",
    "gitlab",
    "graphql",
    "redux",
    "mysql",
    "amazonwebservices",
    "storybook",
    "eslint",
    "prettier",
    "postman",
  ];
  const frontendSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "WCAG",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "GraphQL",
    "Storybook",
  ];
  const backendSkills = ["Node.js", "Express", "REST API", "Java"];
  const databaseSkills = ["MongoDB", "MySQL"];
  const toolsSkills = [
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Visual Studio Code",
    "Postman",
    "Figma",
    "ESLint",
    "Prettier",
  ];

  const images = skills.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="min-h-screen py-2 px-4 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-4xl font-bold tracking-wide text-neonGreen">
            $ about-me
          </h1>
          <p className="leading-relaxed text-base">
            <span className="text-yellow-400">&gt; Hi, I am</span>{" "}
            <span className="text-cyan-400">Bhavya</span> <br />
            <span className="text-white">
              &gt; Full Stack Developer with 2+ years of experience.
            </span>{" "}
            <br />
            <span className="text-white">
              &gt; Passionate about building scalable and accessible web
              applications.
            </span>
            <br />
            <span className="text-white">
              &gt; I craft intuitive solutions using modern technologies.
            </span>
            <br />
            <span className="text-white">
              &gt; Constantly exploring the latest tech trends.
            </span>
            <br />
            <span className="text-white">
              &gt; 📧 Email:{" "}
              <a
                href="mailto:bhavyasuri.bs23@gmail.com"
                className="text-neonGreen hover:underline"
              >
                bhavyasuri.bs23@gmail.com
              </a>
            </span>
            <br />
            <span className="text-white">
              &gt; 📞 Phone:{" "}
              <a
                href="tel:+916283315811"
                className="text-neonGreen hover:underline"
              >
                +91 6283315811
              </a>
            </span>
          </p>
          <p className="leading-relaxed text-lg">
            <span className="text-yellow-400">&gt; Expertise:</span>
            <br />
            <span className="text-red-400">
              &gt; - Frontend Development: <br />
            </span>{" "}
            {frontendSkills.join(", ")}
            <br />
            <span className="text-purple-400">
              &gt; - Backend Development: <br />
            </span>{" "}
            {backendSkills.join(", ")}
            <br />
            <span className="text-indigo-400">
              &gt; - Databases: <br />
            </span>{" "}
            {databaseSkills.join(", ")}
            <br />
            <span className="text-pink-400">
              &gt; - Tools & Testing: <br />
            </span>{" "}
            {toolsSkills.join(", ")}
            <br />
            <span className="text-white">
              &gt; Always learning. Always innovating.
            </span>
          </p>
        </div>

        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
              {images?.slice(0, 10).map((image, ind) => (
                <Image
                  key={ind}
                  src={image}
                  alt={image}
                  width={50}
                  height={50}
                />
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
              {images?.slice(10, 20).map((image, ind) => (
                <Image
                  key={ind}
                  src={image}
                  alt={image}
                  width={40}
                  height={40}
                />
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={20} radius={40}  speed={2}>
              {images?.slice(20, skills.length).map((image, ind) => (
                <Image
                  key={ind}
                  src={image}
                  alt={image}
                  width={40}
                  height={40}
                />
              ))}
            </OrbitingCircles>
          </div>
      </div>

      <div className="flex flex-wrap gap-6 text-xl mt-6 justify-center mt-3">
  <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
    <div className="group flex items-center gap-3 p-4 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg hover:shadow-neonGreen transition-all duration-300 hover:scale-105">
      <FaGithub className="text-white group-hover:text-neonGreen transition-all duration-300" size={24} />
      <span className="text-white group-hover:text-neonGreen hidden sm:block">GitHub</span>
    </div>
  </Link>
  <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
    <div className="group flex items-center gap-3 p-4 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg hover:shadow-blue-500 transition-all duration-300 hover:scale-105">
      <FaLinkedin className="text-white group-hover:text-blue-500 transition-all duration-300" size={24} />
      <span className="text-white group-hover:text-blue-500 hidden sm:block">LinkedIn</span>
    </div>
  </Link>
  <Link href="https://auth.geeksforgeeks.org/user/yourusername" target="_blank" aria-label="GeeksforGeeks">
    <div className="group flex items-center gap-3 p-4 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg hover:shadow-green-500 transition-all duration-300 hover:scale-105">
      <Icons.gfg />
      <span className="text-white group-hover:text-green-500 hidden sm:block">GeeksforGeeks</span>
    </div>
  </Link>
  <Link href="https://leetcode.com/yourusername" target="_blank" aria-label="LeetCode">
    <div className="group flex items-center gap-3 p-4 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg hover:shadow-yellow-500 transition-all duration-300 hover:scale-105">
      <SiLeetcode className="text-white group-hover:text-yellow-500 transition-all duration-300" size={24} />
      <span className="text-white group-hover:text-yellow-500 hidden sm:block">LeetCode</span>
    </div>
  </Link>
</div>

    </div>
  );
}

const Icons = {
  gfg: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#43a047"
        d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954C41.091,29.473,41.109,31.417,41,32z"
      ></path>
    </svg>
  ),
};
