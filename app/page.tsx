'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="bg-black text-white">
      {/* Side Navigation */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <nav className="flex flex-col gap-6">
          {['intro', 'stack', 'projects', 'work'].map((section, index) => (
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
      <main className="relative">
        {/* Hero - Asymmetric Layout */}
        <section id="intro" className="min-h-screen flex items-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
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
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
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
              className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
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

          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Main Text */}
              <div className="space-y-8 lg:pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="text-cyan-400 font-mono text-sm tracking-wider">{'// Developer & Designer'}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-6xl lg:text-8xl font-bold leading-none"
                >
                  <span className="block">Building</span>
                  <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-400 max-w-lg leading-relaxed"
                >
                  I craft digital products that blend aesthetic design with functional code.
                  Currently focused on web technologies and modern development practices.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex gap-4 pt-4"
                >
                  <a
                    href="#projects"
                    className="group relative px-6 py-3 overflow-hidden bg-white text-black font-medium"
                  >
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 bg-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="px-6 py-3 border border-gray-700 hover:border-cyan-400 transition-colors"
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
                className="lg:pt-32 font-mono text-sm"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-500 text-xs ml-2">developer.ts</span>
                  </div>
                  <div className="p-6 space-y-2 text-sm">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                      <span className="text-purple-400">const</span> <span className="text-cyan-300">skills</span> = {'{'}
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="pl-4">
                      <span className="text-pink-400">frontend</span>: [<span className="text-green-300">&apos;HTML5&apos;</span>, <span className="text-green-300">&apos;CSS3&apos;</span>, <span className="text-green-300">&apos;JavaScript&apos;</span>, <span className="text-green-300">&apos;Bootstrap&apos;</span>, <span className="text-green-300">&apos;AJAX&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pl-4">
                      <span className="text-pink-400">backend</span>: [<span className="text-green-300">&apos;PHP 7.4+&apos;</span>, <span className="text-green-300">&apos;MySQL&apos;</span>, <span className="text-green-300">&apos;MySQLi&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="pl-4">
                      <span className="text-pink-400">database</span>: [<span className="text-green-300">&apos;MySQL 8.0&apos;</span>, <span className="text-green-300">&apos;SQL Optimization&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="pl-4">
                      <span className="text-pink-400">apis</span>: [<span className="text-green-300">&apos;Twilio&apos;</span>, <span className="text-green-300">&apos;Leaflet&apos;</span>, <span className="text-green-300">&apos;Google Maps&apos;</span>, <span className="text-green-300">&apos;TCPDF&apos;</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="pl-4">
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

        {/* Tech Stack - Cards with Icons */}
        <section id="stack" className="py-32 px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="mb-16">
                <span className="text-cyan-400 font-mono text-sm tracking-wider">{'// Tech Arsenal'}</span>
                <h2 className="text-5xl font-bold mt-4">Tools I Use</h2>
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
        <section id="projects" className="py-32 px-8 lg:px-16 bg-black">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="mb-16">
                <span className="text-cyan-400 font-mono text-sm tracking-wider">{'// Featured Work'}</span>
                <h2 className="text-5xl font-bold mt-4">Projects</h2>
              </div>
            </FadeInSection>

            <div className="space-y-32">
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
                  direction="left"
                  liveUrl="#"
                  githubUrl="#"
                />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <ProjectShowcase
                  title="Task Management App"
                  description="Collaborative task tracking application with real-time updates, drag-and-drop interface, and team workspace features."
                  tags={['React', 'Node.js', 'MongoDB', 'Socket.io']}
                  imageUrl="/project-2.jpg"
                  direction="right"
                  liveUrl="https://example.com"
                  githubUrl="https://github.com"
                />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <ProjectShowcase
                  title="Portfolio CMS"
                  description="Custom content management system for creative professionals. Includes media library, SEO optimization, and dynamic page builder."
                  tags={['PHP', 'MySQL', 'Tailwind', 'Alpine.js']}
                  imageUrl="/project-3.jpg"
                  direction="left"
                  liveUrl="https://example.com"
                  githubUrl="https://github.com"
                />
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Experience - Timeline */}
        <section id="work" className="py-32 px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="mb-16">
                <span className="text-cyan-400 font-mono text-sm tracking-wider">{'// Career Path'}</span>
                <h2 className="text-5xl font-bold mt-4">Experience</h2>
              </div>
            </FadeInSection>

            <div className="space-y-16 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-purple-400 before:to-pink-400">
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

        {/* Footer - Minimal Contact */}
        <footer className="border-t border-gray-900 py-16 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Let&apos;s Talk</h3>
                  <p className="text-gray-500">Always open to new opportunities</p>
                </div>

                <div className="flex gap-8">
                  <FooterLink href="mailto:your.email@example.com" label="Email" />
                  <FooterLink href="https://github.com" label="GitHub" />
                  <FooterLink href="https://linkedin.com" label="LinkedIn" />
                  <FooterLink href="https://twitter.com" label="Twitter" />
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-900 text-sm text-gray-600 text-center lg:text-left">
                <p>© {new Date().getFullYear()} — Designed & Built by You</p>
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
      className={`group border ${accentColors[accent]} bg-gray-950 p-8 transition-all hover:bg-gray-900`}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`w-2 h-2 rounded-full ${dotColors[accent]}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center gap-2"
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
  liveUrl,
  githubUrl
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  images?: string[];
  direction: 'left' | 'right';
  liveUrl: string;
  githubUrl: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key to close lightbox and arrow keys for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
      if (isLightboxOpen && hasMultipleImages) {
        if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
        }
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, hasMultipleImages, imageArray.length]);

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${direction === 'right' ? 'lg:direction-rtl' : ''}`}>
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

        {/* Main Image Display */}
        <div
          className="relative aspect-video bg-gray-900 border border-gray-800 rounded-lg overflow-hidden cursor-pointer"
          onClick={openLightbox}
        >
          <Image
            src={currentImage}
            alt={`${title} - Screenshot ${currentImageIndex + 1}`}
            fill
            className="object-cover object-top transition-all duration-500"
            key={currentImageIndex}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          {/* Click to Enlarge Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              <span className="text-white text-sm font-medium">Click to enlarge</span>
            </div>
          </div>

          {/* Navigation Arrows - Only show if multiple images */}
          {hasMultipleImages && (
            <>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
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
        </div>

        {/* Thumbnail Gallery - Only show if multiple images */}
        {hasMultipleImages && (
          <div className="mt-4 grid grid-cols-6 gap-2">
            {imageArray.map((img, index) => (
              <motion.button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative aspect-video rounded overflow-hidden border-2 transition-all ${
                  currentImageIndex === index
                    ? 'border-cyan-400 ring-2 ring-cyan-400/50'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover object-top"
                />
                {currentImageIndex !== index && (
                  <div className="absolute inset-0 bg-black/40" />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Info */}
      <div className={`space-y-6 ${direction === 'right' ? 'lg:direction-ltr' : ''}`}>
        <div>
          <span className="text-cyan-400 font-mono text-sm">{'// Project'}</span>
          <h3 className="text-3xl lg:text-4xl font-bold mt-2">{title}</h3>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
        >
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 text-sm font-mono border border-gray-800 text-gray-400"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>Live Demo</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>GitHub</span>
            <span>→</span>
          </motion.a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[10001] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Image Counter */}
            {hasMultipleImages && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 }}
                className="absolute top-6 left-6 z-[10001] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-mono"
              >
                {currentImageIndex + 1} / {imageArray.length}
              </motion.div>
            )}

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentImage}
                  alt={`${title} - Screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  key={`lightbox-${currentImageIndex}`}
                />
              </div>

              {/* Navigation Arrows for Multiple Images */}
              {hasMultipleImages && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all"
                    whileHover={{ scale: 1.1, x: -4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all"
                    whileHover={{ scale: 1.1, x: 4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </>
              )}
            </motion.div>

            {/* Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[10001] bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm font-mono flex items-center gap-6"
            >
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/20 rounded text-xs">ESC</kbd>
                Close
              </span>
              {hasMultipleImages && (
                <>
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-white/20 rounded text-xs">←</kbd>
                    <kbd className="px-2 py-1 bg-white/20 rounded text-xs">→</kbd>
                    Navigate
                  </span>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
      className="pl-12 relative group"
    >
      <motion.div
        className="absolute left-0 top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-black group-hover:ring-cyan-400/20 transition-all"
        whileHover={{ scale: 1.3 }}
      />

      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-gray-600">{year}</span>
          <div className="h-px flex-1 bg-gray-900" />
        </div>

        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-cyan-400 font-medium">{company}</p>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-3 py-1 text-xs border border-gray-800 text-gray-500 font-mono"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-cyan-400 transition-colors font-medium"
      whileHover={{ y: -2 }}
    >
      {label}
    </motion.a>
  );
}
