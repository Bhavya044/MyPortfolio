"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutPage() {
  const skills = [
    "react", "nextdotjs", "typescript", "javascript", "java",
    "html5", "css3", "nodedotjs", "express", "tailwindcss",
    "mongodb", "docker", "vercel", "git", "jira",
    "bitbucket", "github", "gitlab", "visualstudiocode",
    "zustand", "graphql", "mysql",  "aws",
   "storybook",
    "restapi", "eslint",
    "prettier", "postman","wcag"
  ];

  const frontendSkills = ["React.js", "Next.js", "TypeScript", "JavaScript","WCAG", "HTML5", "CSS3", "Tailwind CSS", "Redux", "GraphQL", "Storybook"];
  const backendSkills = ["Node.js", "Express", "REST API","Java"];
  const databaseSkills = ["MongoDB", "MySQL",];
  const toolsSkills = ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Visual Studio Code", "Postman", "Figma", "ESLint", "Prettier", ];

  const images = skills.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <div className=" min-h-screen py-2 px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-4xl font-bold tracking-wide text-neonGreen">
            $ about-me
          </h1>
          <p className="leading-relaxed text-base">
            <span className="text-yellow-400">&gt; Hi, I am</span> <span className="text-cyan-400">Bhavya</span> <br />
            <span className="text-white">&gt; Full Stack Developer with 2+ years of experience. </span>   <br/>
            <span className="text-white"> &gt; Passionate about building scalable and accessible web applications.</span><br />
            <span className="text-white">&gt; I craft intuitive solutions using modern technologies.</span><br />
            <span className="text-white">&gt; Constantly exploring the latest tech trends.</span>
          </p>
          <p className="leading-relaxed text-lg">
            <span className="text-yellow-400">&gt; Expertise:</span><br />
            <span className="text-red-400">&gt; - Frontend Development: <br/></span> {frontendSkills.join(", ")}<br />
            <span className="text-purple-400">&gt; - Backend Development: <br/></span> {backendSkills.join(", ")}<br />
            <span className="text-indigo-400">&gt; - Databases: <br/></span> {databaseSkills.join(", ")}<br />
            <span className="text-pink-400">&gt; - Tools & Testing: <br/></span> {toolsSkills.join(", ")}<br />
            <span className="text-white">&gt; Always learning. Always innovating.</span>
          </p>
  

        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
             
      <div className="flex flex-wrap gap-6 text-xl mt-6">
  <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
    <InteractiveHoverButton className="bg-transparent hover:bg-green-500/20 p-3 px-5 rounded-full">
      <FaGithub />
    </InteractiveHoverButton>
  </Link>
  <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
    <InteractiveHoverButton className="bg-transparent hover:bg-blue-500/20 p-3 px-5 rounded-full">
      <FaLinkedin />
    </InteractiveHoverButton>
  </Link>
 
  <Link href="https://auth.geeksforgeeks.org/user/yourusername" target="_blank" aria-label="GeeksforGeeks">
    <InteractiveHoverButton className="bg-transparent hover:bg-green-600/20 p-3 px-5 rounded-full text-green-400 font-semibold">
      <Icons.gfg/>
    </InteractiveHoverButton>
  </Link>
  <Link href="https://leetcode.com/yourusername" target="_blank" aria-label="LeetCode">
    <InteractiveHoverButton className="bg-transparent hover:bg-yellow-500/20 p-3 px-5 rounded-full text-yellow-400 font-semibold">
   <SiLeetcode/>
    </InteractiveHoverButton>
  </Link>
  
</div>
    </div>
  );
}


const Icons={
  "gfg":()=><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
  <path fill="#43a047" d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"></path>
  </svg>,
  "leetcode":()=><svg fill="#c3af32" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#c3af32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg>
}