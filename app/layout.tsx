import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/i18n/language-provider"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dbrum.com.br"),
  title: "Douglas Brum | Desenvolvedor Backend & Cibersegurança",
  description:
    "Desenvolvedor backend focado em APIs robustas e sistemas web com Java/Spring Boot e Node/NestJS. Backend do Corefarma (ERP para farmácias) e do Corefood na Coreon Systems. Interesse em cibersegurança e design de aplicações seguras.",
  keywords: [
    "Desenvolvedor Backend",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "Cibersegurança",
    "Engenheiro de Software",
    "Douglas Brum",
    "Coreon Systems",
    "NestJS",
    "PostgreSQL",
    "Multi-tenant",
  ],
  authors: [{ name: "Douglas Brum" }],
  creator: "Douglas Brum",
  alternates: {
    canonical: "https://dbrum.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dbrum.com.br",
    title: "Douglas Brum | Desenvolvedor Backend & Cibersegurança",
    description:
      "Desenvolvedor backend focado em APIs robustas e sistemas web com Java/Spring Boot e Node/NestJS. Backend do Corefarma (ERP para farmácias) e do Corefood na Coreon Systems. Interesse em cibersegurança e design de aplicações seguras.",
    siteName: "Douglas Brum Portfólio",
    images: [
      {
        url: "/images/dbrum-logo.png",
        width: 945,
        height: 300,
        alt: "Douglas Brum — Desenvolvedor Backend & Cibersegurança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Brum | Desenvolvedor Backend & Cibersegurança",
    description:
      "Desenvolvedor backend focado em APIs robustas e sistemas web com Java/Spring Boot e Node/NestJS. Backend do Corefarma (ERP para farmácias) e do Corefood na Coreon Systems. Interesse em cibersegurança e design de aplicações seguras.",
    images: ["/images/dbrum-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Douglas Brum",
              alternateName: "dbrum_dev",
              jobTitle: "Desenvolvedor Backend com Foco em Cibersegurança",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Duque de Caxias",
                addressRegion: "Rio de Janeiro",
                addressCountry: "Brazil",
              },
              url: "https://dbrum.com.br",
              sameAs: ["https://github.com/dbcfilho", "https://www.linkedin.com/in/dbcfilho/"],
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${plexMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
