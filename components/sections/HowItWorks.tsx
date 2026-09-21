import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  MessageSquare,
  Search,
  Target,
  Settings,
  Rocket,
  TrendingUp,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We discuss your goals, business model and target marketplaces.',
    icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Analysis',
    desc: 'We analyze your products, competitors and market opportunity.',
    icon: Search,
  },
  {
    num: '03',
    title: 'Strategy',
    desc: 'We develop a tailored e-commerce strategy for your business.',
    icon: Target,
  },
  {
    num: '04',
    title: 'Setup',
    desc: 'We handle the technical and operational setup of your business.',
    icon: Settings,
  },
  {
    num: '05',
    title: 'Launch & Management',
    desc: 'We launch your store and manage day-to-day operations.',
    icon: Rocket,
  },
  {
    num: '06',
    title: 'Optimize & Scale',
    desc: 'We continuously optimize and identify growth opportunities.',
    icon: TrendingUp,
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="How It Works"
          title="Your E-Commerce Journey, Step by Step"
          description="A structured process designed to take you from initial consultation through to ongoing growth."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="card-light group h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue-surface transition-colors group-hover:bg-electric-blue/15">
                    <step.icon className="h-5 w-5 text-electric-blue" />
                  </div>
                  <span className="font-display text-[28px] font-bold text-border-light transition-colors group-hover:text-electric-blue/20">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[18px] font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}