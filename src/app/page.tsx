import { Banner, BannerProps } from 'components/Banner/Banner'
import { Faq, FaqProps } from 'components/Faq/Faq'
import { Footer } from 'components/Footer/Footer'
import { SectionBenefits, SectionBenefitsProps } from 'components/SectionBenefits/SectionBenefits'
import { SectionObjectives, SectionObjectivesProps } from 'components/SectionObjectives/SectionObjectives'
import { SectionPlans, SectionPlansProps } from 'components/SectionPlans/SectionPlans'
import { GET_HOME } from 'graphql/GetHome'
import { client } from 'utils/client'
import { EnterpriseProps } from './layout'

export interface HomeProps {
  banner: BannerProps
  enterprise: EnterpriseProps
  sectionObjectives: SectionObjectivesProps
  sectionBenefits: SectionBenefitsProps
  sectionPlans: SectionPlansProps
  faq: FaqProps
}

export default async function Page() {
  const { data, error } = await client.query({ query: GET_HOME })

  if (error) {
    console.error(error)
    throw new Error('Ocorreu um erro ao buscar os dados, tente novamente mais tarde.')
  }

  const { banner, sectionBenefits, sectionObjectives, sectionPlans, faq, enterprise }: HomeProps = data.home

  return (
    <>
      <Banner
        title={banner.title}
        description={banner.description}
        label={banner.label}
        url={banner.url}
        floatImg={banner.floatImg}
        backgroundDesktop={banner.backgroundDesktop}
        backgroundMobile={banner.backgroundMobile}
      />
      <SectionObjectives title={sectionObjectives.title} objectives={sectionObjectives.objectives} />
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
