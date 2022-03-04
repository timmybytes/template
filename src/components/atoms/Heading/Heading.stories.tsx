import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'
import { Heading, HeadingProps } from './Heading'

// Includes SectionProps which includes themeName prop
type Component = FC<HeadingProps>

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<Component>

const Template: ComponentStory<Component> = args => (
  <div>
    <Heading {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
