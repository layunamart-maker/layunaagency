import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  CheckCircle,
  Factory,
  Warehouse,
  Plane,
  FileCheck,
  PackageCheck,
  Truck,
} from 'lucide-react'

const journeySteps = [
  { icon: Factory, label: 'Supplier' },
  { icon: Warehouse, label: 'Warehouse' },
  { icon: Plane, label: 'Air / Sea' },
  { icon: FileCheck, label: 'Customs' },
  { icon: PackageCheck, label: 'Fulfillment' },
  { icon: Truck, label: 'Customer' },
]

const logisticsServices = [
  'Air Freight',
  'Sea Freight',
  'Courier',
  'Door-to-Door Delivery',
  'Customs Clearance',
  'Warehousing',
  'Inventory Storage',
  'Fulfillment',
  'International Shipping',
  'Returns Support',
]

export function Logistics() {
  return (
    <section id="logistics" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Logistics & Fulfillment"
          title="From Supplier to Customer"
          description="Logistics support available through our logistics network where applicable."
          light
        />

        <Reveal delay={100}>
          <div className="mt-12 rounded-2xl border border-border-light bg-white p-6 shadow-soft md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {journeySteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-blue-surface transition-transform duration-250 hover:scale-105">
                      <step.icon className="h-6 w-6 text-electric-blue" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
                      {step.label}
                    </span>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="hidden h-[1px] w-8 bg-gradient-to-r from-electric-blue/40 to-electric-blue/10 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {logisticsServices.map((service, i) => (
            <Reveal key={service} delay={i * 50}>
              <div className="flex items-center gap-2.5 rounded-xl border border-border-light bg-white p-4 transition-all duration-250 hover:border-electric-blue/20 hover:shadow-soft">
                <CheckCircle className="h-4 w-4 shrink-0 text-electric-blue" />
                <span className="text-[13px] font-medium text-text-primary">
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}