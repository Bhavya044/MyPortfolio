import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    description: { text: string; color: string }[];
    link: string;
  }

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "February 3, 2025",
    link: "https://drive.google.com/file/d/1YBQW4dl9OQTHXfCJuo8z1shMzAENboNm/view?usp=sharing",
    description: [
      { text: "Bhavya Suri completed the ", color: "text-gray-400" },
      { text: "Career Essentials in Generative AI", color: "text-red-400" },
      { text: " learning path, covering top skills such as ", color: "text-gray-400" },
      { text: "Computer Ethics", color: "text-purple-400" },
      { text: " and ", color: "text-gray-400" },
      { text: "Artificial Intelligence (AI)", color: "text-green-400" },
      { text: ". Duration: ", color: "text-gray-400" },
      { text: "5 hours 43 minutes", color: "text-blue-400" },
      { text: ".", color: "text-gray-400" },
    ],
  },
  {
    title: "Introduction to Web Development",
    issuer: "University of California, Davis (Coursera)",
    date: "April 25, 2020",
    link: "https://drive.google.com/file/d/18P7DlHFg7U6uRn2l00X7pufwgiaRAw1k/view?usp=sharing",
    description: [
      { text: "Bhavya has successfully completed ", color: "text-gray-400" },
      { text: "Introduction to Web Development", color: "text-blue-400" },
      { text: ", an online non-credit course authorized by ", color: "text-gray-400" },
      { text: "University of California, Davis", color: "text-green-400" },
      { text: " and offered through ", color: "text-gray-400" },
      { text: "Coursera", color: "text-yellow-400" },
      { text: ".", color: "text-gray-400" },
    ],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "January 30, 2021",
    link: "https://drive.google.com/file/d/1nDfaOhsYE5P2bGwWVhcfLJSyLZ52hluq/view?usp=sharing",
    description: [
      { text: "Completed ", color: "text-gray-400" },
      { text: "Cisco's Introduction to Cybersecurity", color: "text-red-400" },
      { text: ", covering essential topics in ", color: "text-gray-400" },
      { text: "cybersecurity", color: "text-purple-400" },
      { text: ".", color: "text-gray-400" },
    ],
  },
  {
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "August 15, 2021",
    link: "https://drive.google.com/file/d/1uwX6mtw06nsk_7KKoO2iBxyYQPunH35R/view?usp=sharing",
    description: [
      { text: "Bhavya Suri completed ", color: "text-gray-400" },
      { text: "SQL Essential Training", color: "text-yellow-400" },
      { text: " with a total duration of ", color: "text-gray-400" },
      { text: "3 hours", color: "text-blue-400" },
      { text: ". This course enhanced skills in database management.", color: "text-gray-400" },
    ],
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    issuer: "Amazon Web Services (Coursera)",
    date: "October 17, 2020",
    link: "https://drive.google.com/file/d/1YNVoeiyqVxBWKiE4SQH_XBe6S9kUu6mE/view?usp=sharing",
    description: [
      { text: "Bhavya has successfully completed ", color: "text-gray-400" },
      { text: "AWS Fundamentals: Going Cloud-Native", color: "text-green-400" },
      { text: ", an online non-credit course authorized by ", color: "text-gray-400" },
      { text: "Amazon Web Services", color: "text-yellow-400" },
      { text: " and offered through ", color: "text-gray-400" },
      { text: "Coursera", color: "text-blue-400" },
      { text: ".", color: "text-gray-400" },
    ],
  },
];

const CertificateCard: React.FC<CertificateCardProps> = ({ title, issuer, date, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 sm:p-10 text-green-400 max-w-4xl w-full shadow-lg hover:shadow-2xl transition-shadow duration-500"
  >
    <div className="absolute top-3 right-4 text-gray-500 opacity-80">
      <FaAward size={36} />
    </div>
    <div className="text-lg sm:text-xl bg-clip-text text-center mb-2 border-b border-gray-500">
      {title}
    </div>
    <p className="text-pretty text-base sm:text-lg text-center mb-2">
      Issued by <span className="font-semibold text-white">{issuer}</span>
    </p>
    <p className="italic text-sm sm:text-base text-center mb-6 leading-relaxed">
      {description.map((part, idx) => (
        <span key={idx} className={part.color}>
          {part.text}
        </span>
      ))}
    </p>
    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-700 pt-4 gap-2 sm:gap-0">
      <p>
        Date: <span className="font-semibold text-neonGreen">{date}</span>
      </p>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-green-300 transition-colors"
      >
        <FaExternalLinkAlt size={18} />
        <span className="underline">View Certificate</span>
      </motion.a>
    </div>
  </motion.div>
);

const CertificationsPage = () => (
  <div className="min-h-screen py-4 sm:py-8 px-4 sm:px-8 lg:px-16 xl:px-24 flex flex-col gap-10">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl sm:text-4xl text-neonGreen"
    >
      $ certifications
    </motion.h2>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-2  gap-8 sm:gap-10 w-full justify-items-center"
    >
      {certifications.map((cert, index) => (
        <CertificateCard
          key={index}
          title={cert.title}
          issuer={cert.issuer}
          date={cert.date}
          description={cert.description}
          link={cert.link}
        />
      ))}
    </motion.div>
  </div>
);

export default CertificationsPage;
