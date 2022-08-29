import { CustomCssProps } from '@/config'
import { ThemeContext } from '@/context/ThemeContext'
import { Heading } from '@atoms/Heading'
import { SmallText, Text } from '@atoms/Text'
import Image, { ImageProps } from 'next/future/image'
import { FC, ReactNode, useContext } from 'react'
import tw, { css, styled, theme } from 'twin.macro'

export type SimpleCardProps = CustomCssProps & {
  cardImg?: ImageProps
  heading?: string
  body?: string
  badges?: BadgeProps[]
  cta?: CTAProps
}

/**
 * SimpleCard
 */
export const SimpleCard: FC<SimpleCardProps> = ({
  cardImg,
  heading = 'Lorem ipsum dolor sit amet',
  body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  badges,
  cta,
}) => {
  const { isDark } = useContext(ThemeContext)
  return (
    <Wrapper isDark={isDark}>
      {cardImg && (
        <div tw='relative my-2'>
          <Image
            src={cardImg.src}
            width={cardImg.width}
            height={cardImg.height}
            alt={cardImg.alt}
            css={tw`object-contain`}
          />
        </div>
      )}
      {heading && (
        <Heading bold customCss={tw`text-lg line-height[1.5rem]`}>
          {heading}
        </Heading>
      )}
      {body && <SmallText>{body}</SmallText>}
      <div tw='flex flex-col justify-center items-start md:(flex-row justify-between items-center)'>
        {badges && (
          <div tw='flex my-1'>
            {badges.map((badge, index) => (
              <Badge key={index} bg={badge.bg}>
                {badge.children}
              </Badge>
            ))}
          </div>
        )}
        {cta && (
          <CTA to={cta.to} onClick={cta.onClick}>
            {cta.children}
          </CTA>
        )}
      </div>
    </Wrapper>
  )
}

type BadgeProps = CustomCssProps & {
  children?: ReactNode
  bg?: string
}

/**
 * Badge component
 * @param bg Background color
 */
const Badge: FC<BadgeProps> = ({ children, bg, customCss }) => (
  <Text
    as={'span'}
    customCss={[
      tw`text-white text-xs font-semibold uppercase px-2 py-0.5`,
      css`
        background: ${bg || theme`backgroundColor.green.300`};
      `,
      customCss,
    ]}
  >
    {children}
  </Text>
)

type CTAProps = CustomCssProps & {
  children?: ReactNode
  onClick?: () => void
  to?: string
}

/**
 * CTA component
 * @param onClick onClick handler
 * @param to Link to
 */
const CTA: FC<CTAProps> = ({ to, onClick, children, customCss }) => {
  const ctaStyles = [
    tw`bg-purple-300 text-sm font-semibold text-black uppercase px-8 py-1.5 transition[.15s] hover:(text-white bg-purple-500)`,
  ]
  return (
    <>
      {to ? (
        <a css={[ctaStyles, customCss]} href={to}>
          {children}
        </a>
      ) : (
        <button css={[ctaStyles, customCss]} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}

const Wrapper = styled.div(({ isDark }: { isDark?: boolean }) => [
  tw`p-8 flex flex-col gap-1 transition[.5s] hover:(transform[scale(1.025)])`,
  !isDark && tw`shadow-md hover:(shadow-xl)`,
])
