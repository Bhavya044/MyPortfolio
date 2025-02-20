"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ResumeSection from "@/components/resume/Resume";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen tab="resume" /> : <ResumeSection />;
};

export default Page;
