/**
 * Animation constants and variants for Framer Motion
 * Centralized animation values for consistency across the site
 */

// Animation durations
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.2,
  BACKGROUND_BLOB: 7,
} as const

// Animation delays
export const ANIMATION_DELAY = {
  NONE: 0,
  TINY: 0.05,
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.4,
  VERY_LONG: 0.5,
} as const

// Stagger delays for sequential animations
export const STAGGER_DELAY = {
  FAST: 0.05,
  NORMAL: 0.1,
  SLOW: 0.2,
} as const

// Common animation variants
export const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

// Mobile menu hamburger animation variants
export const hamburgerVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 8 },
}

export const hamburgerMiddleVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}

export const hamburgerBottomVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -8 },
}

// Transition configurations
export const springTransition = {
  type: 'spring' as const,
  damping: 25,
  stiffness: 200,
}

export const smoothTransition = {
  type: 'tween' as const,
  ease: 'easeInOut' as const,
}

export const bounceTransition = {
  type: 'spring' as const,
  damping: 10,
  stiffness: 100,
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: ANIMATION_DURATION.FAST },
}

export const hoverLift = {
  y: -4,
  transition: { duration: ANIMATION_DURATION.FAST },
}

export const hoverScaleAndLift = {
  scale: 1.02,
  y: -4,
  transition: { duration: ANIMATION_DURATION.FAST },
}

// Tap animations
export const tapScale = {
  scale: 0.95,
  transition: { duration: ANIMATION_DURATION.FAST },
}

export const tapScaleDown = {
  scale: 0.98,
  transition: { duration: ANIMATION_DURATION.FAST },
}

// Background blob animations (for hero section)
export const blobAnimation = (delay: number = 0) => ({
  scale: [1, 1.1, 1],
  x: [0, 30, 0],
  y: [0, -50, 0],
  transition: {
    duration: ANIMATION_DURATION.BACKGROUND_BLOB,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
})

export const blobAnimation2 = (delay: number = 0) => ({
  scale: [1, 1.1, 1],
  x: [0, -20, 0],
  y: [0, 20, 0],
  transition: {
    duration: ANIMATION_DURATION.BACKGROUND_BLOB,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
})

export const blobAnimation3 = (delay: number = 0) => ({
  scale: [1, 0.9, 1],
  x: [0, 20, 0],
  y: [0, -30, 0],
  transition: {
    duration: ANIMATION_DURATION.BACKGROUND_BLOB,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
})

// Pulse animation (for indicators, badges, etc.)
export const pulseAnimation = (duration: number = 2) => ({
  scale: [1, 1.2, 1],
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut',
  },
})

// Arrow animation (for CTAs, navigation)
export const arrowAnimation = {
  x: [0, 5, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// Viewport animation configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: '0px 0px -100px 0px',
}
