import type React from "react"

/**
 * Faixa de 2 colunas com o rótulo em monoespaçada + as 10 colunas de conteúdo.
 * Assinatura estrutural do spec Registro: repete em toda seção da página.
 */
export function SectionMeta({
  label,
  meta,
  children,
}: {
  label: string
  meta?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-12 gap-s-3">
      <div className="col-span-12 md:col-span-2">
        <p className="label text-gray-500">{label}</p>
        {meta && <p className="label text-gray-600 mt-1">{meta}</p>}
      </div>
      <div className="col-span-12 md:col-span-10 min-w-0">{children}</div>
    </div>
  )
}
