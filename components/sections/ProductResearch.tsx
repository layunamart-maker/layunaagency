'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  ArrowRight,
  Search,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  CheckCircle,
  Factory,
  Rocket,
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  { icon: Search, label: 'Market Research' },
  { icon: Target, label: 'Niche Research' },
  { icon: Users, label: 'Competitor Analysis' },
  { icon: TrendingUp, label: 'Demand Analysis' },
  { icon: DollarSign, label: 'Profitability Analysis' },
  { icon: CheckCircle, label: 'Product Validation' },
  { icon: Factory, label: 'Supplier Sourcing' },
  { icon: Rocket, label: 'Product Launch' },
]

export function ProductResearch() {
  return (
    <section id="research" className="section-padding bg-midnight">
      <div className="container-layuna">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Product Research & Sourcing"
              title="Find Products. Find Suppliers. Build Opportunities."
              description="A structured, data-driven approach to identifying product opportunities and connecting with verified suppliers."
              align="left"
            />

            <Reveal delay={200}>
              <div className="mt-8">
                <Link href="#contact" className="btn-primary">
                  Find My Product
                  <ArrowRight className="arrow h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative">
              <div className="card-dark p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                    Research Pipeline
                  </span>
                  <span className="badge text-[10px]">Process</span>
                </div>

                <div className="mt-6 flex flex-col gap-0">
                  {steps.map((step, i) => (
                    <div key={step.label} className="flex items-stretch gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-electric-blue/20 bg-electric-blue/10">
                          <step.icon className="h-4 w-4 text-electric-blue" />
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-[1px] flex-1 bg-gradient-to-b from-electric-blue/30 to-transparent" />
                        )}
                      </div>

                      <div className="flex flex-1 items-center pb-5">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-[11px] font-bold text-electric-blue/50">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[14px] font-medium text-white/80">
                            {step.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}