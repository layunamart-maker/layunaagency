import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle, Building2, CreditCard, Landmark, Wallet } from 'lucide-react'
import Link from 'next/link'

const setupCategories = [
  {
    icon: Building2,
    title: 'USA Business Formation',
    services: [
      'LLC Creation (USA)',
      'LTD Company Formation',
      'C-Corporation Setup',
      'S-Corporation Setup',
      'Registered Agent Service',
      'EIN (Tax ID) Application',
      'Business Address Setup',
      'State Registration Filing',
      'Operating Agreement Drafting',
      'Annual Compliance Support',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions (USA)',
    services: [
      'PayPal Business Setup',
      'Payoneer Business Account',
      'Stripe Account Setup',
      'Wise Business Account',
      'Mercury Business Banking',
      'Payment Gateway Integration',
      'Multi-Currency Setup',
      'Payout Configuration',
    ],
  },
  {
    icon: Landmark,
    title: 'Physical US Bank Account',
    services: [
      'Physical Bank Account Opening Support',
      'Business Banking Application',
      'Documentation Preparation',
      'Bank Verification Assistance',
      'Remote Account Setup Guidance',
      'Debit Card Issuance Support',
      'Online Banking Configuration',
      'ACH & Wire Setup',
    ],
  },
  {
    icon: Wallet,
    title: 'Business Operations Setup',
    services: [
      'Virtual Business Address',
      'Business Phone Number (US)',
      'Business Email Setup',
      'Bookkeeping Setup',
      'Tax Registration Guidance',
      'Sales Tax Permit Application',
      'Trademark Filing Support',
      'Compliance Documentation',
    ],
  },
]

export function BusinessSetupUSA() {
  return (
    <section id="business-setup-usa" className="section-padding bg-midnight">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Entity Setup & Payment"
          title="Entity Setup & Payment"
          description="Complete USA business formation services including LLC and LTD creation, PayPal, Payoneer, physical bank accounts and full operational setup for international entrepreneurs."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {setupCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="card-dark h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/15">
                  <cat.icon className="h-6 w-6 text-electric-blue" />
                </div>
                <h3 className="mt-5 font-display text-[22px] font-bold text-white">
                  {cat.title}
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {cat.services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric-blue" />
                      <span className="text-[13px] text-white/65">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="btn-primary">
              Start My USA Business Setup
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}