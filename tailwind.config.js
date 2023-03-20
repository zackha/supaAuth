import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        'fcfcfc': '#fcfcfc',
        '12161e': '#12161e',
        '656976': '#656976',
        'c2c3c7': '#c2c3c7',
        '91949b': '#91949b',
        '232730': '#232730',
        '575a64': '#575a64',
      },
      padding: {
        '2.25': '0.563rem',
      },
      maxWidth: {
        '75': '18.75rem',
      },
      fontFamily: {
        sans: ['SuisseIntl', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
