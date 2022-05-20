import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'
import { Header } from '@components/organisms/Header'
import React from 'react'
import tw from 'twin.macro'

export default function Home(): React.ReactNode {
  return (
    <div tw='flex flex-col justify-center items-center'>
      <Header />
      <Main tw='relative'>
        <Heading customCss={tw`font-extrabold text-4xl`}>Some Text</Heading>
        <Text bold>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          natus libero, optio quibusdam magni odio provident molestiae illo
          excepturi animi reprehenderit nesciunt minus perferendis dolorem iste,
          repellendus debitis? Magnam, corrupti.
        </Text>
        <Text underline>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Text>
        <Text italic>
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
  w-full height[95vh]`
