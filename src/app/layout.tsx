import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code as FontCode } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import { Particles } from "@/components/magicui/particles";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import Navbar from "@/components/navbar";

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  icons: {
    icon: "./indexImage.ico",
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
        <Analytics/>

        {/* ✨ Custom Cursor (hidden on mobile) */}
        <div className="hidden md:block">
          <AnimatedCursor innerSize={15} outerSize={10} color="168, 30, 88" />
        </div>

        {/* 💻 Terminal Styled Container */}
        <div className="w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl rounded-lg border border-gray-700 shadow-2xl bg-gray-900 font-mono transition-all duration-300">
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
