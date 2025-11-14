/**
 * Shared TypeScript types and interfaces for the portfolio
 */

// Project types
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  images?: string[]
  imageUrl?: string
  direction?: 'left' | 'right'
}

// Work experience types
export interface WorkExperience {
  year: string
  title: string
  company: string
  description: string
  tags: string[]
}

// Tech stack types
export interface TechCategory {
  title: string
  skills: string[]
  color: 'cyan' | 'purple' | 'pink'
  icon?: string
}

// Navigation types
export interface NavigationLink {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon?: string
}

// Contact form types
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Testimonial types
export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  color: 'cyan' | 'purple' | 'pink'
}

// How I Work process step types
export interface ProcessStep {
  number: string
  title: string
  description: string
  color: 'cyan' | 'purple' | 'pink' | 'gradient'
  icon?: string
}

// Animation variant types
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
}
