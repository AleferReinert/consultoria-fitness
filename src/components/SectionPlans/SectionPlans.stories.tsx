import type { StoryObj, Meta } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SectionPlans } from './SectionPlans'

const meta: Meta<typeof SectionPlans> =  {
  title: 'Components/SectionPlans',
  component: SectionPlans,
	args: {
    children: 'children'
  }
} 

export default meta
type Story = StoryObj<typeof SectionPlans>

export const Default: Story = {
		name: 'SectionPlans',
    play: async ({canvasElement, step}) => {
        const canvas = within(canvasElement)
        const title = canvas.getByRole('heading', { name: 'children' })

        await step('Render heading', () => {
            expect(title).toBeInTheDocument()
        })
    }
}