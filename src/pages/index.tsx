import Image from 'next/image'
import { Heading } from '@components/atoms/Heading'
import { Header } from '@components/organisms/Header'
import { Parallax } from '@components/wrappers/Parallax'
import React from 'react'
import tw from 'twin.macro'

export default function Home(): React.ReactNode {
  return (
    <div tw='flex flex-col justify-center items-center'>
      <Header />
      <Main tw='relative'>
        <Heading customCss={tw`font-extrabold text-4xl`}>Some Text</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Text>
        <Heading customCss={tw`font-extrabold text-4xl`}>
          Parallax (with spring)
        </Heading>
        <Parallax spring offset={-100}>
          <img
            src='https://images.unsplash.com/photo-1646734104317-4bcd21298b3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='coffee'
            tw='max-width[20vw]'
          />
        </Parallax>
      </Main>
    </div>
  )
}

const Main = tw.main`
  flex flex-col justify-center items-center
  w-full height[180vh]`
const Text = tw.p`max-width[65ch] p-4`
