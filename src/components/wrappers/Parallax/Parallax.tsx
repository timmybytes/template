import React, { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { CustomCssProps } from '@/config'
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

/**
 * Parallax
 */

export type ParallaxProps = CustomCssProps & {
  children: ReactNode
  spring?: boolean
  stiffness?: number
  damping?: number
  offset?: number
}

export const Parallax: FC<ParallaxProps> = ({
  children,
  offset = 50,
  spring = false,
  stiffness = 400,
  damping = 90,
  customCss,
}: ParallaxProps) => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useViewportScroll()
  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const springYRange = useSpring(yRange, {
    stiffness: stiffness,
    damping: damping,
  })
  const y = spring ? springYRange : yRange

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      element &&
        setElementTop(
          element?.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? { y: 0 } : { y }}
      css={customCss}
    >
      {children}
    </motion.div>
  )
}
