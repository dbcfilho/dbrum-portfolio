"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"

let mermaidInitialized = false

export function Diagram({
  code,
  loadingLabel = "Carregando diagrama…",
  errorLabel = "Não foi possível renderizar o diagrama.",
}: {
  code: string
  loadingLabel?: string
  errorLabel?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let cancelled = false

    // Import dinâmico: o pacote pesado do Mermaid só é carregado quando o
    // diagrama realmente aparece, e o spinner cobre esse tempo sem travar a UI.
    ;(async () => {
      try {
        const mermaid = (await import("mermaid")).default
        if (!mermaidInitialized) {
          mermaid.initialize({ startOnLoad: false, theme: "neutral", securityLevel: "loose" })
          mermaidInitialized = true
        }

        const id = "mermaid-" + Math.random().toString(36).slice(2, 9)
        const { svg } = await mermaid.render(id, code)
        if (cancelled || !ref.current) return

        ref.current.innerHTML = svg
        const svgEl = ref.current.querySelector("svg")
        if (svgEl) {
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet")
          svgEl.style.maxWidth = "600px"
          svgEl.style.width = "100%"
          svgEl.style.height = "auto"
          svgEl.style.display = "block"
          svgEl.style.margin = "0 auto"
        }
        setStatus("ready")
      } catch (err) {
        console.error("Mermaid error:", err)
        if (!cancelled) setStatus("error")
      }
    })()

    return () => {
      cancelled = true
    }
  }, [code])

  return (
    <div className="diagram-box">
      {status === "loading" && (
        <div className="diagram-status" aria-live="polite">
          <Loader2 className="spin" size={22} color="var(--primary)" />
          <span>{loadingLabel}</span>
        </div>
      )}
      {status === "error" && <p className="diagram-status">{errorLabel}</p>}
      <div ref={ref} className="w-full" style={{ display: status === "ready" ? "block" : "none" }} />
    </div>
  )
}
