import { Container } from 'components/Container/Container'
import { ReactNode } from 'react'
import { removeTags } from 'utils/removeTags'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ children, title }: SectionProps) {
  return (
    <section className='mb-10'>
      <Container>
        <h2
          className='text-center text-3xl font-heading lg:text-4xl font-bold text-white py-10 [&_strong]:text-primary-theme'
          dangerouslySetInnerHTML={{ __html: removeTags(title, ['p']) }}
        />
        {children}
      </Container>
    </section>
  )
}
