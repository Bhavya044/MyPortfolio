"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "HSR Technologies",
    duration: "Jun 2024 - Nov 2024",
    logo: "data:image/png;base64,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",
    description: [
      "Reduced page load times by 50% by optimizing reusable UI components using React and TypeScript,ensuring consistency, improving performance, and enhancing overall user satisfaction.",
      " Built a feature-rich dashboard with drag-and-drop functionality, enhancing user customization and operational efficiency.",
      "Ensured WCAG accessibility compliance across pages, enhancing usability for users with disabilities.",
      "Implemented interactive features (e.g., Staking Graph, Infinite Scroll, Hotel Booking, Real-Time CryptoConversion, Affiliate Rewards Tracker) to boost user engagement by 20%.",
    ],
  },
  {
    role: "Software Development Engineer - Frontend",
    company: "Care.Fi",
    duration: "Dec 2022 - Jan 2024",
    logo: "data:image/jpeg;base64,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",
    description: [
      "Spearheaded the development of Aaroqya Baazar, a medical procurement-as-a-service platform using React.js and GraphQL, driving a 20% increase in user engagement.",
      "Streamlined workflows with a Loan Origination System (LOS), reducing processing time by 30% and improving operational efficiency.",
      "Collaborated with product managers and UI engineers to translate business requirements into customercentric front-end solutions.",
      "Designed interactive dashboards for cross-functional teams (Super Admin, sales, credit, and operations),enabling data-driven decision-making",
    ],
  },
  {
    role: "Software Application Engineer Apprentice",
    company: "Nbyula",
    duration: "July 2022 - Nov 2022",
    logo: "data:image/jpeg;base64,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",
    description: [
      " Led the creation of an affiliate marketing service, implementing user click tracking and optimizing userflows to increase conversions by 15%.",
      " Collaborated with designers to deliver an intuitive and engaging user experience, leveraging modern webtechnologies like HTML5, CSS3, and JavaScript",
    ],
  },
];

export default function ExperienceSection() {
    return (
        <div className="text-white min-h-screen py-4 px-4 sm:px-6 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-neonGreen">
            $ experience
          </h2>
          <div className="relative border-l-2 border-green-400 ml-2 sm:ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-8 sm:mb-10 ml-6 sm:ml-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-transparent rounded-full -left-3 sm:-left-4 flex items-center justify-center shadow-lg">
                  <Image
                    src={exp.logo}
                    width={200}
                    height={80}
                    className="rounded-full border-4 z-50 border-gray-800"
                    alt="Company Logo"
                  />
                </div>
                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neonGreen">
                    {exp.role}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-400">{exp.company}</p>
                  <p className="text-sm sm:text-base text-gray-500 italic">{exp.duration}</p>
                  {exp.description?.map((desc, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed text-gray-300"
                    >
                      🚀 {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
      
}
