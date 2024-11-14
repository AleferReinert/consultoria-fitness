import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import Home from './page'

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home
}

export default meta
type Story = StoryObj<typeof Home>

export const Default: Story = {
  name: 'Home',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    // await step('<Banner />', async () => {
    //   const BannerComponent = canvas.getByTestId('BannerComponent')
    //   expect(BannerComponent).toBeVisible()
    // })

    // await step('<SectionBenefits />', async () => {
    //   const SectionBenefitsComponent = canvas.getByTestId('SectionBenefitsComponent')
    //   expect(SectionBenefitsComponent).toBeVisible()
    // })

    // await step('<SectionPlans />', async () => {
    //   const SectionPlansComponent = canvas.getByTestId('SectionPlansComponent')
    //   expect(SectionPlansComponent).toBeVisible()
    // })

    // await step('<Faq />', async () => {
    //   const FaqComponent = canvas.getByTestId('FaqComponent')
    //   expect(FaqComponent).toBeVisible()
    // })
  }
}
