"use client";
import { Github, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function FloatingSocialCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bhavyasuri.bs23@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-neonPink border border-gray-700 rounded-2xl shadow-lg p-2 backdrop-blur-md transition-transform transform hover:scale-105 duration-300">
        <CardContent className="flex gap-3 justify-center items-center">
          <div className="relative group">
            <Link
              href="https://github.com/bhavya044"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-800 hover:text-white transition-colors duration-300" />
            </Link>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </div>

          <div className="relative group">
            <Link
              href="https://linkedin.com/in/bhavya-suri044"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-800 hover:text-white transition-colors duration-300" />
            </Link>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </div>
          <div onClick={handleCopyEmail} className="relative group">
            <MailIcon className="w-6 h-6 text-gray-800 hover:text-white transition-colors duration-300" />
            <span className="absolute w-32 bottom-full mb-2 left-1 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
