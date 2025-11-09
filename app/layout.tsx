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
  title: "Full-Stack Web Developer | PHP, JavaScript, MySQL Portfolio",
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
  authors: [{ name: "Portfolio Developer" }],
  creator: "Portfolio Developer",
  publisher: "Portfolio Developer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Full-Stack Developer Portfolio",
    title: "Full-Stack Web Developer | Problem-Solving & User-Focused Solutions",
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
    title: "Full-Stack Web Developer | Problem-Solving & User-Focused Solutions",
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
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
