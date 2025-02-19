import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code as FontCode } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";

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
          "min-h-screen bg-gray-900 text-green-400 font-sans antialiased flex justify-center items-center p-8",
          fontCode.variable
        )}
      >
        <AnimatedCursor innerSize={8} outerSize={10} color="168, 30, 88" />

        <div className="w-full max-w-6xl rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          {/* Navbar and Content */}
          <div className="p-4">
            <Navbar />
            <div className="border-t border-gray-700 mt-4 pt-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
