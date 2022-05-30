import { Toggle } from '@components/atoms/Toggle'
import Link from 'next/link'
import tw from 'twin.macro'

export const Header = (): React.ReactElement => {
  const links = [
    { url: '/', name: 'Home', icon: '' },
    { url: '/about', name: 'About', icon: '' },
    { url: '/contact', name: 'Contact', icon: '' },
  ]
  return (
    <Container>
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

const Container = tw.div`grid w-full max-height[20vh] grid-template-columns[auto minmax(0, 1fr)] justify-between`
const Logo = tw.div`grid-column[1] p-4`
const Nav = tw.nav`grid-column[2] flex justify-end items-center p-4 gap-4`
