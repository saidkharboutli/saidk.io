/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2600px',
      },
      colors: {
        primary: '#bb86fc',
        secondary: '#818cf8',
        inveterate: '#bf95fc',
        pyyne: '#79a35c',
        cod: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#8a8a8a',
          500: '#6b6b6b',
          600: '#595959',
          700: '#474747',
          800: '#363636',
          900: '#292929',
          950: '#121212',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-3d'),
  ],
};
