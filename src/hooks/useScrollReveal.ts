import { useEffect, useRef } from 'react'
import { SCROLL_REVEAL_THRESHOLD } from '@/constants'

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: SCROLL_REVEAL_THRESHOLD }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}