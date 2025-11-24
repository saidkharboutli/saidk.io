export default {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/saidk-io-components/**/*.{js,ts,jsx,tsx}',
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
        lavender: {
          50: '#f9f5ff',
          100: '#f2e8ff',
          200: '#e7d5ff',
          300: '#d4b4fe',
          400: '#bb86fc',
          500: '#a055f7',
          600: '#8a33ea',
          700: '#7522ce',
          800: '#6421a8',
          900: '#531c87',
          950: '#360764',
        },
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
    // Custom variant plugin
    function ({ addVariant }) {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    },
  ],
};
