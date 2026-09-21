import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  Target,
  Eye,
  Users,
  Building2,
  LayoutGrid,
  Palette,
  Megaphone,
  Search,
  Briefcase,
  Truck,
} from 'lucide-react'

const serviceSummary = [
  { icon: LayoutGrid, label: 'E-Commerce' },
  { icon: Briefcase, label: 'Marketplace Management' },
  { icon: Palette, label: 'Branding' },
  { icon: Megaphone, label: 'Marketing' },
  { icon: Search, label: 'Product Sourcing' },
  { icon: Target, label: 'Business Setup' },
  { icon: Truck, label: 'Logistics Support' },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="About Layuna"
          title="About Layuna Agency"
          description="Layuna Agency provides e-commerce and digital business solutions designed to help businesses build, manage and grow their online operations."
          light
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="card-light p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue-surface">
                  <Target className="h-5 w-5 text-electric-blue" />
                </div>
                <h3 className="mt-4 font-display text-[20px] font-bold text-text-primary">
                  Mission
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  To provide businesses with a reliable, professional e-commerce
                  operations partner — handling the complexity of online selling so
                  our clients can focus on their products and their customers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-light p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue-surface">
                  <Eye className="h-5 w-5 text-electric-blue" />
                </div>
                <h3 className="mt-4 font-display text-[20px] font-bold text-text-primary">
                  Vision
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  To be a trusted e-commerce operations partner for businesses and
                  investors across global marketplaces — known for operational
                  discipline, transparency and consistent support.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            <Reveal delay={150}>
              <div className="card-light p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue-surface">
                  <Users className="h-5 w-5 text-electric-blue" />
                </div>
                <h3 className="mt-4 font-display text-[20px] font-bold text-text-primary">
                  Team
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  Layuna operates with a team focused on e-commerce operations,
                  marketplace management, product sourcing, creative production and
                  marketing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-light p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue-surface">
                  <Building2 className="h-5 w-5 text-electric-blue" />
                </div>
                <h3 className="mt-4 font-display text-[20px] font-bold text-text-primary">
                  Business Operations
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  Layuna Agency operates from Sialkot, Punjab, Pakistan and provides
                  services to clients across international markets through remote
                  operations and partner networks.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={250}>
          <div className="mt-10">
            <h3 className="text-center font-display text-[18px] font-bold text-text-primary">
              Services Summary
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {serviceSummary.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 rounded-full border border-border-light bg-white px-4 py-2 shadow-soft"
                >
                  <service.icon className="h-3.5 w-3.5 text-electric-blue" />
                  <span className="text-[13px] font-medium text-text-primary">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}