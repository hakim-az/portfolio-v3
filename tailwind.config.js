/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter Regular', 'sans-serif'],
        InterBold: ['Inter Bold', 'sans-serif'],
        InterMedium: ['Inter Medium', 'sans-serif'],
        InterLight: ['Inter Light', 'sans-serif'],
        FiraCode: ['Fira Code', 'sans-serif'],
      },
      colors: {
        primaryDark: '#0A192F',
        primaryGreen: '#64FFDA',
        secondaryDark: '#112240',
        headingColor: '#CCD6F6',
        textColor: '#8892B0',
      },
    },
  },
  plugins: [],
}
