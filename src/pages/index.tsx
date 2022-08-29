import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'
import { SmallText } from '@atoms/Text'
import { SimpleCard } from '@components/molecules/SimpleCard'
import tw, { theme } from 'twin.macro'
import { Header } from '@components/organisms/Header'
import React from 'react'

export default function Home(): React.ReactNode {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <GridWrapper>
      <Header />
      <Main tw=''>
        <Section>
          <Heading customCss={tw`font-black text-4xl mb-4`}>
            Lorem ipsum dolor sit amet.
          </Heading>
          <SmallText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            deserunt eum, nesciunt possimus est earum totam, ab at, sapiente
            aliquam pariatur aperiam laudantium accusamus modi quia porro
            laborum vitae commodi! Accusamus, pariatur numquam et mollitia
            officiis eius temporibus quo dicta provident est iste veritatis
            repellendus nulla error minima! Eum sint dolorem quod et, tempore
            esse id enim vero nesciunt deserunt? Autem, perferendis commodi?
            Praesentium numquam asperiores, suscipit ex nesciunt et cumque eum
            neque, ab tempora maiores beatae sunt consectetur natus, nam illo in
            excepturi. Expedita ab impedit doloremque maxime nam.
          </SmallText>
          <Heading as='h3' customCss={tw`text-2xl font-bold`}>
            Cards
          </Heading>
          <CardRow>
            <SimpleCard />
            <SimpleCard />
          </CardRow>
          <SimpleCard
            cardImg={{
              src: 'https://picsum.photos/800/400',
              alt: 'random',
              width: '800',
              height: '400',
            }}
            heading='Heading for simple card'
            body=' Autem, perferendis commodi? Praesentium numquam asperiores, suscipit ex nesciunt et cumque eum neque.'
            badges={[
              { children: 'badge', bg: theme`backgroundColor.pink.300` },
              { children: 'badge', bg: theme`backgroundColor.blue.300` },
            ]}
            cta={{ children: 'Try it', onClick: handleClick }}
          />
          <SimpleCard
            cardImg={{
              src: 'https://picsum.photos/800/400',
              alt: 'random',
              width: '800',
              height: '400',
            }}
            heading='Heading for simple card'
            body=' Autem, perferendis commodi? Praesentium numquam asperiores, suscipit ex nesciunt et cumque eum neque.'
            badges={[
              { children: 'badge', bg: theme`backgroundColor.indigo.300` },
              { children: 'badge', bg: theme`backgroundColor.green.300` },
              { children: 'badge', bg: theme`backgroundColor.pink.300` },
              { children: 'badge', bg: theme`backgroundColor.blue.300` },
            ]}
            cta={{ children: 'Try it', to: '#' }}
          />
        </Section>
        <Section>
          <Heading customCss={tw`font-black text-4xl mb-4`}>Some Text</Heading>
          <Text bold>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            natus libero, optio quibusdam magni odio provident molestiae illo
            excepturi animi reprehenderit nesciunt minus perferendis dolorem
            iste, repellendus debitis? Magnam, corrupti.
          </Text>
          <Text underline>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            vero, reiciendis quas culpa veniam, laudantium aut sequi placeat
            inventore quibusdam non exercitationem quo repellendus dignissimos
            odit fuga suscipit ea dolorum?
          </Text>
          <Text italic>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            vero, reiciendis quas culpa veniam, laudantium aut sequi placeat
            inventore quibusdam non exercitationem quo repellendus dignissimos
            odit fuga suscipit ea dolorum?
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            vero, reiciendis quas culpa veniam, laudantium aut sequi placeat
            inventore quibusdam non exercitationem quo repellendus dignissimos
            odit fuga suscipit ea dolorum?
          </Text>
        </Section>
      </Main>
      <Footer>lorem ipsum, 2022</Footer>
    </GridWrapper>
  )
}

const GridWrapper = tw.div`grid grid-template-columns[1fr] justify-center items-center w-full`
const Main = tw.main`flex flex-col justify-center items-center px-8`
const Section = tw.section`max-width[1000px] margin[0 auto] w-full flex flex-col gap-2 justify-center items-center my-4`
const Footer = tw.footer`flex justify-center items-center`
const CardRow = tw.div`flex flex-col gap-2 md:flex-row`
