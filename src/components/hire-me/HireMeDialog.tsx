// components/HireMeDialog.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Dialog from "../ui/Dialog";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

// 🔥 Validation schema using zod
const formSchema = z.object({
  name: z.string().min(3, "⚡ Name must be at least 3 characters."),
  email: z.string().email("📩 Invalid email address."),
  message: z.string().min(10, "💬 Message must be at least 10 characters."),
});

const HireMeDialog: React.FC<{ isOpen: boolean; setIsOpen: (val: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // ⚡ Handle input change & validate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const result = formSchema.safeParse({ ...formData, [name]: value });
    if (!result.success) {
      const fieldError = result.error.formErrors.fieldErrors[name as keyof typeof result.error.formErrors.fieldErrors];
      setErrors((prev) => ({ ...prev, [name]: fieldError ? fieldError[0] : "" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    
  };

  // ✉️ Handle form submission with validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: any = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message;
      });
      setErrors(newErrors);
      toast.error("🚫 Fix the highlighted errors.");
      return;
    }

    setSubmitted(true);
    const loadingToast = toast.loading("🚀 Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setTimeout(() => {
          setIsOpen(false);
          setFormData({ name: "", email: "", message: "" });
          setSubmitted(false);
        }, 2000);
      } else {
        toast.error("❌ Failed to send. Please try again.");
        setSubmitted(false);
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.dismiss(loadingToast);
      toast.error("⚡ An error occurred. Please try again later.");
      setSubmitted(false);
    }
  };

  return (
    <div className="text-center z-50">
      <Toaster position="top-right" reverseOrder={false} />
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-700 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6">Let&apos;s Work Together 🚀</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } text-green-400 focus:outline-none`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } text-green-400 focus:outline-none`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full p-3 rounded-lg bg-gray-800 border ${
                  errors.message ? "border-red-500" : "border-gray-700"
                } text-green-400 focus:outline-none`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <Button
              type="submit"
              disabled={submitted}
              className="w-full bg-neonGreen hover:bg-black text-black hover:text-neonGreen flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> {submitted ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </Dialog>
    </div>
  );
};

export default HireMeDialog;
