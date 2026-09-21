import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const marketplaceAds = [
  'Amazon PPC',
  'Walmart Ads',
  'eBay Promoted Listings',
  'Etsy Ads',
  'TikTok Ads',
]

const digitalMarketing = [
  'Google Ads',
  'Facebook Ads',
  'Instagram Ads',
  'Meta Ads',
  'Retargeting',
  'Shopping Ads',
  'SEO',
  'Social Media',
  'Content Marketing',
  'Email Marketing',
  'Influencer Marketing',
  'Affiliate Marketing',
]

export function Marketing() {
  return (
    <section id="marketing" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Marketing & Advertising"
          title="Bring Customers to Your Store"
          description="Comprehensive advertising and marketing services to increase visibility and drive qualified traffic to your products."
          light
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-light h-full p-7">
              <h3 className="font-display text-[22px] font-bold text-text-primary">
                Marketplace Advertising
              </h3>
              <p className="mt-2 text-[14px] text-text-secondary">
                Advertising within the marketplaces where your products are listed.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {marketplaceAds.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-electric-blue" />
                    <span className="text-[14px] font-medium text-text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-light h-full p-7">
              <h3 className="font-display text-[22px] font-bold text-text-primary">
                Digital Marketing
              </h3>
              <p className="mt-2 text-[14px] text-text-secondary">
                Marketing across search engines, social platforms and other digital channels.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {digitalMarketing.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-3.5 w-3.5 shrink-0 text-electric-blue" />
                    <span className="text-[13px] font-medium text-text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="btn-primary">
              Grow My Business
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}