"use client"

import { motion } from "framer-motion"

interface DiagramNode {
  title: string
  lines: string[]
  delivery: string
}

interface PlatformDiagramProps {
  coreLabel: string
  coreLines: string[]
  nodes: DiagramNode[]
  reduce: boolean
}

/**
 * Diagrama da plataforma (spec-design-registro.md, Seção 2 e Fase 4).
 * Núcleo único ramificando em três verticais — o ponto focal do herói.
 * As linhas são um SVG inline com pathLength=1, o que permite animar o
 * traço (stroke-dashoffset) sem calcular o comprimento real do path.
 * Os três nós ficam num grid de 3 colunas iguais; como o núcleo fica
 * centralizado sobre essa mesma largura, seus centros caem exatamente
 * em 1/6, 1/2 e 5/6 do viewBox — sem precisar medir posições em JS.
 */
export function PlatformDiagram({ coreLabel, coreLines, nodes, reduce }: PlatformDiagramProps) {
  const lineTransition = { duration: reduce ? 0 : 0.6, ease: [0.65, 0, 0.35, 1] as const, delay: reduce ? 0 : 0.12 }

  const nodeVariants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] as const, delay: reduce ? 0 : 0.4 + i * 0.06 },
    }),
  }

  return (
    <div className="w-full">
      {/* Núcleo */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-fit max-w-[220px] border border-rule bg-paper px-4 py-3 text-center rounded-sm"
      >
        <p className="label text-ink">{coreLabel}</p>
        <div className="mt-1.5 space-y-0.5">
          {coreLines.map((line) => (
            <p key={line} className="text-xs text-ink-2 font-mono">
              {line}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Conectores — desktop (árvore) */}
      <svg
        viewBox="0 0 120 56"
        preserveAspectRatio="none"
        className="hidden sm:block w-full h-14 text-rule"
        aria-hidden
      >
        <motion.path
          d="M60 0 V20 M20 20 H100 M20 20 V56 M60 20 V56 M100 20 V56"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          pathLength={1}
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={lineTransition}
        />
      </svg>

      {/* Conector — mobile (linha única) */}
      <svg viewBox="0 0 2 32" preserveAspectRatio="none" className="sm:hidden w-px h-8 mx-auto text-rule" aria-hidden>
        <motion.path
          d="M1 0 V32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          pathLength={1}
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={lineTransition}
        />
      </svg>

      {/* Verticais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {nodes.map((node, i) => (
          <motion.div
            key={node.title}
            custom={i}
            initial="hidden"
            animate="show"
            variants={nodeVariants}
            className="text-center"
          >
            <div className="border border-rule bg-paper px-4 py-3 rounded-sm">
              <p className="label text-ink">{node.title}</p>
              <div className="mt-1.5 space-y-0.5">
                {node.lines.map((line) => (
                  <p key={line} className="text-xs text-ink-2 font-mono">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <p className="label mt-2 text-ledger">{node.delivery}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
