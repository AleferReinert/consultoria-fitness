import { Section } from 'components/Section/Section'
import Link from 'next/link'
import { formatPrice } from 'utils/formatPrice'

export interface SectionPlansProps {
  title: string
  plans: {
    title: string
    price: number
    url: string
    description: string | null
    discount: number | null
  }[]
}

export function SectionPlans({ title, plans }: SectionPlansProps) {
  return (
    <Section data-testid='SectionPlansComponent' title={title}>
      <ul className='grid gap-8 md:grid-cols-3 md:gap-4'>
        {plans.map((plan, index) => {
          const discountSeal = plan.discount + '% OFF'
          const description = plan.description ? plan.description : ''

          return (
            <li key={index} className='bg-neutral-900 rounded-xl text-center p-4 relative'>
              <h3 className='text-2xl font-bold mt-4 mb-6 uppercase md:px-3 lg:px-0'>{plan.title}</h3>
              {/* <div className='mb-1 md:h-8'>
                {plan.discount && (
                  <p aria-label='Preço antigo sem desconto' className='line-through text-2xl text-neutral-400'>
                    {formatPrice(plan.price, null)}
                  </p>
                )}
              </div> */}
              <p aria-label='Preço atual' className='text-4xl font-bold mb-6'>
                {formatPrice(plan.price, plan.discount)}
                <span className='text-xl font-normal text-neutral-400'> /mês</span>
              </p>
              {plan.discount && (
                <p className='absolute bg-white text-black inline-block -top-4 left-0 ml-[50%] translate-x-[-50%] rounded-lg py-2 px-3 text-sm'>
                  {discountSeal}
                </p>
              )}
              <p className='uppercase md:h-6 mb-8 text-sm'>{description}</p>
              <Link
                href={plan.url}
                className='uppercase border-2 rounded-lg py-2 px-5 inline-block transition hover:bg-white hover:text-black'
              >
                Selecionar
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
