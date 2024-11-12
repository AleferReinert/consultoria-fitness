import type { StoryObj, Meta } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> =  {
  title: 'Components/Container',
  component: Container,
	args: {
    children: 'children'
  }
} 

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
		name: 'Container',
    play: async ({canvasElement, step}) => {
        const canvas = within(canvasElement)
        const title = canvas.getByRole('heading', { name: 'children' })

        await step('Render heading', () => {
            expect(title).toBeInTheDocument()
        })
    }
}