'use client'
import { useQuery } from '@apollo/client'
import { Banner, BannerProps } from 'components/Banner/Banner'
import { Faq, FaqProps } from 'components/Faq/Faq'
import { Footer } from 'components/Footer/Footer'
import { SectionBenefits, SectionBenefitsProps } from 'components/SectionBenefits/SectionBenefits'
import { SectionPlans, SectionPlansProps } from 'components/SectionPlans/SectionPlans'
import { GET_HOME } from 'graphql/Home'
import { EnterpriseProps } from './layout'

export interface HomeProps {
  enterprise: EnterpriseProps
  banner: BannerProps
  sectionBenefits: SectionBenefitsProps
  sectionPlans: SectionPlansProps
  faq: FaqProps
}

export default function Page() {
  const { data, error, loading } = useQuery(GET_HOME)

  if (error) {
    console.log(error.message)
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  const { banner, sectionBenefits, sectionPlans, faq, enterprise }: HomeProps = data.home

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
      <SectionPlans title={sectionPlans.title} showDiscount={sectionPlans.showDiscount} plans={sectionPlans.plans} />
      <Faq title={faq.title} questions={faq.questions} />
      <Footer
        name={enterprise.name}
        phone={enterprise.phone}
        email={enterprise.email}
        facebook={enterprise.facebook}
        instagram={enterprise.instagram}
        linkedin={enterprise.linkedin}
        whatsapp={enterprise.whatsapp}
      />
    </>
  )
}
