import { Box } from 'components/Box/Box'
import { Section } from 'components/Section/Section'
import Image from 'next/image'

export interface SectionBenefitsProps {
  title: string
  benefits: {
    title: string
    description: string
    img: {
      url: string
    }
  }[]
}

export function SectionBenefits({ title, benefits }: SectionBenefitsProps) {
  return (
    <Section data-testid='SectionBenefitsComponent' title={title}>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {benefits.map((benefit, index) => {
          return (
            <li key={index}>
              <Box>
                <Image src={benefit.img.url} alt='' width={220} height={220} className='mb-7 mx-auto aspect-square' />
                <h3 className='font-bold text-2xl text-neutral-200 lg:px-2 xl:px-0'>{benefit.title}</h3>
                <p className='text-neutral-400 my-2'>{benefit.description}</p>
              </Box>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
