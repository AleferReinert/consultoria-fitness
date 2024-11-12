import type { StoryObj, Meta } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Section } from './Section'

const meta: Meta<typeof Section> =  {
  title: 'Components/Section',
  component: Section,
	args: {
    children: 'children'
  }
} 

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
		name: 'Section',
    play: async ({canvasElement, step}) => {
        const canvas = within(canvasElement)
        const title = canvas.getByRole('heading', { name: 'children' })

        await step('Render heading', () => {
            expect(title).toBeInTheDocument()
        })
    }
}