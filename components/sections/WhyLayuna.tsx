import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  LayoutGrid,
  UserCheck,
  Search,
  Palette,
  Megaphone,
  Bot,
  Truck,
  Globe,
  HeadphonesIcon,
} from 'lucide-react'

const features = [
  {
    icon: LayoutGrid,
    title: 'Multi-Platform E-Commerce Expertise',
    desc: 'Experience across all major e-commerce marketplaces.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Management',
    desc: 'A dedicated point of contact for your business.',
  },
  {
    icon: Search,
    title: 'Product Research & Sourcing',
    desc: 'Data-driven product identification and supplier sourcing.',
  },
  {
    icon: Palette,
    title: 'Branding & Creative Services',
    desc: 'Complete brand development and creative production.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Advertising',
    desc: 'Marketplace and digital advertising management.',
  },
  {
    icon: Bot,
    title: 'E-Commerce Automation',
    desc: 'Streamlined workflows and operational automation.',
  },
  {
    icon: Truck,
    title: 'Logistics Support',
    desc: 'Logistics support through our logistics network where applicable.',
  },
  {
    icon: Globe,
    title: 'International Seller Support',
    desc: 'Support for sellers across international markets.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Business Support',
    desc: 'Continuous support as your business evolves.',
  },
]

export function WhyLayuna() {
  return (
    <section className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Why Layuna"
          title="Why Businesses Choose Layuna"
          description="A comprehensive approach to e-commerce operations and growth."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <div className="card-light group h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue-surface transition-colors group-hover:bg-electric-blue/15">
                  <feature.icon className="h-5 w-5 text-electric-blue" />
                </div>
                <h3 className="mt-4 font-display text-[16px] font-bold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}