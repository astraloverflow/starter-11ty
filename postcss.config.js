if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('cssnano')({
        preset: 'default',
      }),
    ],
  };
} else {
  module.exports = {
    plugins: [require('tailwindcss')],
  };
}
