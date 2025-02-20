"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Projects from "@/components/projects/Projects";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen tab="projects" /> : <Projects />;
};

export default Page;
