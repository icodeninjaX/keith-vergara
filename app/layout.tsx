import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keith Vergara Portfolio",
  description: "Full-stack developer building web applications that solve real business problems. Specializing in PHP, MySQL, JavaScript, and creating user-focused solutions that blend technical architecture with human needs.",
  keywords: [
    "full-stack developer",
    "web developer",
    "PHP developer",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "AJAX",
    "web applications",
    "business solutions",
    "user experience",
    "frontend development",
    "backend development",
  ],
  authors: [{ name: "Keith Vergara" }],
  creator: "Keith Vergara",
  publisher: "Keith Vergara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Keith Vergara Portfolio",
    title: "Keith Vergara | Full-Stack Web Developer",
    description: "Building web applications that solve real business problems by understanding both technical architecture and human needs. Specializing in PHP, MySQL, JavaScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keith Vergara Portfolio",
    description: "Building web applications that solve real business problems. Specializing in PHP, MySQL, JavaScript, and creating user-focused solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Keith Vergara",
    "jobTitle": "Full-Stack Web Developer",
    "url": "https://your-domain.com",
    "sameAs": [
      "https://github.com/your-github",
      "https://linkedin.com/in/your-linkedin"
    ],
    "knowsAbout": [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Development",
      "Full-Stack Development",
      "Database Design",
      "Bootstrap",
      "AJAX"
    ],
    "description": "Full-stack developer building web applications that solve real business problems. Specializing in PHP, MySQL, JavaScript, and creating user-focused solutions.",
    "worksFor": {
      "@type": "Organization",
      "name": "X-Meta Technologies Inc"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Font Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
