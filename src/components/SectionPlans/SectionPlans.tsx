import { Section } from 'components/Section/Section'
import Link from 'next/link'

export interface SectionPlansProps {
  title: string
  plans: {
    title: string
    description: string
    price: number
    discount?: number
  }[]
}

export function SectionPlans({ title, plans }: SectionPlansProps) {
  function priceWithDiscount(price: number, discount: number | undefined) {
    if (discount) {
      return Math.round((price / 100) * (100 - discount)) + ',00'
    }
    return price + ',00'
  }

  return (
    <Section title={title}>
      <ul className='grid gap-8 md:grid-cols-3 md:gap-4'>
        {plans.map((plan, index) => {
          return (
            <li key={index} className='bg-neutral-900 rounded-xl text-center p-4 relative'>
              <h3 className='text-2xl font-bold mt-4 mb-6 uppercase md:px-3 lg:px-0'>{plan.title}</h3>

              <p className='line-through text-2xl text-neutral-400 mb-1 md:h-8'>
                {plan.discount && `R$ ${plan.price}`}
              </p>
              <p className='text-4xl font-bold mb-6'>
                R$ {priceWithDiscount(plan.price, plan.discount)}
                <span className='text-xl font-normal'> /mês</span>
              </p>
              {plan.discount && (
                <p className='absolute bg-white text-black inline-block -top-4 left-0 ml-[50%] translate-x-[-50%] rounded-lg py-2 px-3 text-sm'>
                  {plan.discount + '% OFF'}
                </p>
              )}
              <p className='uppercase md:h-6 mb-8 text-sm'>{plan.description}</p>
              <Link href='todo' className='uppercase border-2 rounded-lg py-2 px-5 inline-block'>
                Selecionar
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
