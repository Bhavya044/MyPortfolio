import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const ResumeSection = () => {
  const resumeLink =
    "https://drive.google.com/file/d/17jgyTh4aPFcHZsYWKzxJS4rQ4phtycD8/preview";
  const downloadLink = "https://drive.google.com/uc?export=download&id=17jgyTh4aPFcHZsYWKzxJS4rQ4phtycD8";

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-16 w-full py-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-neonGreen text-center md:text-left">
          $ my Resume
        </h1>
        <AnimatedSubscribeButton className="w-full md:w-36 bg-black">
          <span onClick={() => window.open(downloadLink, "_blank")} className="group inline-flex items-center">
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
        <div className="relative w-full max-w-4xl h-[60vh] md:h-[80vh] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
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