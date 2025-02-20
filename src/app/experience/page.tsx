"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ExperienceSection from "@/components/experience/Experience";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen tab="experience" /> : <ExperienceSection />;
};

export default Page;
