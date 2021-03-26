/* eslint-disable @typescript-eslint/no-var-requires */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss'),
    isProduction ? require('autoprefixer') : '',
    isProduction ? require('cssnano')({ preset: 'default' }) : '',
  ],
};
