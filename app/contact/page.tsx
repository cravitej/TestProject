'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-16 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Contact Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Get In Touch
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300"
              >
                Let&apos;s discuss your next project or just say hello!
              </motion.p>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center"
              >
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center"
              >
                ❌ Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Other Ways to Reach Me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <p className="text-gray-300">teja@example.com</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-2">LinkedIn</h4>
                  <p className="text-gray-300">linkedin.com/in/teja</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-2">GitHub</h4>
                  <p className="text-gray-300">github.com/teja</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Location</h4>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 