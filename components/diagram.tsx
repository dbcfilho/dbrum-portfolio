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
    <div className="w-full rounded-sm border border-rule bg-panel min-h-[180px] flex items-center justify-center overflow-x-auto p-4">
      {status === "loading" && (
        <div className="flex flex-col items-center gap-2 text-ink-3" aria-live="polite">
          <Loader2 className="w-6 h-6 animate-spin text-ledger" />
          <span className="text-xs">{loadingLabel}</span>
        </div>
      )}
      {status === "error" && <p className="text-sm text-ink-3">{errorLabel}</p>}
      <div ref={ref} className={`w-full ${status === "ready" ? "block" : "hidden"}`} />
    </div>
  )
}
