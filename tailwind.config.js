module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      gridTemplateColumns: {
        layout: '150px 1fr',
      },
    },
  },
  plugins: [],
};
