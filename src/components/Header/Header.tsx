import tw from 'twin.macro'

type HeaderProps = {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps): React.ReactElement => {
  return (
    <Container>
      <Logo></Logo>
      <Nav></Nav>
      {children}
    </Container>
  )
}

const Container = tw.div`grid`
const Logo = tw.div``
const Nav = tw.nav`flex w-full justify-center items-center p-4`
