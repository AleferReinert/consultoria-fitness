import { Section } from 'components/Section/Section'
import { IoCheckmarkCircle } from 'react-icons/io5'

export interface SectionObjectivesProps {
  title: string
  objectives: {
    objective: string
  }[]
}

export function SectionObjectives({ title, objectives }: SectionObjectivesProps) {
  return (
    <Section data-testid='SectionObjectivesComponent' title={title}>
      <ul className='space-y-3 flex flex-col mx-auto max-w-fit text-lg font-light'>
        {objectives.map((objective, index) => {
          return (
            <li key={index} className='flex gap-3 items-center'>
              <IoCheckmarkCircle className='text-green-400' size={20} />
              {objective.objective}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
