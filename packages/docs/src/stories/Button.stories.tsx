import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    size: 'big',
  },
}
