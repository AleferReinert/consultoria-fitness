import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import Image from 'next/image'
import { removeTags } from 'utils/removeTags'

export interface BannerProps {
  title: string
  description: string
  label: string
  url: string
  background: {
    url: string
  }
  floatImg: {
    url: string
    width: number
    height: number
  }
}

export function Banner({ title, description, background, floatImg, label, url }: BannerProps) {
  return (
    <section
      data-testid='BannerComponent'
      className='relative bg-cover'
      style={{ backgroundImage: `url(${background.url})` }}
    >
      <Container className='relative py-16 md:py-20 lg:py-28'>
        <div className='z-10 relative'>
          <h2
            className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-[28rem] lg:max-w-[38rem] [&_strong]:text-primary-theme [&_i]:font-heading'
            dangerouslySetInnerHTML={{ __html: removeTags(title, ['p']) }}
          />
          <div
            data-testid='banner-description'
            className='flex flex-col gap-5 mt-5 mb-10 md:w-[24rem] lg:w-[34rem]'
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <ButtonLink href={url}>{label}</ButtonLink>
        </div>
        <div className='aspect-square w-[45%] lg:w-[43%] xl:w-[40%] max-w-[520px] hidden absolute bottom-0 right-0 md:block'>
          <Image src={floatImg.url} alt='' fill priority />
        </div>
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-secondary-theme to-transparent' />
    </section>
  )
}
