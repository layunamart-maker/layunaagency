'use client'

import { Reveal } from '@/components/ui/Reveal'
import {
  ArrowRight,
  CheckCircle,
  Shield,
  FileText,
  BarChart3,
  Package,
  Store,
  RefreshCw,
  Users,
  AlertTriangle,
} from 'lucide-react'
import Link from 'next/link'

const packageIncludes = [
  'LLC / Business Setup',
  'Amazon Business Account Setup',
  'Product Sourcing & Inventory',
  'Store Launch & Configuration',
  'Professional Store Management',
  'Product Listing & Optimization',
  'Advertising & Operational Support',
  'Investor Access & Business Transparency',
  'Formal Agreement Covering the Complete Arrangement',
  'Ongoing After-Sales & Business Support',
]

const steps = [
  { num: '01', label: 'Investment & Agreement', icon: FileText },
  { num: '02', label: 'Business Setup', icon: Store },
  { num: '03', label: 'Product Sourcing', icon: Package },
  { num: '04', label: 'Store Launch', icon: RefreshCw },
  { num: '05', label: 'Professional Management', icon: Users },
  { num: '06', label: 'Reporting & Transparency', icon: BarChart3 },
]

const transparencyItems = [
  'Business Information',
  'Agreed Reporting',
  'Operational Updates',
  'Documented Responsibilities',
  'Documented Investment Terms',
  'Documented Exit Conditions',
]

const WHATSAPP_NUMBER = '18436381773'
const INVESTMENT_MESSAGE = `Hello Layuna Agency! 👋

I'm interested in your *Amazon E-Commerce Investment Program*.

Please tell me more about:
• The $5,000 starting investment
• What the package includes
• Minimum 6-month term details
• How investor reporting works
• The formal agreement and exit conditions

Looking forward to hearing from you.`

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  INVESTMENT_MESSAGE
)}`

export function Investment() {
  return (
    <section
      id="investment"
      className="relative overflow-hidden bg-midnight section-padding"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse, rgba(139,124,255,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="container-layuna relative">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="badge-blue mb-5">
              <Shield className="h-3.5 w-3.5" />
              INVESTMENT OPPORTUNITY
            </span>
            <h2 className="text-h2 max-w-4xl text-balance text-white">
              Amazon E-Commerce Investment Program
            </h2>
            <p className="text-body-lg mt-5 max-w-2xl text-pretty text-white/55">
              Build an Amazon business without handling the day-to-day operational
              workload yourself.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="text-center">
              <p className="text-label text-white/40">Starting Investment</p>
              <p className="mt-1 font-display text-[40px] font-bold tracking-[-0.03em] text-white">
                $5,000
              </p>
            </div>
            <div className="hidden h-12 w-[1px] bg-white/10 sm:block" />
            <div className="text-center">
              <p className="text-label text-white/40">Minimum Term</p>
              <p className="mt-1 font-display text-[40px] font-bold tracking-[-0.03em] text-electric-blue">
                6 Months
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] text-white/35">
            For Qualified Investors
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-3xl">
            <h3 className="text-center font-display text-[22px] font-bold text-white">
              Package Includes
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {packageIncludes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span className="text-[13px] text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16">
            <h3 className="text-center font-display text-[28px] font-bold text-white">
              How It Works
            </h3>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-250 group-hover:border-electric-blue/30 group-hover:bg-electric-blue/10">
                    <step.icon className="h-5 w-5 text-electric-blue" />
                  </div>
                  <span className="mt-3 font-display text-[11px] font-bold text-electric-blue/60">
                    {step.num}
                  </span>
                  <p className="mt-1 text-[12px] font-medium text-white/60">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal delay={350}>
            <div className="card-dark h-full p-7">
              <h3 className="font-display text-[22px] font-bold text-white">
                Investor Transparency
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                You will have access to the relevant business information and agreed
                reporting specified in your agreement so you can monitor the progress
                and operations of your business.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {transparencyItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-3.5 w-3.5 shrink-0 text-success" />
                    <span className="text-[13px] text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="card-dark flex h-full flex-col justify-between p-7">
              <div>
                <h3 className="font-display text-[22px] font-bold text-white">
                  Minimum Term
                </h3>
                <p className="mt-3 font-display text-[36px] font-bold text-electric-blue">
                  6 Months
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                  The minimum investment period is 6 months. After completion of the
                  agreed term, you may request the return of your initial investment
                  subject to the conditions, procedures, and other terms specified in
                  the signed agreement.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.06] pt-6">
                <p className="text-label text-white/40">Minimum Investment</p>
                <p className="mt-1 font-display text-[32px] font-bold text-white">
                  $5,000
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA — WhatsApp with pre-filled message */}
        <Reveal delay={450}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Complete Investment Proposal
              <ArrowRight className="arrow h-4 w-4" />
            </a>
            <Link href="#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
          <p className="mt-4 text-center text-[12px] text-white/35">
            Clicking will open WhatsApp with a pre-filled message about the Amazon Investment Program.
          </p>
        </Reveal>

        {/* Disclaimer */}
        <Reveal delay={500}>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="flex items-start gap-3 rounded-xl border border-warning/20 bg-warning/[0.06] p-4">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              <p className="text-[12px] leading-relaxed text-white/50">
                Business and investment activities involve risk. Specific terms,
                responsibilities, fees, ownership arrangements, and exit conditions
                are governed by the formal agreement. No specific sales, profit, or
                return is guaranteed unless expressly stated in the agreement.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}