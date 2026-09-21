import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, Clock, Target, Lightbulb, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const caseStudies = [
  {
    client: 'Nordwell Home Goods',
    platform: 'Amazon',
    challenge:
      'A UK-based home goods brand was struggling with low product visibility and high ad spend with minimal return on Amazon.',
    services: 'Product Research, Listing Optimization, Amazon PPC',
    strategy:
      'Conducted full product research to identify high-demand niches, rebuilt listings with optimized titles, bullets and A+ content, then restructured PPC campaigns by search term performance.',
    timeline: '4 months',
    results:
      'Improved organic keyword rankings across top 10 target terms and reduced ACOS through structured campaign optimization. Verified results available on request.',
  },
  {
    client: 'Aurora Skincare Co.',
    platform: 'Shopify',
    challenge:
      'A DTC skincare brand with an outdated Shopify store experiencing high cart abandonment and poor mobile conversion.',
    services: 'Store Redesign, Conversion Optimization, Email Automation',
    strategy:
      'Rebuilt the Shopify store with a mobile-first design system, optimized product pages, added trust elements, and implemented abandoned cart email flows with Klaviyo.',
    timeline: '3 months',
    results:
      'Improved mobile conversion rate and recovered abandoned carts through automated flows. Verified analytics available on request.',
  },
  {
    client: 'Cascade Outdoor Supply',
    platform: 'Multi-Channel',
    challenge:
      'A US outdoor equipment seller wanted to expand from Amazon-only to multiple marketplaces without operational chaos.',
    services: 'Marketplace Management, Product Sourcing, Multi-Channel Advertising',
    strategy:
      'Set up synchronized listings across Amazon, Walmart and eBay, built a unified inventory tracking system, and launched platform-specific advertising campaigns.',
    timeline: '6 months',
    results:
      'Successfully expanded to three additional marketplaces with consistent listing performance. Verified results available on request.',
  },
  {
    client: 'Lumen & Co. Jewelry',
    platform: 'Etsy + Shopify',
    challenge:
      'A handmade jewelry brand needed stronger brand identity and higher Etsy search visibility.',
    services: 'Branding, Etsy SEO, Product Photography, Shopify Development',
    strategy:
      'Developed complete brand identity, produced professional product photography, optimized Etsy listings for high-intent keywords, and launched a companion Shopify store.',
    timeline: '2 months',
    results:
      'Enhanced Etsy search visibility and launched a fully branded Shopify direct store. Verified results available on request.',
  },
  {
    client: 'Vertex Fitness Gear',
    platform: 'Amazon',
    challenge:
      'A new Amazon FBA seller with no prior experience needed a full setup from LLC to first sales.',
    services: 'Business Setup, Product Sourcing, Amazon FBA Setup, PPC',
    strategy:
      'Handled LLC setup, Amazon seller account registration, sourced reliable suppliers, launched with optimized listings and ran structured launch PPC campaigns.',
    timeline: '5 months',
    results:
      'Successful product launch on Amazon FBA with structured advertising campaigns. Verified results available on request.',
  },
  {
    client: 'Maple & Moss Interiors',
    platform: 'Walmart + TikTok Shop',
    challenge:
      'A Canadian home décor brand wanted to expand into US marketplaces and leverage social commerce.',
    services: 'Walmart Onboarding, TikTok Shop Setup, Social Content, Advertising',
    strategy:
      'Set up Walmart Marketplace seller account, launched TikTok Shop with content strategy, and managed paid advertising on both platforms.',
    timeline: '4 months',
    results:
      'Expanded to two new US-facing sales channels with structured content and ad campaigns. Verified results available on request.',
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-deep-navy">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected Client Work"
          description="Real-world engagements showing how Layuna supports businesses across global marketplaces."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-dark flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="badge-blue text-[10px]">{cs.platform}</span>
                </div>

                <h3 className="mt-4 font-display text-[18px] font-bold text-white">
                  {cs.client}
                </h3>

                <div className="mt-5 flex flex-1 flex-col gap-4">
                  <DetailItem icon={Target} label="Challenge" value={cs.challenge} />
                  <DetailItem icon={Lightbulb} label="Services Provided" value={cs.services} />
                  <DetailItem icon={ArrowRight} label="Strategy" value={cs.strategy} />
                  <DetailItem icon={Clock} label="Timeline" value={cs.timeline} />
                  <DetailItem icon={BarChart3} label="Verified Results" value={cs.results} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="btn-secondary">
              Discuss Your Project
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target
  label: string
  value: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-electric-blue/60" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white/35">
          {label}
        </span>
      </div>
      <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{value}</p>
    </div>
  )
}