export const colors = {
  bg: {
    DEFAULT: '#080d14',
    subtle:  '#0d1520',
    surface: '#111d2b',
    elevated:'#162436',
  },
  accent: {
    DEFAULT: '#d4720a',
    light:   '#f08030',
    muted:   'rgba(212,114,10,0.15)',
    glow:    'rgba(212,114,10,0.35)',
  },
  text: {
    DEFAULT: '#e8e0d4',
    muted:   '#7a8a9a',
    faint:   '#3d5166',
  },
  border: {
    DEFAULT: '#1e2e40',
    hover:   'rgba(212,114,10,0.4)',
  },
} as const

export const fonts = {
  serif: ['"DM Serif Display"', 'serif'],
  mono:  ['"JetBrains Mono"', 'monospace'],
  sans:  ['Outfit', 'sans-serif'],
} as const

export const shadows = {
  sm:     '0 2px 8px rgba(0,0,0,0.3)',
  md:     '0 8px 24px rgba(0,0,0,0.4)',
  lg:     '0 20px 40px rgba(0,0,0,0.5)',
  accent: '0 8px 24px rgba(212,114,10,0.35)',
  glow:   '0 0 12px rgba(212,114,10,0.5)',
} as const