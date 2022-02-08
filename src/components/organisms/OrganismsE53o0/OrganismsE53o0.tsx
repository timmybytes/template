import tw from 'twin.macro'
import React, { FC } from 'react'
import { CustomCssProps } from '~/config'

export type Props = CustomCssProps & {
  children?: React.ReactNode
}

/**
 * OrganismsE53o0
 */

export const OrganismsE53o0: FC<OrganismsE53o0Props> = ({
  children,
  customCss,
}) => {
  return <Container>{children}</Container>
}

const Container = tw.div``
