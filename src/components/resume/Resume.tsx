import React from "react";
import { motion } from "framer-motion";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const ResumeSection = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1NpF9ji5cZEWxkN38htEqmipdIkFmd5KO/preview";
  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1NpF9ji5cZEWxkN38htEqmipdIkFmd5KO";

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-16 w-full py-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-4 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl text-neonGreen"
        >
          $ my resume
        </motion.h2>
        <AnimatedSubscribeButton className="w-full md:w-36 bg-black">
          <span
            onClick={() => window.open(downloadLink, "_blank")}
            className="group inline-flex items-center"
          >
            Download
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            Downloaded
          </span>
        </AnimatedSubscribeButton>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-6"
      >
        <div className="relative w-full max-w-4xl h-[60vh] md:h-[100vh] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={resumeLink}
            className="w-full h-full"
            allowFullScreen
            title="Bhavya's Resume"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeSection;
