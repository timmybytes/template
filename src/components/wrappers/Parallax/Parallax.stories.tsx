import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'
import { Parallax, ParallaxProps } from './Parallax'

// Includes SectionProps which includes themeName prop
type Component = FC<ParallaxProps>

export default {
  title: 'Parallax',
  component: Parallax,
} as ComponentMeta<Component>

const Template: ComponentStory<Component> = args => (
  <div>
    <Parallax {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
