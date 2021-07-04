const colors = require('tailwindcss/colors') 

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:
    {
      nav:"#1e3932",
      background:"#D4E9E2",
      white:colors.white,
      gray:colors.gray,
      black:colors.black,
      pink:colors.pink,
      red:colors.red,
      green:colors.green,
      blue:colors.blue,
      yellow:colors.yellow,
    },
    extend: {
      // backgroundImage: theme => ({
      //   'Hero-section': "url('./img/mobile.PNG')",
      //  }),
      animationDirection: { // defaults to these values
        'default': 'normal',
        'normal': 'normal',
        'reverse': 'reverse',
        'alternate': 'alternate',
        'alternate-reverse': 'alternate-reverse',
      },
    padding:
    {
      four:"133%"
    },
    
    borderWidth:
    {
      '12':'12px'
    },
    width: {
    47.5:"11.875rem",
      140.25:"35.0625rem",
      81.25:"20.315rem"
    },
    margin:
    {
      53.4:"13.353rem",
    },
    fontSize:
    {
      14:"1.75rem",
      4.75:"1.1875rem"
    },
   letterSpacing: {
      widest: '0.15em',
    },
  },
},
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fill: ['hover', 'focus'],
    },
  },
  plugins: [  require('@tailwindcss/aspect-ratio')],
}
