import type { StoryObj, Meta } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { SectionBenefits } from './SectionBenefits'

const meta: Meta<typeof SectionBenefits> =  {
  title: 'Components/SectionBenefits',
  component: SectionBenefits,
	args: {
    children: 'children'
  }
} 

export default meta
type Story = StoryObj<typeof SectionBenefits>

export const Default: Story = {
		name: 'SectionBenefits',
    play: async ({canvasElement, step}) => {
        const canvas = within(canvasElement)
        const title = canvas.getByRole('heading', { name: 'children' })

        await step('Render heading', () => {
            expect(title).toBeInTheDocument()
        })
    }
}