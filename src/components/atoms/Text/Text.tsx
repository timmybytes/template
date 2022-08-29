import { CustomCssProps } from '@/config'
import { typographyStyles } from '@/styles/Typography'
import React, { FC, ReactNode } from 'react'
import tw from 'twin.macro'
import { HeadingAs } from '../Heading'

export type TextAs = 'p' | 'span' | 'strong' | 'em' | HeadingAs

export type TypographyProps = {
  /**
   * Font weights
   */
  light?: boolean
  base?: boolean
  semibold?: boolean
  bold?: boolean
  black?: boolean
  /**
   * Text transformations
   */
  italic?: boolean
  underline?: boolean
  strike?: boolean
  /**
   * Text alignment
   */
  center?: boolean
  left?: boolean
  right?: boolean
  /**
   * Text casing
   */
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
 * @param light Render 200 font-weight
 * @param base Render 400 font-weight
 * @param semibold Render 500 font-weight
 * @param bold Render 700 font-weight
 * @param black Render 900 font-weight
 * @param italic Render italic
 * @param underline Render underline
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
  light,
  base,
  semibold,
  bold,
  black,
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
          light,
          base,
          semibold,
          bold,
          black,
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

export type SmallTextProps = CustomCssProps & {
  children?: ReactNode
}

/**
 * Small text component
 */
export const SmallText: FC<SmallTextProps> = ({ children, customCss }) => (
  <Text customCss={[tw`text-sm`, customCss]}>{children}</Text>
)
