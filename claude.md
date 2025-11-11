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

### 1. Side Navigation
- Fixed position navigation on desktop (hidden on mobile)
- Smooth scroll links to sections: intro, stack, projects, work
- Animated indicators that respond to hover

### 2. Hero Section (Intro)
- Asymmetric grid layout
- Animated gradient background blobs (cyan, purple, pink)
- Developer introduction with tagline
- Code-style display showing tech skills
- CTA buttons for viewing projects and contact

### 3. Tech Stack Section
- Categorized skill display (Frontend, Backend, Database, etc.)
- Color-coded accent borders (cyan, purple, pink)
- Hover animations and pulsing indicators
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

### 4. Projects Section
- Featured project showcases with detailed descriptions
- Image galleries with:
  - Multiple image support
  - Navigation arrows
  - Thumbnail previews
  - Lightbox/modal view with keyboard navigation
  - Click to enlarge functionality
- Project tags displaying tech stack
- Links to live demos and GitHub repos
- Alternating left/right layouts

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

### 5. How I Work Section
- Four-step process cards showcasing development approach
- Centered layout with emoji, title, and description
- Cards feature:
  - Numbered badges (01-04) with gradient colors
  - Animated hover effects (lift and scale)
  - Color-coded titles: Understand (cyan), Empathize (purple), Build (pink), Iterate (gradient)
  - Centered text alignment for clean, balanced appearance
- Real-world example showcase demonstrating the process in action
- No subtitle/description under main heading for cleaner look

### 6. Work Experience Section
- Timeline-style layout
- Vertical gradient line indicator
- Animated dots marking each position
- Tags for technologies used
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

### 7. Testimonials Section
- Three testimonial cards with quotes from colleagues and supervisors
- Gradient-colored quote icons (cyan, purple, pink)
- Hover animations for interactive feel
- Author information with role and company
- Justified text alignment for professional appearance

### 8. Contact Form Section
- Modern contact form with name, email, subject, and message fields
- FormSpree integration for form submission
- Form validation and status feedback
- Animated form elements with focus states
- Responsive design for all screen sizes

### 9. Footer
- Contact section with social links
- Placeholder links for Email, GitHub, LinkedIn, Twitter
- Copyright notice with dynamic year

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
  - Large, bold headings (text-5xl to text-8xl)
  - Consistent use of gray-400 for body text
  - **Text Alignment**:
    - Justified text (`text-justify`) for all paragraph content throughout the portfolio for a professional, polished look
    - Centered text (`text-center`) for "How I Work" process cards (emoji, title, and description) for balanced presentation

- **Layout**:
  - Max-width container: 7xl (max-w-7xl)
  - Consistent padding: px-8 lg:px-16
  - Grid layouts for responsive design

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

### ESLint and TypeScript Fixes (Latest - 2025-11-11)
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
- `app/page.tsx` - Fixed ESLint errors and TypeScript type issues for production build
- `CLAUDE.md` - Updated documentation with ESLint fixes and build improvements

## Deployment

Currently configured for Vercel deployment.
