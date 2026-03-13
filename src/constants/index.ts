export const Z_INDEX = {
  base: 0,
  raised: 10,
  overlay: 50,
  nav: 100,
  modal: 200,
} as const

export const ANIMATION_DELAY = {
  d1: '200ms',
  d2: '350ms',
  d3: '500ms',
  d4: '650ms',
  d5: '800ms',
} as const

export const STAGGER_DELAY_MS = 80 // ms per item in staggered lists

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

export const SCROLL_REVEAL_THRESHOLD = 0.1