"use client";

import React, { useEffect, useState } from "react";
import AboutPage from "@/components/about/About";
import LoadingScreen from "@/components/ui/LoadingScreen";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <AboutPage />;
};

export default Page;
