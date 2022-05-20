import { CustomCssProps } from '@/config'
import Link from 'next/link'
import { FC } from 'react'
import tw from 'twin.macro'

type LogoProps = CustomCssProps & {
  color?: string
  height?: string
  width?: string
}

const Logo: FC<LogoProps> = ({
  color = '#D44D5C',
  width = 550,
  height = 54,
  customCss,
}) => {
  return (
    <LogoContainer css={customCss}>
      <svg
        width={width}
        height={height}
        viewBox='0 0 550 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M105.56 1V52.8H93.5L70.63 25.24V52.84H56.27V1H68.34L91.2 28.64V1H105.56Z'
          fill={color}
        />
        <path d='M107.7 1H122.36V52.8H107.7V1Z' fill={color} />
        <path
          d='M171.35 52.84L171.2 25.38L157.88 47.73H151.36L138.12 26.12V52.84H124.57V1H136.64L154.84 30.89L172.6 1H184.67L184.81 52.8L171.35 52.84Z'
          fill={color}
        />
        <path
          d='M221.66 42.78H199.76L195.69 52.84H180.74L203.61 1H218L241 52.84H225.73L221.66 42.78ZM217.37 32L210.71 15.42L204.05 32H217.37Z'
          fill={color}
        />
        <path d='M236.91 1H251.56V41.22H276.28V52.84H236.91V1Z' fill={color} />
        <path
          d='M333.85 20.2C333.85 31.97 324.97 39.3 310.85 39.3H301.85V52.84H287.15V1H310.83C325 1 333.85 8.36 333.85 20.2ZM319.05 20.2C319.05 15.39 316.05 12.58 309.94 12.58H301.8V27.75H309.94C316 27.75 319.05 24.94 319.05 20.2Z'
          fill={color}
        />
        <path
          d='M330.81 26.94C330.81 11.4 343 0 359.6 0C376.2 0 388.38 11.4 388.38 26.94C388.38 42.48 376.17 53.88 359.6 53.88C343.03 53.88 330.81 42.48 330.81 26.94ZM373.58 26.94C373.58 17.94 367.44 12.14 359.58 12.14C351.72 12.14 345.58 17.98 345.58 26.94C345.58 35.9 351.72 41.74 359.58 41.74C367.44 41.74 373.58 35.89 373.58 26.94Z'
          fill={color}
        />
        <path d='M387.86 1H402.52V41.22H427.23V52.84H387.86V1Z' fill={color} />
        <path d='M424.79 1H439.44V52.8H424.79V1Z' fill={color} />
        <path
          d='M452.69 12.66H436.77V1H483.18V12.66H467.34V52.84H452.69V12.66Z'
          fill={color}
        />
        <path d='M480.43 1H495.09V52.8H480.43V1Z' fill={color} />
        <path
          d='M517.29 34L511.81 39.85V52.85H497.3V1H511.81V22.57L531.87 1H548L526.83 24L549.11 52.86H532.11L517.29 34Z'
          fill={color}
        />
        <path
          d='M19.32 11.11H41.22L45.29 1H60.29L37.37 52.84H22.94L0 1H15.25L19.32 11.11ZM23.61 21.91L30.27 38.49L36.93 21.91H23.61Z'
          fill={color}
        />
      </svg>
    </LogoContainer>
  )
}

const LogoContainer = tw.div`grid-column[1] p-4`

export const Header = (): React.ReactElement => {
  const links = [
    { url: '/', name: 'Home', icon: '' },
    { url: '/about', name: 'About', icon: '' },
    { url: '/contact', name: 'Contact', icon: '' },
  ]
  return (
    <Container>
      <Logo width='200' color='#000' />
      <Nav>
        {links.map((link, idx) => (
          <Link key={idx} href={link.url}>
            {link.name}
          </Link>
        ))}
      </Nav>
    </Container>
  )
}

const Container = tw.div`grid w-full max-height[20vh] grid-template-columns[auto minmax(0, 1fr)] justify-between`
const Nav = tw.nav`grid-column[2] flex justify-end items-center p-4 gap-4`
