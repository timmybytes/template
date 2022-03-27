import { Heading } from '@components/atoms/Heading'
import { Header } from '@components/organisms/Header'
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
      </Main>
    </div>
  )
}

const Main = tw.main`
  flex flex-col justify-center items-center
  w-full height[180vh]`
const Text = tw.p`max-width[65ch] p-4`
