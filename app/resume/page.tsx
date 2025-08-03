'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-16 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Resume Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-2xl p-8 md:p-12"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Teja</h1>
              <h2 className="text-xl text-gray-600 mb-4">Full Stack Developer & Creative Technologist</h2>
              <div className="text-gray-600 space-y-1">
                <p>Email: teja@example.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Location: San Francisco, CA</p>
                <p>LinkedIn: linkedin.com/in/teja</p>
                <p>GitHub: github.com/teja</p>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Passionate Full Stack Developer with 5+ years of experience creating innovative digital experiences. 
                Specialized in modern web technologies including React, Next.js, and Node.js. Proven track record 
                of delivering scalable solutions and leading development teams. Strong focus on user experience, 
                performance optimization, and clean code architecture.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Programming Languages</h4>
                  <p className="text-gray-600">JavaScript, TypeScript, Python, Java, HTML5, CSS3, SQL</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Frameworks & Libraries</h4>
                  <p className="text-gray-600">React, Next.js, Node.js, Express.js, Django, Bootstrap, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Databases & Cloud</h4>
                  <p className="text-gray-600">MongoDB, PostgreSQL, MySQL, AWS, Docker, Kubernetes</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Tools & Platforms</h4>
                  <p className="text-gray-600">Git, GitHub, Figma, Jira, VS Code, Postman, Jenkins</p>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Professional Experience
              </h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-700">Senior Full Stack Developer</h4>
                  <span className="text-gray-600">2022 - Present</span>
                </div>
                <p className="text-gray-600 mb-2">TechCorp Inc., San Francisco, CA</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Led development of scalable web applications using React, Next.js, and Node.js</li>
                  <li>Improved application performance by 40% through code optimization and caching strategies</li>
                  <li>Mentored 3 junior developers and conducted code reviews for team best practices</li>
                  <li>Collaborated with UX/UI designers to implement responsive and accessible interfaces</li>
                  <li>Implemented CI/CD pipelines using Docker and AWS, reducing deployment time by 60%</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-700">Full Stack Developer</h4>
                  <span className="text-gray-600">2020 - 2022</span>
                </div>
                <p className="text-gray-600 mb-2">Digital Solutions LLC, San Francisco, CA</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Developed and maintained 10+ client websites using modern web technologies</li>
                  <li>Built RESTful APIs and integrated third-party services for enhanced functionality</li>
                  <li>Optimized database queries and implemented caching solutions</li>
                  <li>Participated in agile development processes and sprint planning</li>
                  <li>Reduced bug reports by 30% through comprehensive testing and code quality improvements</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-700">Junior Developer</h4>
                  <span className="text-gray-600">2019 - 2020</span>
                </div>
                <p className="text-gray-600 mb-2">StartupXYZ, San Francisco, CA</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Assisted in front-end development using React and modern CSS frameworks</li>
                  <li>Implemented responsive design principles and cross-browser compatibility</li>
                  <li>Collaborated with senior developers on feature development and bug fixes</li>
                  <li>Participated in code reviews and contributed to team documentation</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Education
              </h3>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-700">Bachelor of Science in Computer Science</h4>
                  <span className="text-gray-600">2019</span>
                </div>
                <p className="text-gray-600">University of California, Berkeley</p>
                <p className="text-gray-600">GPA: 3.8/4.0</p>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>AWS Certified Developer Associate (2023)</li>
                <li>MongoDB Certified Developer (2022)</li>
                <li>React Developer Certification (2021)</li>
                <li>Google Cloud Platform Fundamentals (2020)</li>
              </ul>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                Notable Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">E-commerce Platform</h4>
                  <p className="text-gray-600 mb-1">React, Node.js, MongoDB, Stripe API</p>
                  <p className="text-gray-700">Built a full-featured e-commerce platform with payment processing, inventory management, and admin dashboard</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Real-time Chat Application</h4>
                  <p className="text-gray-600 mb-1">Next.js, Socket.io, PostgreSQL</p>
                  <p className="text-gray-700">Developed a real-time messaging application with user authentication and file sharing capabilities</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">Task Management System</h4>
                  <p className="text-gray-600 mb-1">React, Express.js, MySQL</p>
                  <p className="text-gray-700">Created a collaborative project management tool with drag-and-drop functionality and real-time updates</p>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="text-center pt-6 border-t-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Interested in working together?</h3>
              <p className="text-gray-600 mb-6">Let's discuss your next project and bring your ideas to life.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Download PDF Version
                </motion.button>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 