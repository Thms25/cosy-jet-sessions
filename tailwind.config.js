/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cjsWhite: '#eae5dc',
        cjsPink: '#DF9C76',
        cjsYellow: '#d59429',
        cjsBrown: '#b1582d',
      },
      fontFamily: {
        subtitle: ['Montserrat', 'sans-serif'],
        title: ['DM Serif Display', 'serif'],
        main: ['Lato', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: 'clamp(0.75rem, calc(0.75rem + 0.5vw), 0.875rem)', // 12px to 14px
        sm: 'clamp(0.875rem, calc(0.875rem + 0.5vw), 1rem)', // 14px to 16px
        md: 'clamp(1rem, calc(1rem + 0.5vw), 1.125rem)', // 16px to 18px
        lg: 'clamp(1.125rem, calc(1.125rem + 0.5vw), 1.25rem)', // 18px to 20px
        xl: 'clamp(1.25rem, calc(1.25rem + 0.5vw), 1.375rem)', // 20px to 22px
        '2xl': 'clamp(1.375rem, calc(1.375rem + 0.5vw), 1.5rem)', // 22px to 24px
        '3xl': 'clamp(1.5rem, calc(1.5rem + 0.5vw), 1.625rem)', // 24px to 26px
        '4xl': 'clamp(1.625rem, calc(1.625rem + 0.5vw), 1.75rem)', // 26px to 28px
        '5xl': 'clamp(1.75rem, calc(1.75rem + 0.5vw), 1.875rem)', // 28px to 30px
        '6xl': 'clamp(1.875rem, calc(1.875rem + 0.5vw), 2rem)', // 30px to 32px
        '7xl': 'clamp(2rem, calc(2rem + 0.5vw), 2.125rem)', // 32px to 34px
        '8xl': 'clamp(2.125rem, calc(2.125rem + 0.5vw), 2.25rem)', // 34px to 36px
      },
      dropShadow: {
        xs: '0 1px 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
        xl: '0 12px 24px rgba(0, 0, 0, 0.1)',
        '2xl': '0 16px 32px rgba(0, 0, 0, 0.1)',
        none: 'none',
      },
    },
  },
  plugins: [],
}
