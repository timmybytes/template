import { CustomCssProps } from '@/config'
import React, { FC } from 'react'
import tw, { styled } from 'twin.macro'
import { HeadingAs } from '../Heading'

export type TextAs = 'p' | 'span' | 'strong' | 'em' | HeadingAs

type StyleTypes = {
  bold?: boolean
  underline?: boolean
  italic?: boolean
}

export type TextProps = CustomCssProps &
  StyleTypes & {
    as?: TextAs
    children?: React.ReactNode
  }

/**
 * General typography component
 * @param as HTML text element to render
 * @param bold Render bold font-weight
 * @param underline Render underline
 * @param italic Render italic
 * @returns
 */
export const Text: FC<TextProps> = ({
  as = 'p',
  bold,
  italic,
  underline,
  children,
  customCss,
}) => {
  const As = as
  const StyledText = styled(As)<StyleTypes>(({ bold, underline, italic }) => [
    bold && tw`font-bold`,
    underline && tw`underline`,
    italic && tw`italic`,
  ])
  return (
    <StyledText
      bold={bold}
      underline={underline}
      italic={italic}
      css={customCss}
    >
      {children}
    </StyledText>
  )
}
