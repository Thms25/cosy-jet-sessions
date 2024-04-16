/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        // xs: ['clamp(0.8rem, calc(0.7rem + 0.3vw), 1.2rem)', '1.4'],
        // sm: ['clamp(1rem, calc(0.75rem + 0.6vw), 1.5rem)', '1.5'],
        // md: ['clamp(1.2rem, calc(0.8rem + 1vw), 1.9rem)', '1.4'],
        // lg: ['clamp(1.4rem, calc(0.85rem + 1.6vw), 2.3rem)', '1.3'],
        // xl: ['clamp(1.6rem, calc(0.9rem + 2.3vw), 2.9rem)', '1.2'],
        // '2xl': ['clamp(1.8rem, calc(1rem + 3.3vw), 3.7rem)', '1.1'],
        // '3xl': ['clamp(2rem, calc(1.1rem + 4.5vw), 4.6rem)', '1'],
        // '4xl': ['clamp(2.2rem, calc(1.2rem + 5.9vw), 5.5rem)', '1'],
        // '5xl': ['clamp(2.4rem, calc(1.3rem + 7.4vw), 6.4rem)', '1'],
        // '6xl': ['clamp(2.6rem, calc(1.4rem + 9.2vw), 7.3rem)', '1'],
        // '7xl': ['clamp(2.8rem, calc(1.5rem + 11.1vw), 8.2rem)', '1'],
        // '8xl': ['clamp(3rem, calc(1.6rem + 13.2vw), 9.1rem)', '1'],

        xs: 'clamp(0.75rem, 1vw, 0.875rem)', // 12px to 14px
        sm: 'clamp(0.875rem, 1.15vw, 1rem)', // 14px to 16px
        md: 'clamp(1rem, 1.25vw, 1.125rem)', // 16px to 18px
        lg: 'clamp(1.125rem, 1.35vw, 1.25rem)', // 18px to 20px
        xl: 'clamp(1.25rem, 1.45vw, 1.375rem)', // 20px to 22px
        '2xl': 'clamp(1.375rem, 1.55vw, 1.5rem)', // 22px to 24px
        '3xl': 'clamp(1.5rem, 1.65vw, 1.625rem)', // 24px to 26px
        '4xl': 'clamp(1.625rem, 1.75vw, 1.75rem)', // 26px to 28px
        '5xl': 'clamp(1.75rem, 1.85vw, 1.875rem)', // 28px to 30px
        '6xl': 'clamp(1.875rem, 1.95vw, 2rem)', // 30px to 32px
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
