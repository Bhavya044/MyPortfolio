"use client";

import React, { useEffect, useState } from "react";
import AboutPage from "@/components/about/About";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Home from "@/components/home/Home";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),3000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <Home />;
};

export default Page;
