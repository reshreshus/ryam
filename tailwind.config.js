module.exports = {
  theme: {
    colors: {
      red: {
        DEFAULT: '#F31515'
      },
      blue: {
        dark: '#31448E',
        DEFAULT: '#3C60FD'
      }
    },
    extend: {
      typography (theme) {
        return {
          dark: {
            css: {
              color: theme('colors.white.DEFAULT'),
              a: theme('colors.gray.lighter'),
              strong: { color: theme('colors.white.DEFAULT') },
              'ul > li::before': { backgroundColor: theme('colors.gray.lighter') },
              hr: { borderColor: theme('colors.gray.DEFAULT') },
              blockquote: {
                color: theme('colors.white.DEFAULT'),
                borderLeftColor: theme('colors.gray.DEFAULT')
              },
              h1: { color: theme('colors.white.DEFAULT') },
              h2: { color: theme('colors.white.DEFAULT') },
              h3: { color: theme('colors.white.DEFAULT') },
              h4: { color: theme('colors.white.DEFAULT') },
              code: { color: theme('colors.white.DEFAULT') },
              'a code': { color: theme('colors.white.DEFAULT') },
              pre: {
                color: theme('colors.white.DEFAULT'),
                backgroundColor: theme('colors.gray.DEFAULT')
              },
              thead: {
                color: theme('colors.white.DEFAULT'),
                borderBottomColor: theme('colors.gray.lighter')
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.DEFAULT') }
            }
          }
        }
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography')
  ]
}
