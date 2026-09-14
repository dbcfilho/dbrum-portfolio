"use client"

import { BRUMMY_FACTS } from "@/lib/brummy/data"

/**
 * Tela de boot compartilhada entre dois momentos:
 *
 *  1. o clique em "Brummy" no header do portfólio (transição deliberada)
 *  2. o `loading.tsx` da rota, se o chunk ainda estiver vindo
 *
 * Por isso o estilo mora em globals.css e não em brummy.css: ela precisa
 * existir também do lado claro do site, antes de a rota carregar.
 */
export default function BrummyBootScreen({ standalone = false }: { standalone?: boolean }) {
  return (
    <div className={standalone ? "bx-bootscreen is-standalone" : "bx-bootscreen"} role="status" aria-live="polite">
      <div className="bx-bootscreen-inner">
        {/* eslint-disable-next-line @next/next/no-img-element --
            images.unoptimized está ligado no projeto; <Image /> só somaria runtime. */}
        <img src="/brummy/brummy-mark-sm.webp" alt="" aria-hidden="true" width={192} height={127} />
        <p className="bx-bootscreen-name">
          Brummy Linux <span>{BRUMMY_FACTS.version}</span>
        </p>
        <div className="bx-bootscreen-bar">
          <span />
        </div>
        <p className="bx-bootscreen-log">==&gt; [brummy] carregando...</p>
      </div>
      <span className="bx-visually-hidden">Carregando Brummy</span>
    </div>
  )
}
