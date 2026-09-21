import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const platforms = [
  {
    name: 'Amazon',
    logo: '/amazon.png',
    color: '#FF9900',
    description:
      'Amazon FBA, FBM, product research, listings, PPC and account management.',
    services: ['Amazon FBA', 'Amazon FBM', 'Product Research', 'PPC Management', 'Account Management'],
  },
  {
    name: 'eBay',
    logo: '/ebay.png',
    color: '#E53238',
    description:
      'Store setup, product listings, optimization, promoted listings and management.',
    services: ['Store Setup', 'Product Listings', 'Listing Optimization', 'Promoted Listings', 'Store Management'],
  },
  {
    name: 'Walmart',
    logo: '/walmart.png',
    color: '#0071CE',
    description:
      'Seller setup, catalog management, optimization, advertising and account management.',
    services: ['Seller Setup', 'Catalog Management', 'Listing Optimization', 'Walmart Ads', 'Account Management'],
  },
  {
    name: 'Etsy',
    logo: '/etsy.png',
    color: '#F1641E',
    description:
      'Shop setup, product listings, Etsy SEO, optimization and management.',
    services: ['Shop Setup', 'Product Listings', 'Etsy SEO', 'Listing Optimization', 'Shop Management'],
  },
  {
    name: 'Shopify',
    logo: '/shopify.png',
    color: '#96BF48',
    description:
      'Store development, design, products, payments, apps, SEO and conversion optimization.',
    services: ['Store Development', 'Store Design', 'Payment Integration', 'App Integration', 'CRO'],
  },
  {
    name: 'TikTok Shop',
    logo: '/tiktok.png',
    color: '#00F2EA',
    description:
      'Shop setup, product management, content, affiliate support and TikTok advertising.',
    services: ['Shop Setup', 'Product Management', 'Content Strategy', 'Affiliate Support', 'TikTok Ads'],
  },
]

export function MarketplacePlatforms() {
  return (
    <section id="platforms" className="section-light section-padding">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Marketplace Platforms"
          title="One Agency. Multiple E-Commerce Platforms."
          description="Launch, manage and grow your business across the platforms your customers already use."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 80}>
              <div className="card-light group flex h-full flex-col p-6">
                {/* LOGO BOX */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-light bg-white p-2.5 transition-all duration-250 group-hover:scale-105"
                  style={{ backgroundColor: `${platform.color}10` }}
                >
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mt-5 font-display text-[20px] font-bold text-text-primary">
                  {platform.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {platform.description}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {platform.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-[13px] text-text-secondary"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      />
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`#${platform.name.toLowerCase().replace(' ', '-')}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-electric-blue transition-all duration-200 group-hover:gap-2.5"
                >
                  Explore Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}