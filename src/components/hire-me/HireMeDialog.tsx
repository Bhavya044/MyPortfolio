'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaPaperPlane } from 'react-icons/fa'
import { z } from 'zod'
import Dialog from '../ui/Dialog'

// 🔥 Validation schema using zod
type FormData = z.infer<typeof formSchema>

const formSchema = z.object({
  name: z.string().min(3, '⚡ Name must be at least 3 characters.'),
  email: z.string().email('📩 Invalid email address.'),
  message: z.string().min(6, '💬 Message must be at least 10 characters.'),
})

const HireMeDialog: React.FC<{
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  // ⚡ Handle input change & validate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value } as FormData
    setFormData(updatedFormData)

    const result = formSchema.safeParse(updatedFormData)
    setErrors((prev) => ({
      ...prev,
      [name]: result.success
        ? ''
        : result.error.formErrors.fieldErrors[name as keyof FormData]?.[0] || '',
    }))
  }

  // ✉️ Handle form submission with validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = formSchema.safeParse(formData)

    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {}
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0] as keyof FormData] = issue.message
      })
      setErrors(newErrors)
      toast.error('🚫 Fix the highlighted errors.')
      return
    }

    setSubmitted(true)
    const loadingToast = toast.loading('🚀 Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      toast.dismiss(loadingToast)

      if (data.success) {
        toast.success('✅ Message sent successfully!')
        setTimeout(() => {
          setIsOpen(false)
          setFormData({ name: '', email: '', message: '' })
          setSubmitted(false)
        }, 2000)
      } else {
        // Show more specific error message with direct contact option
        const errorMsg = data.message || '❌ Failed to send. Please try again.'

        // Always show direct contact email prominently
        const directContactMsg = '📧 Contact me directly: bhavyasuri.bs23@gmail.com'

        // Show error first
        toast.error(errorMsg, {
          duration: 8000,
          style: {
            background: '#1f1f1f',
            color: '#ef4444',
            border: '1px solid #ef4444',
            padding: '16px',
            fontSize: '14px',
          },
        })

        // Immediately show direct contact option (no delay) - make it very visible
        setTimeout(() => {
          toast(
            (t) => (
              <div
                onClick={() => {
                  window.location.href =
                    'mailto:bhavyasuri.bs23@gmail.com?subject=Portfolio Contact'
                  toast.dismiss(t.id)
                }}
                className="cursor-pointer"
              >
                <div className="font-semibold mb-2">📧 {directContactMsg}</div>
                <div className="text-sm text-green-300 underline">
                  Click here to open your email client
                </div>
              </div>
            ),
            {
              duration: 12000,
              icon: '📧',
              style: {
                background: '#1f1f1f',
                color: '#10b981',
                border: '2px solid #10b981',
                padding: '20px',
                fontSize: '15px',
                maxWidth: '400px',
              },
            },
          )
        }, 300)

        setSubmitted(false)
      }
    } catch (err) {
      console.error('Submission error:', err)
      toast.dismiss(loadingToast)
      toast.error('⚡ An error occurred. Please try again later.', { duration: 5000 })

      // Always show direct contact option on any error - make it very visible
      setTimeout(() => {
        toast(
          (t) => (
            <div
              onClick={() => {
                window.location.href = 'mailto:bhavyasuri.bs23@gmail.com?subject=Portfolio Contact'
                toast.dismiss(t.id)
              }}
              className="cursor-pointer"
            >
              <div className="font-semibold mb-2">
                📧 Contact me directly: bhavyasuri.bs23@gmail.com
              </div>
              <div className="text-sm text-green-300 underline">
                Click here to open your email client
              </div>
            </div>
          ),
          {
            duration: 12000,
            icon: '📧',
            style: {
              background: '#1f1f1f',
              color: '#10b981',
              border: '2px solid #10b981',
              padding: '20px',
              fontSize: '15px',
              maxWidth: '400px',
            },
          },
        )
      }, 300)
      setSubmitted(false)
    }
  }

  return (
    <div className="text-center z-50 font-mono bg-black text-gray-300">
      <Toaster position="top-right" reverseOrder={false} />
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-700 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6 border-b border-gray-700 pb-2">
            $ Let&apos;s Work Together
          </h2>
          <p className="text-sm text-gray-400 mb-4 text-center">
            Or contact me directly:{' '}
            <a
              href="mailto:bhavyasuri.bs23@gmail.com"
              className="text-green-400 hover:text-green-300 underline"
            >
              bhavyasuri.bs23@gmail.com
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="$ Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 rounded bg-black border transition-all duration-300 ${
                  errors.name ? 'border-red-500' : 'border-gray-700 focus:border-green-400'
                } text-green-400 focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="$ Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded bg-black border transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-gray-700 focus:border-blue-400'
                } text-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="$ Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full p-3 rounded bg-black border transition-all duration-300 ${
                  errors.message ? 'border-red-500' : 'border-gray-700 focus:border-purple-400'
                } text-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={submitted}
              className="w-full bg-black border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-300"
            >
              <FaPaperPlane /> {submitted ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </Dialog>
    </div>
  )
}

export default HireMeDialog
