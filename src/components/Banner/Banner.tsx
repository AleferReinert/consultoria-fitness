import { Container } from 'components/Container/Container'
import Image from 'next/image'
import Link from 'next/link'

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
          <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl max-w-[28rem] lg:max-w-[38rem]'>{title}</h2>
          <div
            data-testid='banner-description'
            className='flex flex-col gap-5 mt-5 mb-10 md:w-[24rem] lg:w-[34rem]'
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <Link
            href={url}
            className='uppercase inline-block border-2 border-white rounded-xl py-3 px-6 mb-10 font-bold transition hover:bg-white hover:text-black'
          >
            {label}
          </Link>
        </div>
        <div className='aspect-square w-[45%] lg:w-[43%] xl:w-[40%] max-w-[520px] hidden absolute bottom-0 right-0 md:block'>
          <Image src={floatImg.url} alt='' fill priority />
        </div>
      </Container>
      <div className='absolute inset-0 top-auto h-20 bg-gradient-to-t from-black to-transparent' />
    </section>
  )
}
