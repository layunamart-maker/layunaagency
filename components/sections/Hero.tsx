'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ShoppingCart,
  Package,
  BarChart3,
  TrendingUp,
  Store,
  Globe,
  Zap,
} from 'lucide-react'

const platforms = [
  { name: 'Amazon', color: '#FF9900' },
  { name: 'eBay', color: '#E53238' },
  { name: 'Walmart', color: '#0071CE' },
  { name: 'Etsy', color: '#F1641E' },
  { name: 'Shopify', color: '#96BF48' },
  { name: 'TikTok Shop', color: '#00F2EA' },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x: x * 15, y: y * 15 })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-midnight pt-[72px] lg:pt-[80px]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-1/4 left-1/4 h-[800px] w-[800px]"
          style={{
            background:
              'radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute -bottom-1/4 right-1/4 h-[600px] w-[600px]"
          style={{
            background:
              'radial-gradient(circle, rgba(139,124,255,0.08) 0%, transparent 65%)',
          }}
        />
        <div className="grid-bg absolute inset-0 opacity-60" />
        <Particles />
      </div>

      <div className="container-layuna relative py-16 md:py-24 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col items-start">
            <div
              className={`badge-blue mb-6 transition-all duration-700 ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <Zap className="h-3.5 w-3.5" />
              LAYUNA AGENCY
            </div>

            <h1
              className={`text-hero max-w-[800px] text-white transition-all duration-700 ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Build.{' '}
              <span className="text-electric-blue">Manage.</span>{' '}
              Grow.{' '}
              <span className="block">Your E-Commerce Business.</span>
            </h1>

            <p
              className={`text-body-lg mt-6 max-w-lg text-white/55 transition-all duration-700 ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '0.35s' }}
            >
              Complete e-commerce solutions for businesses, brands, sellers, and
              investors across global marketplaces.
            </p>

            <div
              className={`mt-8 flex flex-col gap-3 sm:flex-row transition-all duration-700 ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <Link href="#contact" className="btn-primary">
                Get Started
                <ArrowRight className="arrow h-4 w-4" />
              </Link>
              <Link href="#services" className="btn-secondary">
                Explore Services
                <ArrowRight className="arrow h-4 w-4" />
              </Link>
            </div>

            <div
              className={`mt-10 transition-all duration-700 ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '0.65s' }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/35">
                Platforms We Support
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span
                    key={platform.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:text-white"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    />
                    {platform.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: '0.4s',
              transform: `perspective(1200px) rotateY(${mousePos.x * 0.02}deg) rotateX(${-mousePos.y * 0.02}deg)`,
            }}
          >
            <HeroDashboard mousePos={mousePos} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
    </section>
  )
}

function HeroDashboard({ mousePos }: { mousePos: { x: number; y: number } }) {
  return (
    <div className="relative">
      <div
        className="animate-float relative rounded-[28px] border border-white/[0.1] bg-navy-surface/70 p-5 shadow-dark backdrop-blur-xl md:p-6"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
        }}
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white/95">
              <Image
                src="/logo.png"
                alt="Layuna Agency logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white">Layuna Commerce</p>
              <p className="text-[10px] text-white/40">Multi-Channel Dashboard</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-electric-blue/50" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatCard icon={TrendingUp} label="Revenue" value="$12.4M+" sub="Tracked" />
          <StatCard icon={ShoppingCart} label="Orders" value="1M+" sub="Processed" />
          <StatCard icon={Package} label="Products" value="85K+" sub="Managed" />
          <StatCard icon={BarChart3} label="Ad Spend" value="$2.8M+" sub="Optimized" />
        </div>

        <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white/40">
              Sales Growth
            </p>
            <span className="text-[10px] font-semibold text-success">+24.6%</span>
          </div>
          <div className="mt-4 flex h-20 items-end gap-2">
            {[35, 55, 40, 70, 50, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-electric-blue/20 to-electric-blue/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { name: 'Amazon', color: '#FF9900' },
            { name: 'Shopify', color: '#96BF48' },
            { name: 'eBay', color: '#E53238' },
            { name: 'Walmart', color: '#0071CE' },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              <span className="text-[10px] font-medium text-white/60">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="animate-float-slow absolute -right-3 -top-4 rounded-2xl border border-white/[0.1] bg-deep-navy/90 p-3.5 shadow-dark backdrop-blur-xl md:-right-6"
        style={{
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
          animationDelay: '1s',
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/15">
            <Globe className="h-4 w-4 text-success" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">Global</p>
            <p className="text-[10px] text-white/40">Multi-Marketplace</p>
          </div>
        </div>
      </div>

      <div
        className="animate-float-slow absolute -bottom-4 -left-3 rounded-2xl border border-white/[0.1] bg-deep-navy/90 p-3.5 shadow-dark backdrop-blur-xl md:-left-6"
        style={{
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
          animationDelay: '2s',
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-blue/15">
            <Zap className="h-4 w-4 text-electric-blue" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">Automation</p>
            <p className="text-[10px] text-white/40">Smart Workflows</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof TrendingUp
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-electric-blue" />
        <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-white/40">
          {label}
        </span>
      </div>
      <p className="mt-2 font-display text-[20px] font-bold text-white">{value}</p>
      <p className="mt-0.5 text-[10px] text-success/80">{sub}</p>
    </div>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-electric-blue/20"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animation: `float ${6 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}