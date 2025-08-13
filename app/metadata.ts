import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: {
    default: "NAZ Engineering Systems - Technology & Infrastructure Solutions",
    template: "%s | NAZ Engineering Systems"
  },
  description:
    "Professional technology, energy, and infrastructure solutions. Enhancing Efficiency, Security & Sustainability for your business.",
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