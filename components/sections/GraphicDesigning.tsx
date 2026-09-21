import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const graphicServices = [
  'Logo Design',
  'Brand Identity Design',
  'Packaging Design',
  'Product Label Design',
  'Social Media Graphics',
  'Banner Design',
  'Infographics',
  'Business Cards',
  'Brochure Design',
  'Flyer Design',
  'Print Design',
  'Ad Creatives',
  'Presentation Design',
  'Custom Illustration',
]

export function GraphicDesigning() {
  return (
    <section id="graphic-design" className="section-padding bg-midnight">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Graphic Designing"
          title="Visuals That Make Your Brand Stand Out"
          description="From logos to full brand identities, packaging and advertising creatives — professional design that elevates your business."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {graphicServices.map((service, i) => (
            <Reveal key={service} delay={i * 40}>
              <div className="card-dark flex items-start gap-3 p-5">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-electric-blue" />
                <span className="text-[13px] font-medium text-white/70">
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="btn-primary">
              Design My Brand
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}