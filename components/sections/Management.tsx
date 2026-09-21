import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, UserCheck, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const managementServices = [
  'Account Management',
  'Product Management',
  'Listing Management',
  'Inventory Management',
  'Order Management',
  'Pricing Management',
  'Customer Support',
  'Supplier Communication',
  'Account Health',
  'Reporting',
]

export function Management() {
  return (
    <section id="management" className="section-padding bg-deep-navy">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Marketplace Management"
          title="Your Store. Our Expertise."
          description="End-to-end operational management for your e-commerce business across all major marketplaces."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
              {managementServices.map((service) => (
                <div
                  key={service}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-all duration-250 hover:-translate-y-1 hover:border-electric-blue/20 hover:bg-white/[0.04]"
                >
                  <CheckCircle className="mx-auto h-4 w-4 text-electric-blue/60 transition-colors group-hover:text-electric-blue" />
                  <p className="mt-2.5 text-[12px] font-medium leading-snug text-white/65">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-dark relative flex h-full flex-col justify-between overflow-hidden p-7">
              <div
                className="pointer-events-none absolute -right-1/4 -top-1/4 h-[300px] w-[300px]"
                style={{
                  background:
                    'radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 65%)',
                }}
              />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/15">
                  <UserCheck className="h-6 w-6 text-electric-blue" />
                </div>
                <h3 className="mt-5 font-display text-[24px] font-bold text-white">
                  Dedicated Account Manager
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  Get a dedicated point of contact for your e-commerce operations.
                </p>
              </div>
              <div className="relative mt-8">
                <Link href="#contact" className="btn-primary w-full">
                  Talk to Our Team
                  <ArrowRight className="arrow h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}