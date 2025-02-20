"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ExperienceSection from "@/components/experience/Experience";
import CertificationsPage from "@/components/certificates/Certificates";

const Page = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <CertificationsPage />;
};

export default Page;
