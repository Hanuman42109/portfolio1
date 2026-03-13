import { colors, fonts } from './src/theme/index.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: fonts.serif,
        mono:  fonts.mono,
        sans:  fonts.sans,
      },
      colors: {
        bg: {
          DEFAULT: colors.bg.DEFAULT,
          subtle:  colors.bg.subtle,
          surface: colors.bg.surface,
          elevated: colors.bg.elevated,
        },
        accent: {
          DEFAULT: colors.accent.DEFAULT,
          light:   colors.accent.light,
        },
        muted:  colors.text.muted,
        border: colors.border.DEFAULT,
      },
    },
  },
  plugins: [],
}