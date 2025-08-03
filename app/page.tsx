'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-16 flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-4xl">
          {/* Main animated container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20"
          >
            {/* Name and Title */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4"
            >
              Teja
            </motion.h1>
            
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl font-light text-blue-200 mb-6"
            >
              Full Stack Developer & Creative Technologist
            </motion.h2>

            {/* About Section */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Passionate about creating innovative digital experiences that blend cutting-edge technology with elegant design. 
              Specializing in modern web development, user experience, and creative problem-solving.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Figma'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:from-purple-600 hover:to-blue-600"
                >
                  View Projects
                </motion.button>
              </Link>
              
              <Link href="/resume">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  View Resume
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>

            {/* Floating particles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-60"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
