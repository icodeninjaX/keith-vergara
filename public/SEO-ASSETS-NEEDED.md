# SEO Assets Required

The following image files are referenced in the SEO metadata (app/layout.tsx) and need to be created:

## Favicon Files
- `/public/favicon.ico` - Standard favicon (16x16, 32x32, 48x48)
- `/public/favicon-16x16.png` - 16x16 PNG favicon
- `/public/apple-touch-icon.png` - 180x180 PNG for Apple devices

## Open Graph / Social Media Image
- `/public/og-image.png` - 1200x630 PNG
  - Used for social media sharing (Facebook, LinkedIn, Twitter)
  - Should showcase portfolio branding
  - Include name/title text overlay
  - Use portfolio color scheme (cyan/purple/pink on dark background)

## Web Manifest
- `/public/site.webmanifest` - PWA manifest file
  - Define app name, icons, theme colors
  - Optional but recommended for modern web apps

## Tools to Create These Assets
- **Favicon**: Use [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
- **OG Image**: Use [Canva](https://canva.com) or design tool of choice
- **Web Manifest**: Use [Web App Manifest Generator](https://www.simicart.com/manifest-generator.html/)

## Quick Setup
1. Create a simple logo/brand mark
2. Generate favicons using online tool
3. Design OG image with portfolio name and tagline
4. Generate web manifest with your portfolio details
5. Replace placeholder URL in metadata (currently: "https://yourportfolio.com")
