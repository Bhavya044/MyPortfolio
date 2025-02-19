import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
 


const ResumeSection = () => {
  const resumeLink =
    "https://drive.google.com/file/d/17jgyTh4aPFcHZsYWKzxJS4rQ4phtycD8/preview";
  const downloadLink = "https://drive.google.com/uc?export=download&id=17jgyTh4aPFcHZsYWKzxJS4rQ4phtycD8"; // Replace with actual link

  return (
    <div className="min-h-screen flex flex-col  items-center px-6 lg:px-16 w-full">
  <div className="flex md:flex-row xs:flex-col justify-between w-full">
      <h1 className="text-4xl lg:text-5xl font-bold tracking-wide text-neonGreen mb-8 text-center">
        $ My Resume
      </h1>
      <AnimatedSubscribeButton className="w-36 bg-black">
      <span onClick={()=> window.open(downloadLink, "_blank")} className="group inline-flex items-center">
        Download
        <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <span className="group inline-flex items-center">
        <CheckIcon className="mr-2 size-4" />
        Downloaded
      </span>
    </AnimatedSubscribeButton>
          </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center gap-6"
      >
          

        <div className="relative w-full max-w-4xl h-[80vh] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          {/* Download Button (Top-Right) */}
       
          {/* Resume Iframe */}
          <iframe
            src={resumeLink}
            className="w-full h-full"
            allowFullScreen
            title="Bhavya's Resume"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default ResumeSection;
