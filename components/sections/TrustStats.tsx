'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { Globe, LayoutGrid, Package, HeadphonesIcon } from 'lucide-react'

const stats = [
  { icon: Globe, value: 500, suffix: '+', label: 'Brands Scaled' },
  { icon: LayoutGrid, value: 12, suffix: 'M+', label: 'Revenue Generated', prefix: '$' },
  { icon: Package, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: HeadphonesIcon, value: 6, suffix: '', label: 'Platforms We Dominate' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return count
}

function StatItem({
  stat,
  index,
  visible,
}: {
  stat: (typeof stats)[number]
  index: number
  visible: boolean
}) {
  const count = useCountUp(stat.value, 1800 + index * 200, visible)

  return (
    <Reveal delay={index * 100}>
      <div className="flex flex-col items-center text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
          <stat.icon className="h-5 w-5 text-electric-blue" />
        </div>
        <p className="mt-4 font-display text-[36px] font-bold tracking-[-0.03em] text-white md:text-[48px]">
          {stat.prefix}
          {count}
          {stat.suffix}
        </p>
        <p className="mt-1 text-[13px] text-white/45">{stat.label}</p>
      </div>
    </Reveal>
  )
}

export function TrustStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative border-y border-white/[0.06] bg-deep-navy py-16 md:py-20"
    >
      <div className="container-layuna">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}