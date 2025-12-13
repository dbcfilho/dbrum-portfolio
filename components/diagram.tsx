"use client"

import { useEffect, useRef } from "react"
import mermaid from "mermaid"

export function Diagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
    })

    const id = "mermaid-" + Math.random().toString(36).substring(2, 9)

    mermaid
      .render(id, code)
      .then(({ svg }) => {
        ref.current!.innerHTML = svg
        const svgEl = ref.current!.querySelector("svg")
        if (svgEl) {
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet")
          svgEl.style.maxWidth = "600px"
          svgEl.style.width = "100%"
          svgEl.style.height = "auto"
          svgEl.style.display = "block"
          svgEl.style.margin = "0 auto"
        }
      })
      .catch((err) => console.error("Mermaid error:", err))
  }, [code])

  return (
    <div
      ref={ref}
      className="w-full p-4 overflow-x-auto rounded-xl border border-purple-500/40 bg-black/30 min-h-[140px] flex justify-center"
    />
  )
}
