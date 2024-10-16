/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        "yellowish-orange": "#dd6f1d",
        "dark-green": "#074456",
        "lighter-gold": "#fffbf1",
        "dark-gold": "#c86011",
        white: "#fff",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
