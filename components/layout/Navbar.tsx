'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const services = [
  { name: 'E-Commerce Services', href: '#services' },
  { name: 'Entity Setup & Payment', href: '#business-setup-usa' },
  { name: 'Product Research & Sourcing', href: '#research' },
  { name: 'Marketplace Management', href: '#management' },
  { name: 'Store Development', href: '#shopify' },
  { name: 'Social Media Marketing', href: '#social-media' },
  { name: 'Graphic Designing', href: '#graphic-design' },
  { name: 'Web Development (3D + UI/UX)', href: '#web-development' },
  { name: 'Marketing & Advertising', href: '#marketing' },
  { name: 'Branding & Creative', href: '#branding' },
  { name: 'Automation', href: '#automation' },
  { name: 'Logistics & Fulfillment', href: '#logistics' },
]

const platforms = [
  { name: 'Amazon', href: '#amazon' },
  { name: 'eBay', href: '#ebay' },
  { name: 'Walmart', href: '#walmart' },
  { name: 'Etsy', href: '#etsy' },
  { name: 'Shopify', href: '#shopify' },
  { name: 'TikTok Shop', href: '#tiktok' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-midnight/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-layuna flex h-[72px] items-center justify-between lg:h-[80px]">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Layuna Agency Home">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm lg:h-12 lg:w-12">
              <Image
                src="/logo.png"
                alt="Layuna Agency logo"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[16px] font-bold tracking-[-0.02em] text-white lg:text-[18px]">
                LAYUNA
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-electric-blue">
                Agency
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <NavLink href="#home">Home</NavLink>

            <Dropdown
              label="Services"
              items={services}
              isOpen={activeDropdown === 'services'}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            />

            <Dropdown
              label="Platforms"
              items={platforms}
              isOpen={activeDropdown === 'platforms'}
              onMouseEnter={() => handleMouseEnter('platforms')}
              onMouseLeave={handleMouseLeave}
            />

            <NavLink href="#investment">Investment</NavLink>
            <NavLink href="#case-studies">Case Studies</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden lg:block">
            <Link href="#contact" className="btn-primary text-[14px] px-6 py-3">
              Get Started
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-midnight transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '72px' }}
      >
        <div className="container-layuna flex h-full flex-col overflow-y-auto py-6 pb-24">
          <div className="flex flex-col gap-1">
            <MobileLink href="#home" onClick={() => setMobileOpen(false)}>
              Home
            </MobileLink>

            <MobileAccordion
              label="Services"
              items={services}
              onItemClick={() => setMobileOpen(false)}
            />
            <MobileAccordion
              label="Platforms"
              items={platforms}
              onItemClick={() => setMobileOpen(false)}
            />

            <MobileLink href="#investment" onClick={() => setMobileOpen(false)}>
              Investment
            </MobileLink>
            <MobileLink href="#case-studies" onClick={() => setMobileOpen(false)}>
              Case Studies
            </MobileLink>
            <MobileLink href="#about" onClick={() => setMobileOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#contact" onClick={() => setMobileOpen(false)}>
              Contact
            </MobileLink>
          </div>

          <div className="mt-8">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Get Started
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-4 py-2 text-[14px] font-medium text-white/70 transition-colors duration-200 hover:text-white"
    >
      {children}
    </Link>
  )
}

function Dropdown({
  label,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  label: string
  items: { name: string; href: string }[]
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        className={`flex items-center gap-1 rounded-lg px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
          isOpen ? 'text-white' : 'text-white/70 hover:text-white'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-1 opacity-0 pointer-events-none'
        }`}
      >
        <div className="min-w-[280px] rounded-xl border border-white/[0.08] bg-deep-navy/95 p-2 shadow-dark backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3.5 py-2.5 text-[14px] text-white/70 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-4 py-3.5 text-[16px] font-medium text-white/80 transition-colors hover:bg-white/[0.04] hover:text-white"
    >
      {children}
    </Link>
  )
}

function MobileAccordion({
  label,
  items,
  onItemClick,
}: {
  label: string
  items: { name: string; href: string }[]
  onItemClick: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-[16px] font-medium text-white/80 transition-colors hover:bg-white/[0.04] hover:text-white"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-0.5 pl-4 pb-2">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onItemClick}
              className="rounded-lg px-4 py-2.5 text-[14px] text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}