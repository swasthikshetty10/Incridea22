module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        igold: "#9d7643"
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
    fontFamily: {
      nav: ["CinzelDecorative-Regular"],
      // 'display': ['Oswald', ...],
      title: ["Playfair"],
      subheading: ["Playfair"],
      body: ["Poppins-Light"],
    }
  },
  plugins: [],
};
