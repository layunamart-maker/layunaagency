import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CheckCircle } from 'lucide-react'

const brandingServices = [
  {
    title: 'Brand Development',
    items: [
      'Brand Name',
      'Logo',
      'Brand Identity',
      'Brand Guidelines',
      'Packaging',
      'Product Branding',
    ],
  },
  {
    title: 'Product Creative',
    items: [
      'Product Photography',
      'Product Images',
      'Infographics',
      'A+ Content',
      'Store Banners',
      'Product Videos',
      'Ad Creatives',
    ],
  },
  {
    title: 'Social Media Creative',
    items: [
      'Instagram Content',
      'Facebook Content',
      'TikTok Content',
      'Reels',
      'Short-Form Videos',
      'UGC-Style Content',
    ],
  },
]

export function Branding() {
  return (
    <section id="branding" className="section-padding bg-midnight">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Branding & Creative"
          title="Build a Brand Customers Remember"
          description="Complete brand development and creative services to establish a strong market presence."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {brandingServices.map((category, i) => (
            <Reveal key={category.title} delay={i * 100}>
              <div className="card-dark h-full p-7">
                <h3 className="font-display text-[22px] font-bold text-white">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-electric-blue" />
                      <span className="text-[14px] text-white/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}