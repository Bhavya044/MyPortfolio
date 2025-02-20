"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ExperienceSection from "@/components/experience/Experience";
import CertificationsPage from "@/components/certificates/Certificates";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen tab="certifications"/> : <CertificationsPage />;
};

export default Page;
