// components/HireMeDialog.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Dialog from "../ui/Dialog";

const HireMeDialog:React.FC<{isOpen:boolean,setIsOpen: (val: boolean) => void}> = ({isOpen,setIsOpen}) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="text-center">
  

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-700 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6">Let's Work Together 🚀</h2>
          {submitted ? (
            <p className="text-green-500 text-lg">✅ Thank you! I will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-green-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-green-400"
              />
              <Button
                type="submit"
                className="w-full bg-neonGreen hover:bg-black text-black hover:text-neonGreen flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> {submitted ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </motion.div>
      </Dialog>
    </div>
  );
};

export default HireMeDialog;
