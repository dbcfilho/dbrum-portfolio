import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json({
    recommendations: [
      {
        id: "rec-1",
        author: "Igor Brandão",
        company: "Grupo DPSP",
        role: "Farmacêutico",
        text: "Um profissional plenamente capacitado para atuar em qualquer área da tecnologia. Responsável pela resolução de inúmeros problemas do dia a dia, versátil, ágil, habilidoso e altamente competente.",
        authorAvatar: "/images/recommendations/igor.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2023-09-18T00:00:00Z",
      },
      {
        id: "rec-2",
        author: "Geysa Carvalho",
        company: "Prefeitura Municipal de Duque de Caxias",
        role: "Coordenadora de Assuntos Administrativos",
        text: "Um profissional extremamente qualificado, com grande capacidade de atuar nas diferentes áreas da tecnologia. Demonstra elevado senso de responsabilidade, agilidade na resolução de desafios e admirável versatilidade no trabalho diário. Possui sólidos conhecimentos técnicos, é proativo e sempre entrega resultados excelentes, sendo referência em competência e eficiência.",
        authorAvatar: "/images/recommendations/geysa.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2025-12-18T00:00:00Z",
      },
      {
        id: "rec-3",
        author: "Carlos Alexandre Campos Xavier",
        company: "A4PM",
        role: "Técnico de suporte ao usuário de TI",
        text: "Trabalhar com o Douglas é acompanhar, na prática, alguém que leva tecnologia e responsabilidade profissional a sério. Ele possui uma base técnica consistente, raciocínio lógico apurado e uma postura orientada à solução de problemas, sempre buscando eficiência, qualidade e melhoria contínua. O que mais se destaca é sua mentalidade de evolução constante: Douglas está sempre estudando, se atualizando e explorando novas abordagens para entregar melhores resultados. Além da capacidade técnica, demonstra maturidade profissional, organização e uma visão clara de como a tecnologia pode gerar valor real para o negócio. É inspirador dividir o ambiente de trabalho com alguém que transforma desafios em aprendizado e execução. Sem dúvida, um profissional comprometido, confiável e com grande potencial de crescimento dentro da empresa.",
        authorAvatar: "/images/recommendations/carlos.jpg",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2026-01-18T00:00:00Z",
      },
    ],
  })
}
