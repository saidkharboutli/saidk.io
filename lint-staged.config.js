export default {
  '*.{js,jsx,ts,tsx,astro}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.{json,md,css}': ['prettier --write'],
};
