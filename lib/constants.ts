/**
 * Constants and data for the portfolio
 * Centralized data management for easy updates
 */

import { NavigationLink, SocialLink, TechCategory } from './types'

// Site configuration
export const SITE_CONFIG = {
  name: 'Keith Vergara',
  title: 'Full-Stack Web Developer',
  email: 'keithvergara1997@gmail.com',
  tagline: 'Building Solutions',
  description: 'I build web applications that solve real business problems by understanding both the technical architecture and the people who use them. My background in hardware repair and interest in human behavior helps me create solutions that are genuinely useful, not just technically sound.',
} as const

// Navigation links
export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: 'intro', label: 'Introduction' },
  { id: 'about', label: 'About Me' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', href: 'mailto:keithvergara1997@gmail.com' },
  { label: 'GitHub', href: 'https://github.com' }, // TODO: Update with real GitHub URL
  { label: 'LinkedIn', href: 'https://linkedin.com' }, // TODO: Update with real LinkedIn URL
  { label: 'Twitter', href: 'https://twitter.com' }, // TODO: Update with real Twitter URL
]

// Tech stack categories
export const TECH_STACK: TechCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX'],
    color: 'cyan',
  },
  {
    title: 'Backend Development',
    skills: ['PHP 7.4+', 'MySQLi', 'Prepared Statements'],
    color: 'purple',
  },
  {
    title: 'Database & Optimization',
    skills: ['MySQL 8.0', 'Database Design', 'SQL Optimization', 'Indexing'],
    color: 'pink',
  },
  {
    title: 'Styling & Design',
    skills: ['CSS Grid', 'Flexbox', 'Responsive Design', 'Dark Mode', 'Bootstrap'],
    color: 'cyan',
  },
  {
    title: 'APIs & Integrations',
    skills: ['Twilio', 'Semaphore SMS', 'Guzzle HTTP', 'TCPDF', 'Leaflet', 'Google Maps API'],
    color: 'purple',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Composer', 'Apache', 'XAMPP'],
    color: 'pink',
  },
]

// Skills for code display in hero section
export const CODE_SKILLS = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AJAX'],
  backend: ['PHP 7.4+', 'MySQL', 'MySQLi'],
  database: ['MySQL 8.0', 'SQL Optimization'],
  apis: ['Twilio', 'Leaflet', 'Google Maps', 'TCPDF'],
  tools: ['Git', 'Composer', 'Apache'],
} as const

// How I Work process steps
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Understand',
    description: 'I start by understanding the real problem—not just the technical requirements, but the business goals and user needs.',
    color: 'cyan' as const,
  },
  {
    number: '02',
    title: 'Empathize',
    description: 'I put myself in the shoes of the people who will use the system. What makes their work easier? What frustrates them?',
    color: 'purple' as const,
  },
  {
    number: '03',
    title: 'Build',
    description: 'I develop solutions that are both technically sound and genuinely useful, focusing on clean, maintainable code.',
    color: 'pink' as const,
  },
  {
    number: '04',
    title: 'Iterate',
    description: 'I gather feedback and continuously improve the solution based on real-world usage and user input.',
    color: 'gradient' as const,
  },
]

// Key principles for About section
export const KEY_PRINCIPLES = [
  {
    icon: '🎯',
    title: 'Purpose First',
    description: 'Understanding the "why" and "who it helps" before diving into implementation',
    color: 'cyan' as const,
  },
  {
    icon: '🔧',
    title: 'Practical Solutions',
    description: 'Building systems that work in the real world, not just in theory',
    color: 'purple' as const,
  },
  {
    icon: '🧠',
    title: 'Continuous Learning',
    description: 'Always improving and staying curious about both technology and human behavior',
    color: 'pink' as const,
  },
]
