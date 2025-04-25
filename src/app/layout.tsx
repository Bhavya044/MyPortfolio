import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code as FontCode } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import { Particles } from "@/components/magicui/particles";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingSocialCard from "@/components/ui/FloatingSocialCard";

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: "%s | Bhavya Suri – Full-Stack React & Next.js Developer",
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "./Portfolio.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen relative bg-black text-green-400 font-sans antialiased flex justify-center items-center p-4 md:p-8",
          fontCode.variable
        )}
      >
        {/* 🌟 Particles Background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <Analytics />
        <SpeedInsights />
        <FloatingSocialCard />

        {/* ✨ Custom Cursor (hidden on mobile) */}
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={12}
            outerSize={35}
            color="255, 20, 147" // 💖 Pink color
            outerAlpha={0.5}
            innerScale={1.2}
            outerScale={1.5}
            showSystemCursor={false} // 🚀 Hide the default system cursor
          />
        </div>

        {/* 💻 Terminal Styled Container */}
        <div className="w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl rounded-lg border border-gray-700 shadow-[0_0_5px_#0ff,0_0_10px_#0ff] bg-gray-900 font-mono transition-all duration-300">
          {/* 🖥️ Terminal Header */}
          <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          {/* 🌐 Navbar & Dynamic Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <Navbar />
            <div className="border-t border-gray-700 mt-4 pt-6">{children}</div>
          </div>

          {/* 📜 Small Footer */}
          <footer className="text-center text-gray-500 text-xs py-2 border-t border-gray-700">
            © {new Date().getFullYear()} {DATA.name}.
          </footer>
        </div>
      </body>
    </html>
  );
}
