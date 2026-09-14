import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { BRUMMY_FACTS, BRUMMY_REPO } from "@/lib/brummy/data"
import "./brummy.css"

/**
 * A fonte do sistema é a fonte da página: JetBrains Mono é a mesma
 * `ttf-jetbrains-mono-nerd` que o Brummy instala em packages/base.packages.
 * Só os pesos usados — nada de peso morto no carregamento.
 */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
})

/**
 * Metadados próprios da rota. O idioma aqui é PT porque a detecção de idioma do
 * site acontece no cliente e o documento é servido em pt-BR — o mesmo critério
 * já usado no layout raiz.
 */
export const metadata: Metadata = {
  title: "Brummy, um sistema Linux que eu construo por prazer | Douglas Brum",
  description:
    "Brummy Linux é um projeto pessoal e experimental: hoje uma camada própria sobre Arch Linux e Hyprland, com instalador, configuração em Lua e boot próprio. Em desenvolvimento, sem prazo.",
  keywords: [
    "Brummy Linux",
    "Arch Linux",
    "Hyprland",
    "sistema operacional",
    "projeto pessoal",
    "Linux",
    "Douglas Brum",
  ],
  alternates: { canonical: "https://dbrum.com.br/brummy" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dbrum.com.br/brummy",
    siteName: "Brummy Linux",
    title: "Brummy, um sonho que eu resolvi construir",
    description:
      "Projeto pessoal e experimental de Douglas Brum: um sistema Linux construído aos poucos, sem pressa e sem prazo. Hoje em v1.1a, sobre Arch Linux e Hyprland.",
    images: [
      {
        url: "/brummy/brummy-og.png",
        width: 1200,
        height: 630,
        alt: "Logo do Brummy: a letra B em pixel art atravessada por um anel orbital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brummy, um sonho que eu resolvi construir",
    description:
      "Projeto pessoal e experimental: um sistema Linux construído aos poucos, sem pressa e sem prazo.",
    images: ["/brummy/brummy-og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#05050a",
}

export default function BrummyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`brummy-root ${jetbrainsMono.variable}`}>
      {/*
        Marca que o JavaScript está vivo ANTES da primeira pintura. As animações
        de entrada só escondem conteúdo quando isto existe — sem JS, a página
        continua inteira e legível.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: 'document.documentElement.setAttribute("data-bx-js","on")',
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: "Brummy Linux",
            description:
              "Projeto pessoal e experimental: uma camada própria sobre Arch Linux e Hyprland, com instalador idempotente, configuração em Lua e boot próprio.",
            codeRepository: BRUMMY_REPO,
            programmingLanguage: ["Shell", "Lua", "Python"],
            license: "https://opensource.org/licenses/MIT",
            runtimePlatform: BRUMMY_FACTS.base,
            version: BRUMMY_FACTS.version,
            url: "https://dbrum.com.br/brummy",
            author: {
              "@type": "Person",
              name: "Douglas Brum",
              url: "https://dbrum.com.br",
            },
          }),
        }}
      />
      <div className="bx-backdrop" aria-hidden="true" />
      {children}
    </div>
  )
}
