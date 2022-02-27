import { Header } from '@components/Header'
import React from 'react'
import tw from 'twin.macro'

export default function Home(): React.ReactNode {
  return (
    <div tw='flex flex-col justify-center items-center'>
      <Header />
      <Main>
        <Section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Section>
        <Section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Section>
        <Section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero,
          reiciendis quas culpa veniam, laudantium aut sequi placeat inventore
          quibusdam non exercitationem quo repellendus dignissimos odit fuga
          suscipit ea dolorum?
        </Section>
      </Main>
    </div>
  )
}

const Main = tw.main`
  flex flex-col justify-center items-center
  w-full height[80vh]`
const Section = tw.section`max-width[65ch] p-4`
