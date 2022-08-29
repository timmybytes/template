import tw from 'twin.macro'
import { TypographyProps } from '@/components/atoms/Text'

/**
 * Function for generating typography styles from TypographyProps with twin css
 */
export const typographyStyles = ({
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
}: TypographyProps) => {
  const styles = [
    light && tw`font-weight[200]`,
    base && tw`font-weight[400]`,
    semibold && tw`font-weight[500]`,
    bold && tw`font-weight[700]`,
    black && tw`font-weight[900]`,
    italic && tw`italic`,
    underline && tw`underline`,
    strike && tw`line-through`,
    center && tw`text-center`,
    left && tw`text-left`,
    right && tw`text-right`,
    uppercase && tw`uppercase`,
    lowercase && tw`lowercase`,
  ]
  return styles
}
