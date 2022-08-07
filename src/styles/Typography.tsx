import tw from 'twin.macro'
import { TypographyProps } from '@/components/atoms/Text'

export const typographyStyles = (props: TypographyProps) => {
  const {
    bold,
    italic,
    underline,
    strike,
    center,
    left,
    right,
    uppercase,
    lowercase,
  } = props
  const styles = [
    bold && tw`font-bold`,
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
