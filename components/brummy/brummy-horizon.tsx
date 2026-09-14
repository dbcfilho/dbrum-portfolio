"use client"

import { ArrowUpRight } from "lucide-react"
import { BRUMMY_SCRATCH_REPO, BRUMMY_STAGES } from "@/lib/brummy/data"
import {
  RevealSection,
  RichText,
  SectionHead,
  useBrummy,
  useParallaxScene,
} from "@/components/brummy/primitives"

/**
 * 04 — para onde isso vai.
 *
 * As etapas saem do roadmap do README, com o estado real de cada uma. O destino
 * (construir do zero em volta do kernel) aparece como bloco próprio: é o ponto
 * de chegada declarado, e não mais uma versão da lista.
 */
export default function BrummyHorizon() {
  const t = useBrummy()
  const scratch = useParallaxScene<HTMLDivElement>()

  return (
    <RevealSection className="bx-shell" ariaLabelledby="bx-horizon-title">
      <SectionHead index="04" label={t.horizon.label} heading={t.horizon.heading} headingId="bx-horizon-title" />
      <p className="bx-lede">{t.horizon.lede}</p>

      <ol className="bx-timeline" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {BRUMMY_STAGES.map((stage) => {
          const copy = t.horizon.stages[stage.id]
          return (
            <li className={`bx-stage is-${stage.state}`} key={stage.id}>
              <span className="bx-stage-tag bx-mono">{stage.tag}</span>
              <span className="bx-stage-mark" aria-hidden="true">
                <i />
              </span>
              <div className="bx-stage-body">
                <h3>{copy.title}</h3>
                <p>
                  <RichText text={copy.body} />
                </p>
                <span className="bx-stage-state">{t.horizon.stateLabels[stage.state]}</span>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="bx-scratch" ref={scratch}>
        <span className="bx-scratch-glow bx-layer" aria-hidden="true" />
        <span className="bx-scratch-tag">{t.horizon.scratch.tag}</span>
        <h3>{t.horizon.scratch.title}</h3>
        <p>{t.horizon.scratch.body}</p>
        <div className="bx-scratch-foot">
          {BRUMMY_SCRATCH_REPO ? (
            <a className="bx-button" href={BRUMMY_SCRATCH_REPO} target="_blank" rel="noopener noreferrer">
              {t.horizon.scratch.repoCta}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <p className="bx-scratch-pending">
              <i aria-hidden="true" />
              {t.horizon.scratch.repoPending}
            </p>
          )}
        </div>
      </div>

      <div className="bx-inspiration">
        <h3>{t.horizon.inspiration.title}</h3>
        <p>{t.horizon.inspiration.body}</p>
      </div>
    </RevealSection>
  )
}
