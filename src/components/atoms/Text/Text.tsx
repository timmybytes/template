import { CustomCssProps } from '@/config'
import { typographyStyles } from '@/styles/Typography'
import React, { FC } from 'react'
import { HeadingAs } from '../Heading'

export type TextAs = 'p' | 'span' | 'strong' | 'em' | HeadingAs

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

export type TextProps = CustomCssProps &
  TypographyProps & {
    as?: TextAs
    children?: React.ReactNode
  }

/**
 * General typography component
 * @param as HTML text element to render
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
export const Text: FC<TextProps> = ({
  as = 'p',
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

export const TextTest = ({ children }) => <p>{children}</p>
