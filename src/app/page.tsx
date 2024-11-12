'use client'
import { useQuery } from '@apollo/client'
import { Banner, BannerProps } from 'components/Banner/Banner'
import { SectionBenefits, SectionBenefitsProps } from 'components/SectionBenefits/SectionBenefits'
import { SectionPlans, SectionPlansProps } from 'components/SectionPlans/SectionPlans'
import { GET_HOME } from 'graphql/Home'

interface HomeProps {
  enterprise: {
    name: string
    phone: string
  }
  banner: BannerProps
  sectionBenefits: SectionBenefitsProps
  sectionPlans: SectionPlansProps
}

export default function Page() {
  const { data, error, loading } = useQuery(GET_HOME)

  if (error) {
    console.log(error.message)
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  const { banner, sectionBenefits, sectionPlans }: HomeProps = data.home

  return (
    <>
      <Banner
        title={banner.title}
        description={banner.description}
        label={banner.label}
        url={banner.url}
        background={banner.background}
        floatImg={banner.floatImg}
      />
      <SectionBenefits title={sectionBenefits.title} benefits={sectionBenefits.benefits} />
      <SectionPlans title={sectionPlans.title} plans={sectionPlans.plans} />
    </>
  )
}
