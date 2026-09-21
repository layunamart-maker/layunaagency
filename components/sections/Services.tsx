import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  Briefcase,
  Search,
  Truck,
  MonitorSmartphone,
  TrendingUp,
  Palette,
  Share2,
  Code2,
} from 'lucide-react'

const serviceCategories = [
  {
    icon: Briefcase,
    title: 'E-Commerce Business Setup',
    services: [
      'E-Commerce Consultation',
      'Business Model Planning',
      'Market Research',
      'Business Strategy',
      'LLC / Business Setup Support',
      'Seller Account Setup',
      'Payment Solution Guidance',
      'Business Documentation Support',
    ],
  },
  {
    icon: Search,
    title: 'Product Research',
    services: [
      'Product Hunting',
      'Niche Research',
      'Market Research',
      'Competitor Research',
      'Keyword Research',
      'Demand Analysis',
      'Profitability Analysis',
      'Product Validation',
    ],
  },
  {
    icon: Truck,
    title: 'Product Sourcing',
    services: [
      'Alibaba Sourcing',
      'Manufacturer Research',
      'Supplier Verification',
      'Wholesale Sourcing',
      'Private Label',
      'MOQ Negotiation',
      'Product Samples',
      'Supplier Communication',
    ],
  },
  {
    icon: MonitorSmartphone,
    title: 'Store Development',
    services: [
      'Shopify',
      'WooCommerce',
      'Custom E-Commerce Website',
      'Store Design',
      'Product Upload',
      'Payment Integration',
      'Shipping Setup',
      'Conversion Optimization',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing (SEO)',
    services: [
      'Search Engine Optimization',
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Local SEO',
      'Keyword Strategy',
      'Link Building',
      'SEO Audits',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    services: [
      'Social Media Strategy',
      'Content Creation',
      'Instagram Marketing',
      'Facebook Marketing',
      'TikTok Marketing',
      'LinkedIn Marketing',
      'Community Management',
      'Social Media Advertising',
    ],
  },
  {
    icon: Palette,
    title: 'Graphic Designing',
    services: [
      'Logo Design',
      'Brand Identity Design',
      'Packaging Design',
      'Social Media Graphics',
      'Banner Design',
      'Infographics',
      'Print Design',
      'Ad Creatives',
    ],
  },
  {
    icon: Code2,
    title: 'Web Development (3D + UI/UX)',
    services: [
      'Custom Website Development',
      'UI/UX Design',
      '3D Web Experiences',
      'Landing Page Design',
      'Responsive Web Design',
      'Frontend Development',
      'Backend Development',
      'Web Application Development',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need to Build & Grow Online"
          description="From e-commerce operations to digital marketing, design and development — Layuna provides the full range of services for a modern online business."
          light
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {serviceCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 80}>
              <div className="card-light h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-blue-surface">
                  <category.icon className="h-6 w-6 text-electric-blue" />
                </div>
                <h3 className="mt-5 font-display text-[22px] font-bold text-text-primary">
                  {category.title}
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-[13px] text-text-secondary"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-electric-blue" />
                      {service}
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