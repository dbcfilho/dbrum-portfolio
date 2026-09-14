"use client"

import { RevealSection, RichText, SectionHead, useBrummy } from "@/components/brummy/primitives"

/** 01 — o que é · 02 — como começou. */
export default function BrummyStory() {
  const t = useBrummy()

  return (
    <>
      <RevealSection className="bx-shell" ariaLabelledby="bx-what-title">
        <SectionHead index="01" label={t.what.label} heading={t.what.heading} headingId="bx-what-title" />
        <p className="bx-lede">{t.what.lede}</p>

        <div className="bx-what-grid">
          {t.what.cards.map((card) => (
            <article className="bx-what-card" key={card.k}>
              <h3>{card.k}</h3>
              <p>
                <RichText text={card.body} />
              </p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="bx-shell" ariaLabelledby="bx-origin-title">
        <SectionHead index="02" label={t.origin.label} heading={t.origin.heading} headingId="bx-origin-title" />

        <div className="bx-origin">
          <dl className="bx-meta-col">
            {t.origin.meta.map((item) => (
              <div key={item.k}>
                <dt>{item.k}</dt>
                <dd>{item.v}</dd>
              </div>
            ))}
          </dl>

          <div className="bx-prose">
            {t.origin.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  )
}
