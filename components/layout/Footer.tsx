import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Briefcase,
} from 'lucide-react'

const serviceLinks = [
  { name: 'E-Commerce Services', href: '#services' },
  { name: 'Entity Setup & Payment', href: '#business-setup-usa' },
  { name: 'Amazon', href: '#amazon' },
  { name: 'eBay', href: '#ebay' },
  { name: 'Walmart', href: '#walmart' },
  { name: 'Etsy', href: '#etsy' },
  { name: 'Shopify', href: '#shopify' },
  { name: 'TikTok Shop', href: '#tiktok' },
  { name: 'Social Media Marketing', href: '#social-media' },
  { name: 'Graphic Designing', href: '#graphic-design' },
  { name: 'Web Development', href: '#web-development' },
  { name: 'Branding', href: '#branding' },
  { name: 'Product Sourcing', href: '#research' },
  { name: 'Logistics', href: '#logistics' },
]

const companyLinks = [
  { name: 'About', href: '#about' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Investment Program', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram, placeholder: true },
  { name: 'Facebook', href: '#', icon: Facebook, placeholder: true },
  { name: 'LinkedIn', href: '#', icon: Linkedin, placeholder: true },
  { name: 'YouTube', href: '#', icon: Youtube, placeholder: true },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight">
      <div
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[600px] w-[1200px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse, rgba(79,140,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-layuna relative">
        <div className="border-b border-white/[0.06] py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-white md:text-[36px]">
                Ready to Grow Your E-Commerce Business?
              </h3>
              <p className="mt-2 text-[16px] text-white/50">
                Tell us what you&apos;re building. We&apos;ll help you plan the next step.
              </p>
            </div>
            <Link href="#contact" className="btn-primary shrink-0">
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Layuna Agency logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[22px] font-bold tracking-[-0.02em] text-white">
                  LAYUNA
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-blue">
                  Agency
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/50">
              Build. Manage. Grow. Your E-Commerce Business.
            </p>
            <p className="mt-2 max-w-sm text-[13px] text-white/35">
              E-Commerce Setup • Management • Marketing • Sourcing • Growth
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:layunamart@gmail.com"
                className="flex items-center gap-2.5 text-[13px] text-white/50 transition-colors hover:text-electric-blue"
              >
                <Mail className="h-4 w-4 shrink-0" />
                layunamart@gmail.com
              </a>
              <a
                href="https://wa.me/18436381773"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/50 transition-colors hover:text-electric-blue"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +1 (843) 638-1773
              </a>
              <a
                href="https://protfolioofrafay.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/50 transition-colors hover:text-electric-blue"
              >
                <Briefcase className="h-4 w-4 shrink-0" />
                Rafay&apos;s Portfolio — E-Commerce Entrepreneur
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Sialkot • Lahore • Islamabad, Pakistan
                  <br />
                  Austin, Texas, USA
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`${social.name}${social.placeholder ? ' (link to be added)' : ''}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition-all duration-200 hover:border-electric-blue/30 hover:text-electric-blue"
                  title={
                    social.placeholder
                      ? `${social.name} — URL to be added`
                      : social.name
                  }
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:layunamart@gmail.com"
                  className="text-[13px] text-white/45 transition-colors hover:text-white"
                >
                  layunamart@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18436381773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/45 transition-colors hover:text-white"
                >
                  +1 (843) 638-1773
                </a>
              </li>
              <li>
                <span className="text-[13px] text-white/45">
                  Sialkot • Lahore • Islamabad, PK
                </span>
              </li>
              <li>
                <span className="text-[13px] text-white/45">Austin, TX, USA</span>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[13px] text-electric-blue transition-colors hover:text-bright-blue"
                >
                  Request a Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 md:flex-row">
          <p className="text-[12px] text-white/35">
            © 2026 Layuna Agency. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[12px] text-white/35 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-white/35 transition-colors hover:text-white/60"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}