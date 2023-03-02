import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        'emptiness': '#fcfcfc',
        'kuroi-black': '#12161e',
        'blue-sari': '#656976',
        'pico-metal': '#c2c3c7',
        'sleet': '#91949b'
      },
      padding: {
        'custom-clamp': 'clamp(92px, 16vh, 200px) 0px',
        '2.25': '9px'
      },
      maxWidth: {
        'xxs': '18.75rem'
      },
      borderRadius: {
        'sm-two': '5px'
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
