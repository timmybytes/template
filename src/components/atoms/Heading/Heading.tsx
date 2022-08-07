import React, { FC } from 'react'
import { CustomCssProps } from '@/config'

export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

export type TypographyProps = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strike?: boolean
  center?: boolean
  left?: boolean
  right?: boolean
  uppercase?: boolean
  lowercase?: boolean
}

export type HeadingProps = CustomCssProps &
  TypographyProps & {
    /**
     * Default 'h2'
     */
    as?: HeadingAs
  }

/**
 * Generic heading component
 */
export const Heading: FC<HeadingProps> = ({
  as = 'h2',
  children,
  customCss,
}) => {
  const As = as
  return <As css={customCss}>{children}</As>
}
