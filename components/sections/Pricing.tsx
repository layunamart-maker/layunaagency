import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const packages = [
  {
    name: 'Starter',
    description: 'For new sellers',
    featured: false,
    dark: false,
    features: [
      'Account Setup',
      'Basic Product Research',
      'Store Setup',
      'Initial Consultation',
      'Basic Support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'For active sellers',
    featured: true,
    dark: false,
    features: [
      'Product Research',
      'Listing Optimization',
      'Store Management',
      'Advertising',
      'Account Manager',
      'Reporting',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Scale',
    description: 'For established businesses',
    featured: false,
    dark: true,
    features: [
      'Full Account Management',
      'Product/Supplier Management',
      'PPC',
      'SEO',
      'Creative',
      'Inventory',
      'Customer Support',
      'Analytics',
      'Growth Strategy',
    ],
    cta: 'Talk to an Expert',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Pricing & Packages"
          title="Flexible Packages for Every Stage"
          description="Choose the level of support that matches your business needs. Custom solutions available."
          light
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 ${
                  pkg.dark
                    ? 'border border-white/[0.08] bg-midnight text-white hover:-translate-y-1.5 hover:shadow-dark'
                    : pkg.featured
                    ? 'border-2 border-electric-blue bg-white shadow-elevated hover:-translate-y-1.5'
                    : 'border border-border-light bg-white shadow-soft hover:-translate-y-1.5 hover:shadow-elevated'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric-blue px-4 py-1 text-[11px] font-semibold text-white">
                    Featured
                  </span>
                )}

                <h3
                  className={`font-display text-[24px] font-bold ${
                    pkg.dark ? 'text-white' : 'text-text-primary'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-1 text-[13px] ${
                    pkg.dark ? 'text-white/50' : 'text-text-secondary'
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`my-6 border-t ${
                    pkg.dark ? 'border-white/[0.06]' : 'border-border-light'
                  }`}
                />

                <ul className="flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 shrink-0 text-electric-blue" />
                      <span
                        className={`text-[13px] ${
                          pkg.dark ? 'text-white/65' : 'text-text-secondary'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="#contact"
                    className={`w-full ${
                      pkg.dark
                        ? 'btn-primary'
                        : pkg.featured
                        ? 'btn-primary'
                        : 'btn-outline-light'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="arrow h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <p className="mt-8 text-center text-[14px] text-text-secondary">
            Need a custom solution?{' '}
            <Link
              href="#contact"
              className="font-semibold text-electric-blue underline-offset-4 hover:underline"
            >
              Get a Custom Quote
            </Link>
          </p>
          <p className="mt-2 text-center text-[12px] text-text-secondary/60">
            Package details and pricing are provided upon consultation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}