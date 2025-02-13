import { Icons } from "@/components/icons";
import { HomeIcon, MailIcon } from "lucide-react";


export const DATA = {
  name: "Bhavya Suri",
  initials: "BS",
  email: "bhavyasuri.bs23@gmail.com",
  tel: "+916283315811",
  summary:`I am a Full Stack Developer who loves building **blazing-fast, scalable applications** with **React, TypeScript, and Node.js**. Whether it's **designing intuitive UIs**, **optimizing APIs**, or **debugging that one stubborn bug at 3 AM**, I thrive on solving **real-world tech challenges**.  When I’m not coding, you’ll probably find me geeking out over **new JavaScript frameworks**, **tinkering with UI animations**, or searching for the **perfect dark mode theme**. 🌙

    Let’s build something awesome together! 🚀`,
  url:"bhavya.com",
  linkedin: "https://linkedin.com/in/bhavya-suri044",
  github: "https://github.com/Bhavya044",
  location: "Mohali, Punjab",
  description:
    "Innovative Full Stack Developer with 2+ years of experience building scalable, high-performance web apps using React, TypeScript, and Node.js. Skilled in pixel-perfect UIs, performance optimization, and WCAG-compliant accessibility.",
  avatarUrl: "./me.jpg",
  skills: [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", logo: "data:image/png;base64,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" },
    { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzlF0cI1C-682U2HcOpqjigAIxmhmEuBmdA&s" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Material UI", logo: "data:image/png;base64,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" },
    { name: "Styled-components", logo: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4" },
    { name: "REST APIs"},
    { name: "Tanstack React Query", logo: "https://avatars.githubusercontent.com/u/7892489?s=200&v=4" },
    { name: "React Hook Form", logo: "data:image/png;base64,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" },
    { name: "Web Accessibility (WCAG)",}
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "bhavyasuri.bs23@gmail.com", icon: MailIcon, label: "Mail me - bhavyasuri.bs23@gmail.com",type:"mail" },
  ],
  contact: {
    email: "bhavyasuri.bs23@gmail.com",
    tel: "+916283315811",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Bhavya044",icon: Icons.github,navbar:true },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/bhavya-suri044",navbar:true ,   icon: Icons.linkedin,},
    },
  },
  work: [
    {
      company: "HSR Technologies",
      location: "Zirakpur",
      logoUrl:"https://media.licdn.com/dms/image/v2/C4E0BAQFfyzJuJyVtUQ/company-logo_200_200/company-logo_200_200/0/1631365066374/hsrtechnologies_logo?e=1747267200&v=beta&t=x3FV0lokLqtB-ydgKOkPcKJdg9Y94XLSAZgPindOXjU",
      title: "Frontend Developer",
      start: "June 2024",
      end: "Nov 2024",
      description: [
        "Reduced page load times by 50% by optimizing reusable UI components using React and TypeScript.",
        "Built a feature-rich dashboard with drag-and-drop functionality, improving user customization.",
        "Ensured WCAG accessibility compliance across pages.",
        "Implemented interactive features like Staking Graph, Infinite Scroll, Hotel Booking, and Real-Time Crypto Conversion.",
      ],
    },
    {
      company: "Care.Fi",
      location: "Gurgaon",
      logoUrl:"https://carefi.in/public/carefi-1.svg",
      title: "Software Development Engineer - Frontend",
      start: "Dec 2022",
      end: "Jan 2024",
      description: [
        "Developed Aaroqya Baazar, a medical e-commerce platform using React.js and GraphQL.",
        "Built a Loan Origination System (LOS) to streamline workflows, reducing processing time by 30%.",
        "Designed interactive dashboards for different teams to enable data-driven decision-making.",
      ],
    },
    {
      company: "Nbyula",
      location: "Bangalore",
      logoUrl:"data:image/jpeg;base64,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",
      title: "Software Application Engineer Apprentice",
      start: "Jul 2022",
      end: "Nov 2022",
      description: [
        "Developed an affiliate marketing service, optimizing user flows and increasing conversions by 15%.",
        "Collaborated with designers to improve UX using modern web technologies like HTML5, CSS3, and JavaScript.",
      ],
    },
  ],
  education: [
    {
      school: "Chitkara University",
      degree: "B.Tech in Computer Science",
      start: "June 2019",
      end: "July 2023",
      location: "Punjab",
      logoUrl:"https://www.chitkara.edu.in/chitkara-university-logo.png",
      href:"https://www.chitkara.edu.in/",
      CGPA: "9.75",
    },
  ],
  certifications: [
    {
      title: "Career Essentials in Generative AI",
      provider: "Microsoft & LinkedIn",
      year: "2025",
      logo:"https://media.licdn.com/dms/image/v2/D4E0DAQFN4goTOlYXPQ/img_200_trans/img_200_trans/0/1718323376077?e=1740067200&v=beta&t=wvCuPLtwZlZxKqdWBYVC-n8ROqTeIm-t2B8Xvodo2qU",
      skills: [
        "Generative AI",
        "Artificial Intelligence",
        "Computer Ethics",
        "AI Search Algorithms",
      ],
    },
  ],
  projects: [
    {
      title: "AI Recipe Gen",
      href: "https://github.com/Bhavya044/Ai-Recipe-Gen",
      dates: "2025",
      active: true,
      links:[{href:"https://github.com/Bhavya044/Ai-Recipe-Gen?tab=readme-ov-file",type:"Source Code",},{href:"https://ai-recipe-gen-user.vercel.app/", type:"Live Site"}],
      image:"./ai.png",
      description:
        "An AI-powered web application that suggests personalized recipes based on the ingredients you have on hand. This app uses machine learning models to generate recipe suggestions, making meal planning and cooking easier and more enjoyable.",
      technologies: ["React", "Node.js", "TypeScript", "Gemini API"],
    },
    {
      title: "Travel Gemini App",
      dates: "2024 - Present",
      active: true,
      image:"https://img.freepik.com/free-vector/travel-logo-template_23-2149705428.jpg",
      description:
        "A React Native app for planning and managing trips with itinerary creation and destination management.",
      technologies: ["React Native", "TypeScript", "GraphQL"],
    },
  
  ],
} as const;
