"use client"


import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShimmerButton } from "@/components/magicui/shimmer-button";


import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6"; // Use "fa6" for latest FontAwesome icons

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">


<section id="hero">
  <div className="mx-auto w-full max-w-2xl space-y-8">
    <div className="gap-2 flex justify-between">
      <div className="flex-col flex flex-1 space-y-1.5">
        {/* Name & Greeting */}
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          yOffset={8}
          text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
        />

        {/* Description */}
        <BlurFadeText
          className="max-w-[600px] md:text-xl"
          delay={BLUR_FADE_DELAY}
          text={DATA.description}
        />

        {/* Location Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 1.2}>
          <div className="flex items-center gap-2 text-gray-400 md:text-lg">
            📍 <span>{DATA.location}</span>
           
          </div>
        </BlurFade>

        {/* Links Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
          <div className="flex items-center gap-4 mt-3">
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition"
            >
              <FaGithub size={24} /> Github
            </a>
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaLinkedin size={24} />
              Linkedin
            </a>
            <a
              href={"https://www.geeksforgeeks.org/user/bhavya0381/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaGlobe size={24} />
              Geeks for Geeks
            </a>
          </div>
        </BlurFade>
      </div>

      {/* Avatar */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="size-28 border">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>
    </div>
  </div>
</section>


      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work:any, id:number) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education:any, id:number) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
   
  <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"><InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
        width={20}
        height={10}
        squares={[80, 80]}
        squaresClassName="hover:fill-gray-500"
      /> 
       <section id="skills">
 
 <div className="flex min-h-0 flex-col gap-y-3 p-3">
 <BlurFade delay={BLUR_FADE_DELAY * 9}>
     <h2 className="text-xl font-bold">🚀 Skills</h2>
   </BlurFade>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {DATA.skills.map((skill:any, id:number) => (
        <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
          <div className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-md">
           {skill.logo && <img src={skill.logo} alt={skill.name} className="w-6 h-6" /> } 
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        </BlurFade>
      ))}
    </div>
        
  </div>
</section>
      </div>
    

<section id="certifications">
  
  <div className="flex min-h-0 flex-col gap-y-3 mt-6">
    <BlurFade delay={BLUR_FADE_DELAY * 12}>
      <h2 className="text-xl font-bold text-center">📜 Certifications</h2>
    </BlurFade>
    <div className="flex items-center justify-center">
      {DATA.certifications.map((cert:any, id:number) => (
         <ShineBorder
         key={id}
         color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
       >
        <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
          <div className="relative flex items-center bg-white text-gray-900 p-4 rounded-lg ">
            {/* Certificate Ribbon */}
            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 text-xs font-bold rounded-full">
              🏆 Certified
            </div>

            {/* Certificate Logo */}
            <div className="w-16 h-16  mt-8 flex-shrink-0">
              <img src={cert.logo} alt={cert.title} className="w-full h-full object-contain rounded-md" />
            </div>

            {/* Certificate Details */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.provider}</p>
              <p className="text-xs text-gray-500">{cert.year}</p>
            </div>
          </div>
        </BlurFade>
        </ShineBorder>
      ))}
    </div>
  </div>
</section>


      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project:any, id:number) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
   
      <section id="contact">
  <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 16}>
      <div className="space-y-3">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Contact
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Want to chat? Just shoot me a DM{" "}
          <Link
            href={"https://www.linkedin.com/in/bhavya-suri044/"}
            className="text-blue-500 hover:underline"
          >
            with a direct question on LinkedIn
          </Link>{" "}
          and I&apos;ll reply when I’m not busy debugging life. 🚀 Just good vibes! 
        </p>

        {/* ✅ Download Resume Button */}
        <div className="mt-6 w-full flex justify-center">
        <ShimmerButton
  className="shadow-2xl"
  onClick={() => window.open("https://drive.google.com/uc?export=download&id=17jgyTh4aPFcHZsYWKzxJS4rQ4phtycD8", "_blank")}
>
  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
    📄 Download Resume
  </span>
</ShimmerButton>

        </div>
      </div>
    </BlurFade>
  </div>
</section>

    </main>
  );
}
