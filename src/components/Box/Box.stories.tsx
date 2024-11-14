import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  args: {
    children: <p>children</p>
  }
}

export default meta
type Story = StoryObj<typeof Box>

export const Default: Story = {
  name: 'Box',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Children', () => {
      const children = canvas.getByRole('paragraph')
      expect(children).toHaveTextContent('children')
    })
  }
}
