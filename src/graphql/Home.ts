import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query Home {
    home {
      enterprise {
        name
        phone
        email
      }
      banner {
        background {
          url
        }
        floatImg {
          url
          width
          height
        }
        title
        description
        label
        url
      }
      sectionBenefits {
        title
        benefits {
          title
          description
          img {
            url
          }
        }
      }
      sectionPlans {
        title
        plans {
          title
          price
          discount
          description
        }
      }
      faq {
        title
        question {
          question
          answer
        }
      }
    }
  }
`
