'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
      } ${className}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}