"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

type RevealProps = {
  children: ReactNode
  /** Atraso em segundos para escalonar entradas. */
  delay?: number
  /** Direção de entrada. */
  direction?: "up" | "left" | "right" | "none"
  className?: string
  /** Tag HTML renderizada (default: div). */
  as?: "div" | "section" | "li" | "span"
}

const OFFSET = 28

/**
 * Wrapper de "reveal on scroll" com Framer Motion.
 * Anima a entrada quando o elemento aparece na viewport (uma única vez).
 * Respeita automaticamente a preferência de movimento reduzido do usuário.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion()

  const from =
    direction === "up"
      ? { opacity: 0, y: OFFSET }
      : direction === "left"
        ? { opacity: 0, x: -OFFSET }
        : direction === "right"
          ? { opacity: 0, x: OFFSET }
          : { opacity: 0 }

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : from,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : delay },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Container que escalona (stagger) a entrada dos filhos <Reveal/> ou
 * de elementos motion. Use em grids/listas.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}
