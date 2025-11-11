# Portfolio App - Project Documentation

## Project Overview

This is a modern, animated portfolio website built with Next.js 15, showcasing a developer's skills, projects, and work experience. The site features smooth animations, an asymmetric layout design, and a dark theme with cyan/purple/pink accent colors.

## Developer Profile

**Background**: Information Systems graduate with experience in both full-stack web development and hardware repair, combined with a strong interest in psychology and human behavior.

**Philosophy**: Great development isn't just about writing code—it's about understanding people and creating solutions that make their work easier. This approach combines technical architecture with human needs to create genuinely useful solutions.

**Current Focus**:
- Mastering fundamentals before jumping into modern frameworks
- Building interconnected systems that solve real business problems
- Studying cognitive patterns to design better user experiences
- Turning complex data into clear, actionable insights
- Valuing depth over shortcuts in both technical and human systems

**What Makes This Developer Different**:
- Dual perspective from programming and hardware repair background
- Focus on "why it matters" and "who it will help" rather than just "how to build it"
- Understanding of both technical and business sides to create practical solutions
- Emphasis on building things the right way, even if it takes longer

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.22
- **Linting**: ESLint 9 with Next.js config

## Project Structure

```
portfolio-app/
├── app/
│   ├── page.tsx          # Main portfolio page (hero, stack, projects, work, footer)
│   └── ...               # Other Next.js app router files
├── public/
│   └── newzionpos/       # Project screenshots
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## Key Features

### 1. Mobile Navigation
- **Mobile Menu Button**: Animated hamburger icon with smooth transitions (hidden on desktop)
- **Slide-in Panel**: Full-height navigation drawer with backdrop blur
  - Responsive width: `w-[85vw] max-w-sm` (adapts to screen size, max 384px)
  - Smooth spring animation using Framer Motion
  - Touch-friendly navigation links with large tap targets
  - Social links section at bottom
  - Animated entrance with staggered link appearance
- **Mobile-First Design**: All navigation optimized for touch interaction
- **Z-index Management**: Proper layering (backdrop: z-[55], panel: z-[56], button: z-[60])

### 2. Side Navigation (Desktop Only)
- Fixed position navigation on desktop (hidden on mobile with `hidden lg:block`)
- Smooth scroll links to sections: intro, about, stack, projects, work, contact
- Animated indicators that respond to hover
- Vertical positioning on left side of screen

### 3. Hero Section (Intro)
- Asymmetric grid layout
- Animated gradient background blobs (cyan, purple, pink) with responsive sizing
- Developer introduction with tagline
- Code-style display showing tech skills
- CTA buttons for viewing projects and contact
- **Mobile Optimizations**:
  - Heading scales from `text-3xl` (mobile) to `text-7xl` (desktop)
  - Responsive padding: `px-4 sm:px-6 md:px-8 lg:px-16`
  - Buttons stack vertically on mobile: `flex-col sm:flex-row`
  - Touch-friendly button sizes with `min-h-[44px]`

### 4. Tech Stack Section
- Categorized skill display (Frontend, Backend, Database, etc.)
- Color-coded accent borders (cyan, purple, pink)
- Hover animations and pulsing indicators
- **Mobile Responsive**: Grid stacks from 1 column (mobile) to 2 (tablet) to 3 (desktop)
- Categories:
  - Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap, AJAX
  - Backend: PHP 7.4+, MySQLi, Prepared Statements
  - Database: MySQL 8.0, Database Design, SQL Optimization, Indexing
  - Styling & Design: CSS Grid, Flexbox, Responsive Design, Dark Mode, Bootstrap
  - APIs & Integrations: Twilio, Semaphore SMS, Guzzle HTTP, TCPDF, Leaflet, Google Maps API
  - DevOps & Tools: Git, Composer, Apache, XAMPP

**Current Professional Stack** (X-Meta Technologies):
- Frontend: HTML5, CSS3, JavaScript, Bootstrap, AJAX
- Backend: PHP, MySQL
- Version Control: Git
- Mapping/Geolocation: Leaflet, Google Maps API

### 5. Projects Section
- Featured project showcases with detailed descriptions
- **Image Galleries** with comprehensive mobile support:
  - Multiple image support with smooth transitions
  - Desktop: Navigation arrows (hidden on mobile)
  - Mobile: Swipe gesture navigation with touch feedback
  - Image counter with responsive sizing (`text-xs sm:text-sm`)
  - Lightbox/modal view with keyboard navigation (ESC, arrow keys)
  - Click/tap to enlarge functionality
  - **Mobile Optimizations**:
    - Tap-to-fullscreen indicator appears on mobile devices
    - Responsive positioning for all controls (2px on mobile, 4px on desktop)
    - Larger tap targets on mobile (p-4 on mobile, p-3 on desktop for close button)
    - Project title truncates with `max-w-[calc(100vw-8rem)]` to prevent overflow
    - Fullscreen counter positioned at `bottom-4 sm:bottom-8` for better reachability
    - Swipe instruction briefly appears on mobile to guide users
- Project tags displaying tech stack (responsive sizing)
- Alternating left/right layouts (stacks on mobile)

**Featured Projects to Consider Adding**:

1. **Device Monitoring & Food Order Dashboard** (X-Meta Technologies)
   - Backend dashboard with real-time device monitoring
   - Food order tracking system
   - Real-time updates and data visualization
   - Tech: PHP, MySQL, JavaScript, AJAX

2. **Ads Booking System with Budget Calculator** (X-Meta Technologies)
   - Integrated budget calculator for advertising spend planning
   - Helps clients determine optimal advertising budgets
   - Tech: PHP, MySQL, JavaScript, Bootstrap

3. **Multi-Branch Location & Usage Map** (X-Meta Technologies)
   - Interactive map showing device locations across multiple branches
   - Real-time mobile data usage tracking
   - Map integration using Leaflet and Google Maps API
   - Transforms complex data into actionable insights
   - Tech: JavaScript, Leaflet, Google Maps API, PHP, MySQL

4. **New Zion Point-of-Sale (POS) System** (Currently Featured)
   - Already documented in the portfolio
   - Comprehensive business management system for LPG distribution

### 6. How I Work Section
- Four-step process cards showcasing development approach
- Centered layout with emoji, title, and description
- **Mobile Responsive**: Grid changes from 1 column (mobile) to 2 (small tablet) to 4 (desktop)
- Cards feature:
  - Numbered badges (01-04) with gradient colors, responsive sizing: `w-10 h-10 sm:w-12 sm:h-12`
  - Animated hover effects (lift and scale)
  - Color-coded titles: Understand (cyan), Empathize (purple), Build (pink), Iterate (gradient)
  - Centered text alignment for clean, balanced appearance
  - Responsive text: `text-xl sm:text-2xl` for titles, `text-xs sm:text-sm` for descriptions
- Real-world example showcase demonstrating the process in action
- No subtitle/description under main heading for cleaner look
- Responsive spacing: `gap-6 sm:gap-8`

### 7. Work Experience Section
- Timeline-style layout with responsive left padding
- Vertical gradient line indicator
- Animated dots marking each position (responsive sizing: `w-2.5 h-2.5 sm:w-3 sm:h-3`)
- Tags for technologies used with responsive padding
- **Mobile Optimizations**:
  - Responsive spacing: `pl-8 sm:pl-10 md:pl-12`
  - Text sizing: Year `text-xs sm:text-sm`, Title `text-xl sm:text-2xl`
  - Tags with `px-2.5 sm:px-3` and `text-xs`
- Current positions:
  - **Full-Stack Web Developer at X-META TECHNOLOGIES INC (2024)**
    - Developing interconnected web applications focused on solving real business problems
    - Built backend dashboard for real-time device monitoring and food order tracking
    - Created ads booking system with integrated budget calculator for client advertising spend planning
    - Implemented map integration using Leaflet and Google Maps to display device locations and mobile data usage across multiple branches in real-time
    - Tech stack: HTML5, CSS3, JavaScript, Bootstrap, AJAX, PHP, MySQL, Git
    - Focus on creating solutions that are both technically sound and genuinely useful for end users
  - **Junior Web Developer at New Zion LPG (2023) - Internship**
    - Developed comprehensive Point-of-Sale and business management system for LPG distribution company
    - Built customer dashboard connected to POS systems for multi-branch operations
    - Implemented SMS notification feature using Twilio API to improve communication between branches in Parañaque and Las Piñas
    - Created customer management, inventory tracking, and automated notification features
    - Achieved 70% faster order processing and 50% reduction in errors by digitizing manual operations

### 8. Testimonials Section
- Three testimonial cards with quotes from colleagues and supervisors
- **Mobile Responsive**: Grid from 1 column (mobile) to 2 (tablet) to 3 (desktop)
- Gradient-colored quote icons (cyan, purple, pink) with responsive sizing: `w-10 h-10 sm:w-12 sm:h-12`
- Hover animations for interactive feel
- Author information with role and company
- Justified text alignment for professional appearance
- Responsive text sizing: `text-sm sm:text-base` for quotes, `text-xs sm:text-sm` for author details
- Responsive padding: `p-6 sm:p-8`, spacing: `mb-4 sm:mb-6`

### 9. Contact Form Section
- Modern contact form with name, email, subject, and message fields
- FormSpree integration for form submission
- Form validation and status feedback
- Animated form elements with focus states
- **Fully Responsive Design**:
  - Form container: `p-8 md:p-12` padding
  - Grid layout for name/email: `md:grid-cols-2` (stacks on mobile)
  - All inputs with explicit text sizing: `text-sm sm:text-base`
  - Large tap targets: `px-4 py-3` on all form fields
  - Submit button: `w-full sm:w-auto` (full width on mobile)
  - Buttons stack vertically on mobile: `flex-col sm:flex-row`
  - Touch-friendly with minimum 44px tap targets

### 10. Footer
- Contact section with social links
- Placeholder links for Email, GitHub, LinkedIn, Twitter
- Copyright notice with dynamic year
- **Mobile Responsive**:
  - Layout: `flex-col lg:flex-row` (vertical on mobile, horizontal on desktop)
  - Spacing: `gap-6 sm:gap-8`
  - Text sizing: `text-2xl sm:text-3xl` for heading, `text-sm sm:text-base` for links
  - All links meet minimum tap target size: `min-h-[44px]`

## Components

### Custom Components
- `FadeInSection`: Wrapper for scroll-triggered fade-in animations
- `TechCategory`: Tech stack category cards with hover effects
- `ProjectShowcase`: Project display with gallery, lightbox, and details
- `WorkItem`: Timeline work experience entries
- `FooterLink`: Animated footer links

## Animation Patterns

- **Framer Motion** is used throughout for:
  - Initial page load animations (staggered delays)
  - Scroll-triggered animations (`useInView` hook)
  - Hover interactions
  - Gallery navigation transitions
  - Lightbox modal animations

## Styling Conventions

- **Color Scheme**:
  - Background: Black (#000) and Gray-950
  - Text: White with Gray variants
  - Accents: Cyan-400, Purple-400, Pink-400
  - Borders: Gray-800, Gray-700

- **Typography**:
  - Font Mono for code-style elements and labels
  - Large, bold headings with responsive sizing (text-3xl to text-7xl)
  - Consistent use of gray-400 for body text
  - **Text Alignment**:
    - Justified text (`text-justify`) for all paragraph content throughout the portfolio for a professional, polished look
    - Centered text (`text-center`) for "How I Work" process cards (emoji, title, and description) for balanced presentation

- **Layout**:
  - Max-width container: 7xl (max-w-7xl)
  - Responsive padding: `px-4 sm:px-6 md:px-8 lg:px-16`
  - Grid layouts for responsive design with mobile-first approach

## Mobile Responsiveness

The portfolio is **fully mobile-responsive** with comprehensive optimizations for devices as small as 320px wide.

### Design Philosophy
- **Mobile-First Approach**: All styles start with mobile design and progressively enhance for larger screens
- **Touch-Friendly**: All interactive elements meet WCAG 2.1 minimum tap target size of 44x44px
- **Performance**: Optimized animations and transitions work smoothly on mobile devices
- **No Horizontal Scroll**: All content fits within viewport at any screen size

### Responsive Breakpoints
Following Tailwind CSS default breakpoints:
- **sm:** 640px - Large phones in landscape, small tablets
- **md:** 768px - Tablets in portrait
- **lg:** 1024px - Tablets in landscape, small laptops
- **xl:** 1280px - Desktops
- **2xl:** 1536px - Large desktops

### Key Mobile Optimizations

#### Navigation
- Hamburger menu with slide-in panel on mobile (`lg:hidden`)
- Desktop side navigation hidden on mobile (`hidden lg:block`)
- Full-screen backdrop with blur effect
- Touch-friendly menu items with large tap targets

#### Typography
- All headings scale responsively (e.g., `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`)
- Body text: `text-sm sm:text-base` ensures readability on small screens
- Labels and small text: `text-xs sm:text-sm`

#### Layout
- Grids stack appropriately: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexbox directions change: `flex-col sm:flex-row`
- Spacing scales: `gap-4 sm:gap-6 md:gap-8`
- Padding scales: `p-4 sm:p-6 md:p-8`

#### Images & Media
- Image galleries support swipe gestures on mobile
- Fullscreen modal controls positioned away from edges
- Responsive sizing for all images and icons
- Tap-to-fullscreen indicators on mobile devices

#### Forms
- All form inputs: `text-sm sm:text-base` for consistent sizing
- Full-width inputs on mobile: `w-full`
- Buttons stack vertically: `flex-col sm:flex-row`
- Submit button: `w-full sm:w-auto`

#### Spacing
- Consistent responsive patterns throughout:
  - Small: `2` on mobile, `4` on desktop
  - Medium: `4-6` on mobile, `8` on desktop
  - Large: `8-12` on mobile, `16-20` on desktop

### Testing Recommendations
Tested and optimized for:
- iPhone SE (375px width) - Smallest modern iPhone
- iPhone 12/13/14 (390px) - Most common iPhone
- Samsung Galaxy (360px) - Common Android size
- Small screens (320px) - Edge cases
- Tablets (768px-1024px) - iPad and Android tablets
- Landscape orientation on all device sizes

### Accessibility
- All interactive elements meet minimum 44x44px tap target size
- Focus states clearly visible with cyan outline
- Skip-to-content link for keyboard navigation
- Proper ARIA labels on all buttons
- Screen reader friendly markup

## Development Guidelines

### Adding New Projects
1. Add project images to `/public/projectname/` directory
2. Update the Projects section in `app/page.tsx`
3. Use the `ProjectShowcase` component with:
   - `images` array for multiple screenshots OR `imageUrl` for single image
   - `direction` alternating between 'left' and 'right'
   - Descriptive `title` and `description`
   - Relevant `tags` array
   - Valid `liveUrl` and `githubUrl`

### Adding Work Experience
1. Locate the Work Experience section in `app/page.tsx`
2. Add a new `FadeInSection` with `WorkItem` component
3. Include: year, title, company, description, and tags

### Customizing Contact Info
- Update email in hero section (line 141)
- Update footer links (lines 358-361)

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Recent Updates

### Comprehensive Mobile Responsiveness Audit & Fixes (Latest - 2025-11-11)
Conducted a complete mobile responsiveness audit and implemented fixes across all sections to ensure optimal experience on devices as small as 320px.

**Critical Fixes Applied**:

1. **Hero Section** ([page.tsx:294](app/page.tsx#L294))
   - Reduced main heading size from `text-4xl` to `text-3xl` on mobile for better fit on small screens (320-375px)
   - Prevents text overflow on iPhone SE and similar devices

2. **Mobile Navigation Menu** ([page.tsx:118](app/page.tsx#L118))
   - Changed from fixed `w-80` to responsive `w-[85vw] max-w-sm`
   - Adapts to screen size while maintaining max 384px width
   - Works perfectly on 320px wide devices

3. **Projects Section - Image Gallery** (Multiple improvements)
   - **Image Counter** ([page.tsx:1373](app/page.tsx#L1373)): Responsive positioning `top-2 sm:top-4 right-2 sm:right-4` and sizing `text-xs sm:text-sm`
   - **Tap Indicator** ([page.tsx:1334](app/page.tsx#L1334)): Added responsive sizing `px-3 py-2 sm:px-4 sm:py-2, text-xs sm:text-sm`
   - **Fullscreen Close Button** ([page.tsx:1431](app/page.tsx#L1431)): Better positioning `top-2 right-2 sm:top-4 sm:right-4` and larger mobile tap target `p-4 sm:p-3`
   - **Navigation Arrows** ([page.tsx:1469, 1484](app/page.tsx#L1469)): Moved away from edges `left-2 sm:left-4 / right-2 sm:right-4, p-3 sm:p-4`
   - **Fullscreen Counter** ([page.tsx:1494](app/page.tsx#L1494)): Responsive sizing `bottom-4 sm:bottom-8, px-4 py-2 sm:px-6 sm:py-3, text-sm sm:text-base`
   - **Project Title** ([page.tsx:1515](app/page.tsx#L1515)): Added truncation with `max-w-[calc(100vw-8rem)]` and responsive sizing `text-xs sm:text-sm`

4. **Contact Form Inputs** ([page.tsx:971, 988, 1005, 1022](app/page.tsx#L971))
   - Added explicit text sizing `text-sm sm:text-base` to all form inputs (name, email, subject, message)
   - Ensures consistent, readable text on all devices

**Sections Verified & Already Optimized**:
- ✓ Mobile Navigation - Excellent implementation
- ✓ Side Navigation - Properly hidden on mobile
- ✓ About Me Section - Perfect responsive grid
- ✓ Tech Stack Section - Great grid stacking pattern
- ✓ How I Work Section - Excellent card layout
- ✓ Testimonials Section - Perfect grid and text sizing
- ✓ Work Experience Section - Great timeline layout
- ✓ Footer - Excellent responsive layout

**Mobile-First Design Principles**:
- All interactive elements meet minimum 44x44px tap target size
- No horizontal scrolling at any breakpoint
- Text remains readable at all sizes (tested down to 320px)
- Touch gestures work smoothly (swipe for image galleries)
- Proper spacing prevents accidental taps

**Build Status**: ✓ Successfully compiles with no errors or warnings

---

### ESLint and TypeScript Fixes (2025-11-11)
- **Type Safety Improvements**:
  - Added proper TypeScript types for Framer Motion drag handlers by importing `PanInfo` type
  - Replaced `any` types with specific types: `MouseEvent | TouchEvent | PointerEvent` and `PanInfo`
  - Prefixed unused `event` parameter with underscore (`_event`) to follow ESLint conventions

- **Code Cleanup**:
  - Removed unused `error` variable in try-catch block (line 45)
  - Removed unused `liveUrl` and `githubUrl` props from `ProjectShowcase` component
  - Removed `liveUrl` and `githubUrl` from all `ProjectShowcase` component calls
  - Fixed all ESLint warnings and errors for successful production build

- **Build Status**: Successfully builds with no ESLint errors or warnings (except metadataBase warning)

### Text Alignment Improvements (2025-11-09)
- **Global Text Justification**: Applied `text-justify` to all paragraph content throughout the portfolio for a professional, polished appearance
  - Hero section intro paragraph
  - About Me section (all paragraphs in philosophy cards and main content)
  - How I Work section case study descriptions
  - Testimonials section quotes
  - Contact section header description
  - Project descriptions (ProjectShowcase component)
  - Work experience descriptions (WorkItem component)

- **How I Work Section Refinement**:
  - Removed subtitle text under "How I Work" heading for cleaner presentation
  - Changed all 4 process cards (Understand, Empathize, Build, Iterate) to center-aligned text
  - Centered card emojis and titles for balanced, professional look
  - Result: Cards have consistent, centered layout that's easier to read and more visually appealing

## Important Notes

- This is a client-side rendered app (`'use client'` directive)
- Uses Next.js 15 App Router
- All images should be optimized and placed in the `/public` directory
- The lightbox feature requires proper image paths
- Keyboard navigation is supported in the lightbox (ESC to close, arrow keys to navigate)

## TODO / Placeholders

- Replace placeholder email: `your.email@example.com`
- Update social media links (GitHub, LinkedIn, Twitter)
- Replace placeholder project images and links (project-2.jpg, project-3.jpg)
- Add actual GitHub repository URLs
- Consider adding more sections (blog, testimonials, contact form)

## Git Status

Current branch: `main`
Recent changes:
- `app/page.tsx` - Comprehensive mobile responsiveness improvements across all sections
  - Fixed Hero section heading sizing for small screens
  - Improved mobile menu width responsiveness
  - Enhanced Projects section image gallery for mobile (counter, navigation, fullscreen modal)
  - Added explicit text sizing to all contact form inputs
- `CLAUDE.md` - Complete documentation update with mobile responsiveness details and audit results

## Deployment

Currently configured for Vercel deployment.
