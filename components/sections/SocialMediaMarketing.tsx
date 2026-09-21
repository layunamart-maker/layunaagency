import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const socialServices = [
  'Social Media Strategy',
  'Content Creation',
  'Content Calendar',
  'Instagram Marketing',
  'Facebook Marketing',
  'TikTok Marketing',
  'LinkedIn Marketing',
  'Twitter / X Marketing',
  'Community Management',
  'Influencer Marketing',
  'Paid Social Advertising',
  'Social Analytics & Reporting',
]

export function SocialMediaMarketing() {
  return (
    <section id="social-media" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Social Media Marketing"
          title="Grow Your Audience. Build Your Brand."
          description="Engage your customers where they spend their time — with strategic content, community management and paid social campaigns."
          light
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialServices.map((service, i) => (
            <Reveal key={service} delay={i * 40}>
              <div className="card-light flex items-start gap-3 p-5">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-electric-blue" />
                <span className="text-[14px] font-medium text-text-primary">
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="btn-primary">
              Grow My Social Presence
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}