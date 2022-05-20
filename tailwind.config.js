module.exports = {
  important: false,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['"VC Henrietta Trial", sans'],
      'body': ['"Chivo","Helvetica Neue", Arial'],
      'accent' : ['"Chivo","Helvetica Neue", Arial'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'tomato' : "#ff6347",
        'offwhite0' : "#f5f6f8",
        'offwhite1' : '#D6DBE4',
        'offwhite2' : '#e3e7ed',
        'offwhite3' : '#C4CCD9',
        'azure' : '#306EBF',
        black : '#111626',
        white: '#f5f6f8'
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      flex: {
        'left': "0 0 20%",
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
