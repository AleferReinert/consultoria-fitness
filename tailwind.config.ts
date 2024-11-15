import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

// Definir cores dos temas aqui
export const theme = {
  primary: '#FF006B',
  secondary: '#141414', // background
  heading: colors.slate[800],
  paragraph: colors.neutral[50]
}

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'primary-theme': 'var(--primary-theme)',
        'secondary-theme': 'var(--secondary-theme)',
        'heading-theme': 'var(--heading-theme)',
        'paragraph-theme': 'var(--paragraph-theme)'
      },
      boxShadow: {
        primary: '0 0 40px 0 #F5087B'
      },
      fontFamily: {
        heading: ['var(--font-merienda)'],
        sans: ['var(--font-inter)']
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--primary-theme': theme.primary,
          '--secondary-theme': theme.secondary,
          '--heading-theme': theme.heading,
          '--paragraph-theme': theme.paragraph
        }
      })
    })
  ]
} satisfies Config
