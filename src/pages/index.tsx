import { Header } from '@components/organisms/Header'
import React from 'react'
import tw from 'twin.macro'

export default function Home(): React.ReactNode {
  return (
    <GridWrapper>
      <Header />
      <Main tw=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas
        expedita amet cumque excepturi dolore, consectetur itaque, illum
        dignissimos cupiditate earum quisquam sint facere veniam ab, id optio
        voluptatem. Ratione!
      </Main>
      <Footer>lorem ipsum, 2022</Footer>
    </GridWrapper>
  )
}

const GridWrapper = tw.div`grid grid-template-columns[1fr] justify-center items-center w-full min-h-screen`
const Main = tw.main`flex flex-col justify-center items-center px-8`
const Footer = tw.footer`flex justify-center items-center`
