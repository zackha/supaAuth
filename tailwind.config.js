import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        'emptiness': '#fcfcfc',
        'kuroi-black': '#12161e',
        'blue-sari': '#656976'
      },
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    }
  }
}
