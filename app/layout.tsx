import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { CriticalCSS, InlineCriticalCSS } from "@/components/critical-css"
import { ResourcePrefetcher } from "@/components/resource-prefetcher"

// Dynamically import non-critical components for better performance
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
})

const WebVitals = dynamic(() => import("@/components/web-vitals").then(mod => ({ default: mod.WebVitals })), {
  ssr: true,
})

const WhatsAppFloat = dynamic(() => import("@/components/whatsapp-float").then(mod => ({ default: mod.WhatsAppFloat })), {
  ssr: true,
  loading: () => null,
})

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "NAZ Engineering Systems - Technology & Infrastructure Solutions",
    template: "%s | NAZ Engineering Systems"
  },
  description:
    "Professional technology, energy, and infrastructure solutions. Enhancing Efficiency, Security & Sustainability for your business.",
  keywords: [
    "engineering systems",
    "technology solutions",
    "infrastructure",
    "IT services",
    "security systems",
    "power solutions",
    "energy solutions",
    "Delhi engineering"
  ],
  authors: [{ name: "NAZ Engineering Systems" }],
  creator: "NAZ Engineering Systems",
  publisher: "NAZ Engineering Systems",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nazengineeringsystems.com",
    siteName: "NAZ Engineering Systems",
    title: "NAZ Engineering Systems - Technology & Infrastructure Solutions",
    description: "Professional technology, energy, and infrastructure solutions. Enhancing Efficiency, Security & Sustainability for your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAZ Engineering Systems - Technology & Infrastructure Solutions",
    description: "Professional technology, energy, and infrastructure solutions. Enhancing Efficiency, Security & Sustainability for your business.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4DA8DA' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1F3A' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <InlineCriticalCSS />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CriticalCSS />
          <ResourcePrefetcher />
          <ScrollToTop />
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <WebVitals />
        </ThemeProvider>
      </body>
    </html>
  )
}
