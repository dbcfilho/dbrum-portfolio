import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "Douglas Brum | Desenvolvedor Backend & Cibersegurança",
  description:
    "Desenvolvedor backend focado na construção de APIs robustas e sistemas web usando Java/Spring Boot e Python/Django. Grande interesse em cibersegurança e design de aplicações seguras.",
  keywords: [
    "Desenvolvedor Backend",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "Cibersegurança",
    "Engenheiro de Software",
    "Douglas Brum",
  ],
  authors: [{ name: "Douglas Brum" }],
  creator: "Douglas Brum",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dbrum.com.br",
    title: "Douglas Brum | Desenvolvedor Backend & Cibersegurança",
    description:
      "Desenvolvedor backend focado na construção de APIs robustas e sistemas web, com grande interesse em cibersegurança.",
    siteName: "Douglas Brum Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Brum | Desenvolvedor Backend & Cibersegurança",
    description:
      "Desenvolvedor backend focado na construção de APIs robustas e sistemas web, com grande interesse em cibersegurança.",
  },
  icons: {
    icon: [
      {
        url: "/images/ico.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
