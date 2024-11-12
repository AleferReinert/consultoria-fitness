import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor } from '@storybook/test'
import HomeComponent from './page'

const meta: Meta<typeof HomeComponent> = {
  title: 'Pages/Home',
  component: HomeComponent
}

export default meta

type Story = StoryObj<typeof HomeComponent>

export const Home: Story = {
  play: async ({ step }) => {
    const about = await waitFor(() => {
      document.getElementById('about')
    })
    const projects = await waitFor(() => document.getElementById('projects'))
    const skills = await waitFor(() => document.getElementById('skills'))
    const certificates = await waitFor(() => document.getElementById('certificates'))
    const contact = await waitFor(() => document.getElementById('contact'))

    await step('Render all sections', async () => {
      waitFor(() => {
        expect(about).toBeVisible()
        expect(projects).toBeVisible()
        expect(skills).toBeVisible()
        expect(certificates).toBeVisible()
        expect(contact).toBeVisible()
      })
    })
  }
}
