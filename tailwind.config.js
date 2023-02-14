import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        'emptiness': '#fcfcfc',
        'kuroi-black': '#12161e'
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
