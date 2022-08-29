import { ThemeContext } from '@/context/ThemeContext'
import { Toggle } from '@components/atoms/Toggle'
import Link from 'next/link'
import { useContext } from 'react'
import tw, { styled } from 'twin.macro'

export const Header = (): React.ReactElement => {
  const { isDark } = useContext(ThemeContext)
  const links = [
    { url: '/', name: 'Home', icon: '' },
    { url: '/about', name: 'About', icon: '' },
    { url: '/contact', name: 'Contact', icon: '' },
  ]
  return (
    <Container isDark={isDark}>
      <Logo>Logo</Logo>
      <Nav>
        {links.map((link, idx) => (
          <Link key={idx} href={link.url}>
            {link.name}
          </Link>
        ))}
        <Toggle />
      </Nav>
    </Container>
  )
}

const Container = styled.div(({ isDark }: { isDark?: boolean }) => [
  tw`grid w-full max-height[20vh] grid-template-columns[auto minmax(0, 1fr)] justify-between sticky top-0 z-index[1]`,
  isDark
    ? tw`bg-brandBlack text-brandWhite`
    : tw`bg-brandWhite text-brandBlack`,
])
const Logo = tw.div`grid-column[1] p-4 flex justify-center items-center`
const Nav = tw.nav`grid-column[2] flex justify-end items-center p-4 gap-4`
