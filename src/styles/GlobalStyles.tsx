import { ThemeContext } from '@/context/ThemeContext'
import { Global } from '@emotion/react'
import { useContext } from 'react'
import tw, { css, GlobalStyles as BaseStyles, theme } from 'twin.macro'

const GlobalStyles = () => {
  const { isDark } = useContext(ThemeContext)
  const customStyles = css({
    body: {
      WebkitTapHighlightColor: theme`colors.purple.500`,
      background: isDark ? theme`colors.brandBlack` : theme`colors.brandWhite`,
      color: isDark ? theme`colors.brandWhite` : theme`colors.brandBlack`,
      transition: theme`transitions.basic`,
      fontFamily: theme`fontFamily`,
      ...tw`antialiased`,
    },
  })
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  )
}

export default GlobalStyles
