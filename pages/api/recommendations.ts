import type { NextApiRequest, NextApiResponse } from "next"

const recommendations = [
  {
    id: "rec-1",
    author: "Igor Brandão",
    company: "Grupo DPSP",
    role: "Pharmacist",
    text: "A fully capable professional qualified to work in any area of technology.",
    authorAvatar: "/images/recommendations/igor.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
    date: "2023-09-18T00:00:00Z",
  },
  {
    id: "rec-2",
    author: "Geysa Carvalho",
    company: "Prefeitura Municipal de Duque de Caxias",
    role: "Coordinator of Administrative Affairs",
    text: "An extremely qualified professional with a strong ability to work across different areas of technology.",
    authorAvatar: "/images/recommendations/geysa.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
    date: "2025-12-18T00:00:00Z",
  },
  {
    id: "rec-3",
    author: "Carlos Alexandre Campos Xavier",
    company: "A4PM",
    role: "IT user support technician",
    text: "Working with Douglas means witnessing someone who takes technology seriously.",
    authorAvatar: "/images/recommendations/carlos.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dbcfilho/",
    date: "2026-01-18T00:00:00Z",
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ recommendations })
}
