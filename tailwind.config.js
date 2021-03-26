module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./_templates/**/*.{html,njk}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
