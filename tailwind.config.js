/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
      colors: {
        "background": "#1A1A1A",
        "light-background": "#212121",
        "lighter-background": "#202020",
        "dark-background": "#171717",
        "primary": "#20CE70",
        "secondary": "#CC00FF",
        "text-color": "rgba(255, 255, 255, 0.6)",
        "text-light": "#ffffff",
        "grey": "#292929",
        "border": "#303030",
        "red": "#FF4232",
        "grey-100": "#242424",
        'white-5': 'rgba(255, 255, 255, 0.05)',

      }
    },
  },
  plugins: [],
};
