import type React from "react"
import { Suspense } from "react"
import dynamic from 'next/dynamic'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { metadata, viewport } from "./metadata"
import { ResourcePrefetcher, ScrollToTop, WhatsAppFloat, WebVitals } from "@/components/client-components"
import "./globals.css"

export { metadata, viewport }

// Dynamically import server-side components for better performance
const Navigation = dynamic(() => import("@/components/navigation").then(mod => ({ default: mod.Navigation })), {
  ssr: true,
  loading: () => <div className="h-16" /> // Add loading state
})
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
  loading: () => <div className="h-[200px]" /> // Add loading state
})

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <ResourcePrefetcher />
          </Suspense>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <Navigation />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <WhatsAppFloat />
          </Suspense>
          <Suspense fallback={null}>
            <WebVitals />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
