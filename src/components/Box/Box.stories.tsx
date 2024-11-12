import type { StoryObj, Meta } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Box } from './Box'

const meta: Meta<typeof Box> =  {
  title: 'Components/Box',
  component: Box,
	args: {
    children: 'children'
  }
} 

export default meta
type Story = StoryObj<typeof Box>

export const Default: Story = {
		name: 'Box',
    play: async ({canvasElement, step}) => {
        const canvas = within(canvasElement)
        const title = canvas.getByRole('heading', { name: 'children' })

        await step('Render heading', () => {
            expect(title).toBeInTheDocument()
        })
    }
}