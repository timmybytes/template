import React, { FC } from 'react'
import { CustomCssProps } from '@/config'
import { typographyStyles } from '@/styles/Typography'

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
 * @param bold Render bold font-weight
 * @param underline Render underline
 * @param italic Render italic
 * @param strike Render strike through
 * @param center Render text-center
 * @param left Render text-left
 * @param right Render text-right
 * @param uppercase Render uppercase
 * @param lowercase Render lowercase
 * @returns
 */
export const Heading: FC<HeadingProps> = ({
  as = 'h2',
  bold,
  italic,
  underline,
  strike,
  center,
  left,
  right,
  uppercase,
  lowercase,
  children,
  customCss,
}) => {
  const As = as
  return (
    <As
      css={[
        typographyStyles({
          bold,
          italic,
          underline,
          strike,
          center,
          left,
          right,
          uppercase,
          lowercase,
        }),
        customCss,
      ]}
    >
      {children}
    </As>
  )
}
