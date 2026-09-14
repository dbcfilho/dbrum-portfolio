"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { useRouter } from "next/navigation"
import BrummyBootScreen from "@/components/brummy/brummy-boot-screen"

/** Tempo da tela de boot antes de trocar de rota. */
const BOOT_MS = 900

/**
 * A porta de entrada do Brummy no header do portfólio.
 *
 * Entrar noutro universo visual sem transição é um corte seco: a página clara
 * some e a escura aparece. Aqui o clique dá boot, do mesmo jeito que o sistema
 * de verdade dá. A rota é pré-carregada no hover, então os 900ms são só
 * encenação, não espera real.
 *
 * Quem pediu menos movimento no sistema operacional navega direto, sem tela.
 */
export default function BrummyLaunch({ label, hint }: { label: string; hint: string }) {
  const router = useRouter()
  const [booting, setBooting] = useState(false)

  useEffect(() => {
    if (!booting) return
    const id = window.setTimeout(() => router.push("/brummy"), BOOT_MS)
    return () => window.clearTimeout(id)
  }, [booting, router])

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Ctrl/Cmd/clique do meio abrem em nova aba: não sequestrar isso.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      event.preventDefault()
      setBooting(true)
    },
    [],
  )

  return (
    <>
      <Link
        href="/brummy"
        prefetch
        onMouseEnter={() => router.prefetch("/brummy")}
        onFocus={() => router.prefetch("/brummy")}
        onClick={onClick}
        className="nav-brummy"
        aria-label={`${label} — ${hint}`}
      >
        <i aria-hidden="true" />
        {label}
      </Link>

      {/* `booting` só vira true a partir de um clique, ou seja, já no cliente:
          o portal nunca é avaliado durante o SSR e dispensa flag de montagem. */}
      {booting && createPortal(<BrummyBootScreen />, document.body)}
    </>
  )
}
