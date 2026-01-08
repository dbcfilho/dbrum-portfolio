import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json({
    recommendations: [
      {
        id: "rec-1",
        author: "Igor Brandão",
        company: "Grupo DPSP",
        role: "Pharmacist",
        text: "A fully capable professional qualified to work in any area of technology. Responsible for solving numerous day-to-day problems, versatile, agile, skilled, and highly competent.",
        authorAvatar: "/images/recommendations/igor.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2023-09-18T00:00:00Z",
      },
      {
        id: "rec-2",
        author: "Geysa Carvalho",
        company: "Prefeitura Municipal de Duque de Caxias",
        role: "Coordinator of Administrative Affairs",
        text: "An extremely qualified professional with a strong ability to work across different areas of technology. Demonstrates a high sense of responsibility, agility in solving challenges, and admirable versatility in daily work. Possesses solid technical skills, is proactive, and consistently delivers excellent results, serving as a reference for competence and efficiency.",
        authorAvatar: "/images/recommendations/geysa.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2025-12-18T00:00:00Z",
      },
      {
        id: "rec-3",
        author: "Carlos Alexandre Campos Xavier",
        company: "A4PM",
        role: "IT user support technician",
        text: "Working with Douglas means witnessing, in practice, someone who takes technology and professional responsibility seriously. He has a solid technical foundation, sharp logical reasoning, and a problem-solving–oriented mindset, always striving for efficiency, quality, and continuous improvement. What stands out most is his constant-growth mentality...",
        authorAvatar: "/images/recommendations/carlos.jpg",
        linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
        date: "2026-01-18T00:00:00Z",
      },
    ],
  })
}
