import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

// <CHANGE> Updated fonts to Space Grotesk for headings and Inter for body
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

// <CHANGE> Updated metadata for SEO optimization
export const metadata: Metadata = {
  title: "Douglas Brum | Backend & Cybersecurity Developer",
  description:
    "Backend developer focused on building robust APIs and web systems using Java/Spring Boot and Python/Django. Strong interest in cybersecurity and secure application design.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "Cybersecurity",
    "Software Engineer",
    "Douglas Brum",
  ],
  authors: [{ name: "Douglas Brum" }],
  creator: "Douglas Brum",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://douglasbrum.dev",
    title: "Douglas Brum | Backend & Cybersecurity Developer",
    description:
      "Backend developer focused on building robust APIs and web systems with a strong interest in cybersecurity.",
    siteName: "Douglas Brum Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Brum | Backend & Cybersecurity Developer",
    description:
      "Backend developer focused on building robust APIs and web systems with a strong interest in cybersecurity.",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Douglas Brum",
              alternateName: "dbrum_dev",
              jobTitle: "Backend & Cybersecurity-Oriented Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Duque de Caxias",
                addressRegion: "Rio de Janeiro",
                addressCountry: "Brazil",
              },
              url: "https://douglasbrum.dev",
              sameAs: ["https://github.com/dbcfilho", "https://www.linkedin.com/in/dbcfilho/"],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
