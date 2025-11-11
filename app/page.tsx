'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, type PanInfo } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission (replace with actual FormSpree endpoint or API)
    try {
      // Replace this URL with your FormSpree endpoint: https://formspree.io/f/YOUR_FORM_ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-cyan-400 focus:text-black focus:font-bold focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-8 right-8 z-[60] lg:hidden bg-gray-900 border border-gray-800 p-3 rounded-lg hover:border-cyan-400 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <motion.div
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="w-6 h-5 flex flex-col justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 }
            }}
            className="w-full h-0.5 bg-white block origin-center transition-all"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            className="w-full h-0.5 bg-white block transition-all"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 }
            }}
            className="w-full h-0.5 bg-white block origin-center transition-all"
          />
        </motion.div>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gray-950 border-l border-gray-800 z-[56] lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* Menu Title */}
                <div className="mb-8">
                  <span className="text-cyan-400 font-mono text-sm tracking-wider">{'// Navigation'}</span>
                  <h2 className="text-2xl font-bold mt-2">Menu</h2>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-4" aria-label="Mobile navigation">
                  {[
                    { id: 'intro', label: 'Introduction' },
                    { id: 'about', label: 'About Me' },
                    { id: 'stack', label: 'Tech Stack' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'work', label: 'Experience' },
                    { id: 'contact', label: 'Contact' }
                  ].map((section, index) => (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-cyan-400 hover:bg-gray-900 transition-all"
                    >
                      <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full" />
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 font-mono">0{index + 1}</div>
                        <div className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                          {section.label}
                        </div>
                      </div>
                      <motion.div
                        className="text-gray-600 group-hover:text-cyan-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

                {/* Social Links */}
                <div className="space-y-3">
                  <div className="text-sm text-gray-500 font-mono mb-4">{'// Connect'}</div>
                  {[
                    { label: 'Email', href: 'mailto:your.email@example.com' },
                    { label: 'GitHub', href: 'https://github.com' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                    { label: 'Twitter', href: 'https://twitter.com' }
                  ].map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors py-2"
                    >
                      {link.label} →
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Side Navigation */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        aria-label="Main navigation"
      >
        <nav className="flex flex-col gap-6" aria-label="Page sections">
          {['intro', 'about', 'stack', 'projects', 'work', 'contact'].map((section, index) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="group flex items-center gap-3"
              onMouseEnter={() => setActiveSection(section)}
              onMouseLeave={() => setActiveSection('')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className={`h-px transition-all ${activeSection === section ? 'w-12 bg-cyan-400' : 'w-8 bg-gray-600'}`}
                animate={{ width: activeSection === section ? 48 : 32 }}
              />
              <span className={`text-xs uppercase tracking-widest transition-all ${activeSection === section ? 'text-cyan-400 translate-x-1' : 'text-gray-600'}`}>
                {section}
              </span>
            </motion.a>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Hero - Asymmetric Layout */}
        <section id="intro" className="min-h-screen flex items-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/3 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                scale: [1, 0.9, 1],
                x: [0, 20, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left - Main Text */}
              <div className="space-y-6 md:space-y-8 lg:pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// Developer & Designer'}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none"
                >
                  <span className="block">Building</span>
                  <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed text-justify"
                >
                  I build web applications that solve real business problems by understanding both the technical architecture and the people who use them. My background in hardware repair and interest in human behavior helps me create solutions that are genuinely useful, not just technically sound.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
                >
                  <a
                    href="#projects"
                    className="group relative px-6 py-3 overflow-hidden bg-white text-black font-medium text-center min-h-[44px] flex items-center justify-center"
                  >
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 bg-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="group relative px-6 py-3 overflow-hidden border border-gray-700 hover:border-purple-400 transition-all text-center min-h-[44px] flex items-center justify-center"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-purple-400/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border border-gray-700 hover:border-cyan-400 transition-colors text-center min-h-[44px] flex items-center justify-center"
                  >
                    Contact
                  </a>
                </motion.div>
              </div>

              {/* Right - Code Block Style */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:pt-32 font-mono text-xs sm:text-sm"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-500 text-xs ml-2">developer.ts</span>
                  </div>
                  <div className="p-4 sm:p-6 space-y-1 sm:space-y-2 text-xs sm:text-sm overflow-x-auto">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                      <span className="text-purple-400">const</span> <span className="text-cyan-300">skills</span> = {'{'}
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="pl-2 sm:pl-4">
                      <span className="text-pink-400">frontend</span>: [<span className="text-green-300">&apos;HTML5&apos;</span>, <span className="text-green-300">&apos;CSS3&apos;</span>, <span className="text-green-300">&apos;JavaScript&apos;</span>, <span className="text-green-300">&apos;Bootstrap&apos;</span>, <span className="text-green-300">&apos;AJAX&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pl-2 sm:pl-4">
                      <span className="text-pink-400">backend</span>: [<span className="text-green-300">&apos;PHP 7.4+&apos;</span>, <span className="text-green-300">&apos;MySQL&apos;</span>, <span className="text-green-300">&apos;MySQLi&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="pl-2 sm:pl-4">
                      <span className="text-pink-400">database</span>: [<span className="text-green-300">&apos;MySQL 8.0&apos;</span>, <span className="text-green-300">&apos;SQL Optimization&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="pl-2 sm:pl-4">
                      <span className="text-pink-400">apis</span>: [<span className="text-green-300">&apos;Twilio&apos;</span>, <span className="text-green-300">&apos;Leaflet&apos;</span>, <span className="text-green-300">&apos;Google Maps&apos;</span>, <span className="text-green-300">&apos;TCPDF&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="pl-2 sm:pl-4">
                      <span className="text-pink-400">tools</span>: [<span className="text-green-300">&apos;Git&apos;</span>, <span className="text-green-300">&apos;Composer&apos;</span>, <span className="text-green-300">&apos;Apache&apos;</span>]
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                      {'}'}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute top-1/3 right-0 w-1/3 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16 text-center">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// About Me'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">Beyond the Code</h2>
              </div>
            </FadeInSection>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Philosophy Cards */}
              <FadeInSection delay={0.1}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Card 1: Dual Background */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-cyan-400"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <h3 className="text-lg sm:text-xl font-bold text-cyan-400">Dual Perspective</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-justify">
                      My background spans both <span className="text-white font-medium">software development</span> and <span className="text-white font-medium">hardware repair</span>. This unique combination gives me a deeper understanding of how systems work—not just in code, but in the real world where things can break, users get frustrated, and solutions need to be both technically sound and practically useful.
                    </p>
                  </motion.div>

                  {/* Card 2: Psychology & People */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-purple-400"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      <h3 className="text-lg sm:text-xl font-bold text-purple-400">Understanding People</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-justify">
                      I&apos;m fascinated by <span className="text-white font-medium">psychology and human behavior</span>. This interest shapes how I approach development—I don&apos;t just ask &quot;how do I build this?&quot; but also <span className="text-white font-medium">&quot;why does it matter?&quot;</span> and <span className="text-white font-medium">&quot;who will this help?&quot;</span> Great software isn&apos;t just about elegant code; it&apos;s about understanding the people who use it.
                    </p>
                  </motion.div>
                </div>
              </FadeInSection>

              {/* Main Philosophy Statement */}
              <FadeInSection delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-800 p-6 sm:p-8 md:p-10 rounded-lg relative overflow-hidden"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

                  <div className="pl-4 sm:pl-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      My Development Philosophy
                    </h3>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                      <p>
                        I believe great development isn&apos;t just about writing code—it&apos;s about <span className="text-white font-medium">understanding both the technical architecture and the human needs</span> behind every project.
                      </p>
                      <p>
                        Rather than chasing the latest trends, I focus on <span className="text-white font-medium">mastering fundamentals</span> and building things the right way. I believe in depth over shortcuts, in understanding the &quot;why&quot; before jumping to the &quot;how.&quot;
                      </p>
                      <p>
                        Whether it&apos;s a POS system for LPG distribution or a real-time monitoring dashboard, my goal is always the same: <span className="text-white font-medium">create interconnected systems that transform complex business problems into clear, actionable solutions</span> that people actually want to use.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>

              {/* Key Principles */}
              <FadeInSection delay={0.3}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="text-center p-5 sm:p-6 border border-gray-800 rounded-lg bg-gray-950/50"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-cyan-400">Purpose First</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Understanding the &quot;why&quot; and &quot;who it helps&quot; before diving into implementation</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="text-center p-5 sm:p-6 border border-gray-800 rounded-lg bg-gray-950/50"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-purple-400">Practical Solutions</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Building systems that work in the real world, not just in theory</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="text-center p-5 sm:p-6 border border-gray-800 rounded-lg bg-gray-950/50 sm:col-span-2 md:col-span-1"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-pink-400">Human-Centered</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Designing with empathy for the people who will actually use the system</p>
                  </motion.div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Tech Stack - Cards with Icons */}
        <section id="stack" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// Tech Arsenal'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">Tools I Use</h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeInSection delay={0.1}>
                <TechCategory
                  title="Frontend"
                  items={['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX']}
                  accent="cyan"
                />
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <TechCategory
                  title="Backend"
                  items={['PHP 7.4+', 'MySQLi', 'Prepared Statements']}
                  accent="purple"
                />
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <TechCategory
                  title="Database"
                  items={['MySQL 8.0', 'Database Design', 'SQL Optimization', 'Indexing']}
                  accent="pink"
                />
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <TechCategory
                  title="Styling & Design"
                  items={['CSS Grid', 'Flexbox', 'Responsive Design', 'Dark Mode', 'Bootstrap']}
                  accent="cyan"
                />
              </FadeInSection>
              <FadeInSection delay={0.5}>
                <TechCategory
                  title="APIs & Integrations"
                  items={['Twilio SDK', 'Leaflet', 'Google Maps API', 'TCPDF', 'REST APIs']}
                  accent="purple"
                />
              </FadeInSection>
              <FadeInSection delay={0.6}>
                <TechCategory
                  title="DevOps & Tools"
                  items={['Git', 'Composer', 'Apache', 'XAMPP', 'PHP-CS-Fixer']}
                  accent="pink"
                />
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-black">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// Featured Work'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">Projects</h2>
              </div>
            </FadeInSection>

            <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
              <FadeInSection delay={0.2}>
                <ProjectShowcase
                  title="Device Monitoring & Food Order Dashboard"
                  description="A real-time backend dashboard system for monitoring devices and tracking food orders across multiple locations. Features live device status updates, order management, and comprehensive data visualization for business intelligence. Built to handle concurrent operations and provide instant insights for operational decision-making."
                  tags={['PHP', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap', 'Real-time Updates']}
                  images={[
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 164737.png',
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 164838.png',
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 164919.png',
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 165111.png',
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 171008.png',
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 171040.png',
                    '/device-monitoring-dashboard/Screenshot 2025-11-09 171250.png',
                  ]}
                  direction="left"
                />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <ProjectShowcase
                  title="Ads Booking System with Budget Calculator"
                  description="An integrated advertising management platform featuring a sophisticated budget calculator that helps clients determine optimal advertising spend and ROI. The system streamlines the booking process while providing cost optimization recommendations and real-time budget analysis. Empowers clients to make data-driven decisions about their advertising investments."
                  tags={['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Budget Analytics', 'Client Portal']}
                  images={[
                    '/ads-booking-system/Screenshot 2025-11-09 171151.png',
                  ]}
                  direction="right"
                />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <ProjectShowcase
                  title="Multi-Branch Location & Usage Map"
                  description="An interactive mapping solution that visualizes device locations and mobile data usage across multiple branches in real-time. Leverages Leaflet and Google Maps API to transform complex location and usage data into clear, actionable insights. Enables management to monitor operations across all branches at a glance and make informed decisions about resource allocation and network optimization."
                  tags={['JavaScript', 'Leaflet', 'Google Maps API', 'PHP', 'MySQL', 'Real-time Tracking', 'Data Visualization']}
                  images={[
                    '/multi-branch-map/Screenshot 2025-11-09 170254.png',
                    '/multi-branch-map/Screenshot 2025-11-09 170333.png',
                    '/multi-branch-map/Screenshot 2025-11-09 170906.png',
                  ]}
                  direction="left"
                />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <ProjectShowcase
                  title="New Zion Point-of-Sale (POS) System"
                  description="A comprehensive full-stack POS and business management system for LPG distribution companies. Features customer management, order processing, multi-branch inventory tracking, automated SMS notifications, and real-time sales analytics. Successfully transformed manual operations into a fully digital system, achieving 70% faster order processing and 50% reduction in errors."
                  tags={['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Twilio API', 'TCPDF', 'Responsive Design']}
                  images={[
                    '/newzionpos/Screenshot 2025-11-01 174458.png',
                    '/newzionpos/Screenshot 2025-11-01 174543.png',
                    '/newzionpos/Screenshot 2025-11-01 174619.png',
                    '/newzionpos/Screenshot 2025-11-01 174704.png',
                    '/newzionpos/Screenshot 2025-11-01 174800.png',
                    '/newzionpos/Screenshot 2025-11-01 174832.png',
                    '/newzionpos/Screenshot 2025-11-01 174909.png',
                    '/newzionpos/Screenshot 2025-11-01 174938.png',
                    '/newzionpos/Screenshot 2025-11-01 175017.png',
                    '/newzionpos/Screenshot 2025-11-01 175053.png',
                    '/newzionpos/Screenshot 2025-11-01 175140.png',
                  ]}
                  direction="right"
                />
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Process/Philosophy Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16 text-center">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// My Approach'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">How I Work</h2>
              </div>
            </FadeInSection>

            {/* Process Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
              <FadeInSection delay={0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center font-bold text-black text-base sm:text-lg shadow-lg shadow-cyan-400/20">
                    01
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-cyan-400 text-center mt-3 sm:mt-4">Understand</h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm text-center">
                    Start with the business problem, not the technology. I dig deep to understand what users actually need and why it matters to them.
                  </p>
                </motion.div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center font-bold text-black text-base sm:text-lg shadow-lg shadow-purple-400/20">
                    02
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-purple-400 text-center mt-3 sm:mt-4">Empathize</h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm text-center">
                    Consider who will use the system and their daily challenges. Design with empathy for real people, not abstract &quot;users.&quot;
                  </p>
                </motion.div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center font-bold text-black text-base sm:text-lg shadow-lg shadow-pink-400/20">
                    03
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-pink-400 text-center mt-3 sm:mt-4">Build</h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm text-center">
                    Build with depth over shortcuts. Master fundamentals, write clean code, and create systems that are both technically sound and practical.
                  </p>
                </motion.div>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center font-bold text-black text-base sm:text-lg shadow-lg shadow-cyan-400/20">
                    04
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center mt-3 sm:mt-4">
                    Iterate
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm text-center">
                    Refine based on real feedback and usage. Great software evolves through continuous improvement and learning.
                  </p>
                </motion.div>
              </FadeInSection>
            </div>

            {/* Real Example */}
            <FadeInSection delay={0.5}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-800 p-6 sm:p-8 md:p-10 rounded-lg relative overflow-hidden"
              >
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-purple-400" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Real Example: New Zion POS System</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                        <span className="text-lg">01</span> Understand
                      </div>
                      <p className="text-gray-400 leading-relaxed text-justify">
                        LPG distribution relied on manual processes causing errors and delays across two branches. The real problem wasn&apos;t lack of technology—it was inefficient communication and tracking.
                      </p>
                    </div>

                    <div>
                      <div className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                        <span className="text-lg">02</span> Empathize
                      </div>
                      <p className="text-gray-400 leading-relaxed text-justify">
                        Staff needed quick order processing under pressure. Customers wanted transparency. Management needed reliable data for decisions—not just another dashboard.
                      </p>
                    </div>

                    <div>
                      <div className="font-bold text-pink-400 mb-2 flex items-center gap-2">
                        <span className="text-lg">03</span> Build
                      </div>
                      <p className="text-gray-400 leading-relaxed text-justify">
                        Built a comprehensive POS with SMS notifications for branch communication, real-time inventory tracking, and customer management—all integrated seamlessly.
                      </p>
                    </div>

                    <div>
                      <div className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
                        <span className="text-lg">04</span> Iterate
                      </div>
                      <p className="text-gray-400 leading-relaxed text-justify">
                        Result: 70% faster processing, 50% fewer errors. Continuous refinements based on daily operations made it truly indispensable.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16 text-center">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// Testimonials'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">What Others Say</h2>
                <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-justify">
                  Feedback from colleagues, supervisors, and clients I&apos;ve worked with.
                </p>
              </div>
            </FadeInSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Testimonial 1 */}
              <FadeInSection delay={0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/20">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-grow italic mt-3 sm:mt-4 text-justify">
                    &quot;Outstanding developer with a unique ability to understand both technical requirements and user needs. The POS system transformed our operations completely.&quot;
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-800 pt-3 sm:pt-4">
                    <div className="font-bold text-white text-sm sm:text-base">Toots Abella</div>
                    <div className="text-xs sm:text-sm text-cyan-400">Operations Manager</div>
                    <div className="text-xs sm:text-sm text-gray-500">New Zion LPG</div>
                  </div>
                </motion.div>
              </FadeInSection>

              {/* Testimonial 2 */}
              <FadeInSection delay={0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/20">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-grow italic mt-3 sm:mt-4 text-justify">
                    &quot;A talented developer who brings fresh perspectives to problem-solving. His work on our dashboard system exceeded expectations and delivered real value.&quot;
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-800 pt-3 sm:pt-4">
                    <div className="font-bold text-white text-sm sm:text-base">Sai Maloles</div>
                    <div className="text-xs sm:text-sm text-purple-400">IT Dept Head</div>
                    <div className="text-xs sm:text-sm text-gray-500">X-Meta Technologies</div>
                  </div>
                </motion.div>
              </FadeInSection>

              {/* Testimonial 3 */}
              <FadeInSection delay={0.3}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-gray-900/50 border border-gray-800 p-6 sm:p-8 rounded-lg backdrop-blur-sm h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-400/20">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-grow italic mt-3 sm:mt-4 text-justify">
                    &quot;Exceptional attention to detail and genuine care for user experience. He doesn&apos;t just write code—he creates solutions that people actually want to use.&quot;
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-800 pt-3 sm:pt-4">
                    <div className="font-bold text-white text-sm sm:text-base">Yen Padlan</div>
                    <div className="text-xs sm:text-sm text-pink-400">CMO</div>
                    <div className="text-xs sm:text-sm text-gray-500">X-Meta Technologies</div>
                  </div>
                </motion.div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Experience - Timeline */}
        <section id="work" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// Career Path'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">Experience</h2>
              </div>
            </FadeInSection>

            <div className="space-y-10 sm:space-y-12 md:space-y-16 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-purple-400 before:to-pink-400">
              <FadeInSection delay={0.1}>
                <WorkItem
                  year="2024"
                  title="Full-Stack Web Developer"
                  company="X-META TECHNOLOGIES INC"
                  description="Building interconnected web applications focused on solving real business problems. Developed a backend dashboard with real-time device monitoring and food order tracking, an ads booking system with integrated budget calculator, and map integration using Leaflet and Google Maps to display device locations and mobile data usage across multiple branches in real-time."
                  tags={['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AJAX', 'PHP', 'MySQL', 'Git', 'Leaflet', 'Google Maps API']}
                />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <WorkItem
                  year="2023"
                  title="Junior Web Developer (Internship)"
                  company="New Zion LPG"
                  description="Developed a comprehensive Point-of-Sale and business management system for an LPG distribution company serving multiple branches in Parañaque and Las Piñas. Built customer dashboard connected to POS systems, SMS notification feature for branch communication, and implemented customer management, inventory tracking, and automated notification features. Achieved 70% faster order processing and 50% reduction in errors."
                  tags={['PHP', 'MySQL', 'JavaScript', 'jQuery', 'CSS', 'Twilio API', 'TCPDF']}
                />
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl" />

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeInSection>
              <div className="mb-10 sm:mb-12 md:mb-16 text-center">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">{'// Get In Touch'}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">Let&apos;s Work Together</h2>
                <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-center">
                  Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <motion.form
                onSubmit={handleSubmit}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-mono text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="What's on your mind?"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Share your idea, project details, or just say hi..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                    className="group relative px-8 py-4 overflow-hidden bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.button>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center gap-2 text-green-400"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Message sent successfully!
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center gap-2 text-red-400"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  * Required fields
                </p>
              </motion.form>
            </FadeInSection>
          </div>
        </section>

        {/* Footer - Minimal Contact */}
        <footer className="border-t border-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Let&apos;s Talk</h3>
                  <p className="text-sm sm:text-base text-gray-500">Always open to new opportunities</p>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                  <FooterLink
                    href="mailto:keithvergara1997@gmail.com"
                    label="Email"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    }
                  />
                  <FooterLink
                    href="https://github.com/icodeninjaX"
                    label="GitHub"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    }
                  />
                  <FooterLink
                    href="https://www.linkedin.com/in/keith-vergara-552279190/"
                    label="LinkedIn"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    }
                  />
                  <FooterLink
                    href="https://www.facebook.com/dev.kit29"
                    label="Facebook"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    }
                  />
                  <a
                    href="/resume.pdf"
                    download
                    className="text-gray-500 hover:text-purple-400 transition-colors font-medium flex items-center gap-2 min-h-[44px]"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Resume
                  </a>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-900 text-xs sm:text-sm text-gray-600 text-center lg:text-left">
                <p>© {new Date().getFullYear()} — Designed & Built by Keith Dwarren P. Vergara</p>
              </div>
            </FadeInSection>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Scroll Animation Wrapper
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function TechCategory({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  const accentColors: Record<string, string> = {
    cyan: 'border-cyan-400/30 hover:border-cyan-400',
    purple: 'border-purple-400/30 hover:border-purple-400',
    pink: 'border-pink-400/30 hover:border-pink-400'
  };

  const dotColors: Record<string, string> = {
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-400',
    pink: 'bg-pink-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group border ${accentColors[accent]} bg-gray-950 p-6 sm:p-8 transition-all hover:bg-gray-900`}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <motion.div
          className={`w-2 h-2 rounded-full ${dotColors[accent]}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-gray-400 flex items-center gap-2"
          >
            <span className="text-gray-600">→</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectShowcase({
  title,
  description,
  tags,
  imageUrl,
  images,
  direction,
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  images?: string[];
  direction: 'left' | 'right';
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Blur placeholder for loading states
  const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxMTE4MjciLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzBjMTAxYiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzExMTgyNyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+";

  // Use images array if provided, otherwise fall back to single imageUrl
  const imageArray = images || (imageUrl ? [imageUrl] : []);
  const hasMultipleImages = imageArray.length > 1;
  const currentImage = imageArray[currentImageIndex] || imageArray[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  // Handle swipe gestures
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50; // Minimum distance for a swipe

    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swiped right - go to previous image
        prevImage();
      } else {
        // Swiped left - go to next image
        nextImage();
      }
    }
  };

  // Open fullscreen
  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  // Close fullscreen
  const closeFullscreen = () => {
    setIsFullscreen(false);
  };


  return (
    <>
    <div className="bg-gray-950/50 border border-gray-800 rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm">
      <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${direction === 'right' ? 'lg:direction-rtl' : ''}`}>
        {/* Project Image Gallery */}
        <motion.div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur-xl"
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          />

        {/* Main Image Display with Swipe Support */}
        <motion.div
          className="relative aspect-video bg-gray-900 border border-gray-800 rounded-lg overflow-hidden cursor-pointer"
          drag={hasMultipleImages ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          onClick={openFullscreen}
        >
          <Image
            src={currentImage}
            alt={`${title} - Screenshot ${currentImageIndex + 1}`}
            fill
            className="object-cover object-top transition-all duration-500 pointer-events-none"
            placeholder="blur"
            blurDataURL={blurDataURL}
            key={currentImageIndex}
          />

          {/* Tap to Fullscreen Indicator (Mobile Only) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors lg:hidden"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to view fullscreen
            </div>
          </motion.div>

          {/* Navigation Arrows - Desktop Only */}
          {hasMultipleImages && (
            <>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-mono">
                {currentImageIndex + 1} / {imageArray.length}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <div className={`space-y-4 sm:space-y-5 md:space-y-6 ${direction === 'right' ? 'lg:direction-ltr' : ''}`}>
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h3>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-900 border border-gray-800 p-4 sm:p-5 md:p-6 rounded-lg"
        >
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">{description}</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-mono border border-gray-800 text-gray-400"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
    </div>

    {/* Fullscreen Modal */}
    <AnimatePresence>
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-[110] bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            aria-label="Close fullscreen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Fullscreen Image with Swipe */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            drag={hasMultipleImages ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={currentImage}
                alt={`${title} - Screenshot ${currentImageIndex + 1} (Fullscreen)`}
                fill
                className="object-contain pointer-events-none"
                placeholder="blur"
                blurDataURL={blurDataURL}
                key={`fullscreen-${currentImageIndex}`}
              />
            </div>

            {/* Navigation Arrows for Fullscreen */}
            {hasMultipleImages && (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-[105] bg-black/70 hover:bg-black/90 text-white p-4 rounded-full backdrop-blur-sm transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-[105] bg-black/70 hover:bg-black/90 text-white p-4 rounded-full backdrop-blur-sm transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* Image Counter for Fullscreen */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[105] bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white font-mono">
                  {currentImageIndex + 1} / {imageArray.length}
                </div>

                {/* Swipe Instruction (Shows briefly) */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[105] bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm font-mono lg:hidden"
                >
                  ← Swipe to navigate →
                </motion.div>
              </>
            )}

            {/* Project Title in Fullscreen */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 left-4 z-[105] bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white font-mono"
            >
              <span className="text-sm">{title}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

function WorkItem({ year, title, company, description, tags }: {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[]
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="pl-8 sm:pl-10 md:pl-12 relative group"
    >
      <motion.div
        className="absolute left-0 top-1 sm:top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyan-400 ring-4 ring-black group-hover:ring-cyan-400/20 transition-all"
        whileHover={{ scale: 1.3 }}
      />

      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs sm:text-sm text-gray-600">{year}</span>
          <div className="h-px flex-1 bg-gray-900" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <p className="text-sm sm:text-base text-cyan-400 font-medium">{company}</p>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-justify">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-2.5 sm:px-3 py-1 text-xs border border-gray-800 text-gray-500 font-mono"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FooterLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-cyan-400 transition-colors font-medium text-sm sm:text-base min-h-[44px] flex items-center gap-2"
      whileHover={{ y: -2 }}
    >
      {icon}
      {label}
    </motion.a>
  );
}
