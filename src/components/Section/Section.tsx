import { Container } from 'components/Container/Container'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ children, title }: SectionProps) {
  return (
    <section className='mb-10'>
      <Container>
        <h2 className='text-center text-2xl uppercase lg:text-4xl font-bold py-10 text-neutral-200'>{title}</h2>
        {children}
      </Container>
    </section>
  )
}
