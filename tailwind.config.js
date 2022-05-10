module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['"VC Henrietta Trial", FogTwoNo5, "Times New Roman", Times, serif'],
      'body': ['neue metana,"Helvetica Neue", Arial']
    },
    extend: {
      colors: {
        'tomato' : "#ff6347",
        'offwhite0' : "#f5f6f8",
        'offwhite1' : '#D6DBE4',
        'offwhite2' : '#e3e7ed',
        'offwhite3' : '#f6f7f9',
        'offwhite4' : '#98A5BC',
        'offwhite5' : '#798AA8',
        'offwhite6' : '#5E7090',
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
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
