// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        'twitter-blue': '#1DA1F2',
        'substack-black': '#1a1a1a',
        'sb-background': `var(--sb-background, transparent)`,
        'sb-text': `var(--sb-text, #1a1a1a)`,
      },
      fontSize: {
        xs: ['14px', '18px'],
        sm: ['16px', '20px'],
        base: ['18px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['28px', '32px'],
        '3xl': ['32px', '32px'],
      },
      fontFamily: {
        serif: ['Lora', ...fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
