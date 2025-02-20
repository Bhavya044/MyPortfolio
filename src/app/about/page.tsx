"use client";

import React, { useEffect, useState } from "react";
import AboutPage from "@/components/about/About";
import LoadingScreen from "@/components/ui/LoadingScreen";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen tab="about"/> : <AboutPage />;
};

export default Page;
