# Portfolio App - Project Documentation

## Project Overview

This is a modern, animated portfolio website built with Next.js 15, showcasing a developer's skills, projects, and work experience. The site features smooth animations, an asymmetric layout design, and a dark theme with cyan/purple/pink accent colors.

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
  - Frontend: HTML5, CSS3, JavaScript, jQuery
  - Backend: PHP 7.4+, MySQLi, Prepared Statements
  - Database: MySQL 8.0, Database Design, SQL Optimization, Indexing
  - Styling & Design: CSS Grid, Flexbox, Responsive Design, Dark Mode
  - APIs & Integrations: Twilio, Semaphore SMS, Guzzle HTTP, TCPDF
  - DevOps & Tools: Git, Composer, Apache, XAMPP

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

### 5. Work Experience Section
- Timeline-style layout
- Vertical gradient line indicator
- Animated dots marking each position
- Tags for technologies used
- Current positions:
  - Full-Stack Web Developer at X-META TECHNOLOGIES INC (2024)
  - Junior Web Developer at New Zion LPG (2023)

### 6. Footer
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

Current branch: `master`
Modified files: `app/page.tsx`

## Deployment

Currently configured for Vercel deployment. Recent commit:
- "Fix Vercel deployment configuration" (d1a2359)
