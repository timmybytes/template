import { CustomCssProps } from '@/config'
import { motion, MotionProps } from 'framer-motion'
import { FC, ReactNode } from 'react'

export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

export type HeadingProps = CustomCssProps &
  MotionProps & {
    /**
     * Default 'h2'
     */
    as?: HeadingAs
    children?: ReactNode
  }

/**
 * Generic heading component with motion
 */
export const Heading: FC<HeadingProps> = ({
  as = 'h2',
  children,
  initial,
  animate,
  exit,
  transition,
  variants,
  customCss,
}) => {
  const As = motion[as]
  return (
    <As
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      variants={variants}
      css={customCss}
    >
      {children}
    </As>
  )
}
