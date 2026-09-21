import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface PlatformServiceProps {
  id: string
  eyebrow: string
  title: string
  description: string
  services: string[]
  cta?: { label: string; href: string }
  accentColor: string
  dark?: boolean
}

function PlatformServiceSection({
  id,
  eyebrow,
  title,
  description,
  services,
  cta,
  accentColor,
  dark = false,
}: PlatformServiceProps) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-midnight' : 'bg-light-bg'}`}
    >
      <div className="container-layuna">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          light={!dark}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service} delay={i * 50}>
              <div
                className={`flex items-start gap-3 rounded-xl border p-4 transition-all duration-250 ${
                  dark
                    ? 'border-white/[0.06] bg-white/[0.02] hover:border-electric-blue/20 hover:bg-white/[0.04]'
                    : 'border-border-light bg-white hover:border-electric-blue/20 hover:shadow-soft'
                }`}
              >
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: accentColor }}
                />
                <span
                  className={`text-[13px] font-medium ${
                    dark ? 'text-white/70' : 'text-text-secondary'
                  }`}
                >
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {cta && (
          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <Link href={cta.href} className="btn-primary">
                {cta.label}
                <ArrowRight className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function PlatformServices() {
  return (
    <>
      <PlatformServiceSection
        id="amazon"
        eyebrow="Amazon Services"
        title="Amazon E-Commerce Management"
        description="Comprehensive Amazon solutions from account setup through to full-scale management."
        accentColor="#FF9900"
        services={[
          'Amazon Seller Account Setup',
          'Amazon Business Setup',
          'Amazon FBA',
          'Amazon FBM',
          'Product Hunting',
          'Product Sourcing',
          'Product Listing',
          'Listing Optimization',
          'Amazon SEO',
          'A+ Content',
          'Brand Store',
          'Amazon PPC',
          'Inventory Management',
          'Order Management',
          'Account Health',
          'Amazon VA',
          'Full Account Management',
        ]}
        cta={{ label: 'Explore Amazon Services', href: '#contact' }}
        dark
      />

      <PlatformServiceSection
        id="ebay"
        eyebrow="eBay Services"
        title="eBay Store Management"
        description="Professional eBay store setup, optimization and management services."
        accentColor="#E53238"
        services={[
          'Account Setup',
          'Store Setup',
          'Product Research',
          'Product Listing',
          'Listing Optimization',
          'eBay SEO',
          'Pricing Management',
          'Order Management',
          'Customer Support',
          'Promoted Listings',
          'eBay VA',
          'Full Store Management',
        ]}
        cta={{ label: 'Explore eBay Services', href: '#contact' }}
      />

      <PlatformServiceSection
        id="walmart"
        eyebrow="Walmart Services"
        title="Walmart Marketplace Management"
        description="Launch and grow your presence on Walmart Marketplace with professional support."
        accentColor="#0071CE"
        services={[
          'Seller Setup',
          'Marketplace Onboarding',
          'Product Listing',
          'Catalog Management',
          'Listing Optimization',
          'Walmart SEO',
          'Walmart PPC',
          'Inventory Management',
          'Order Management',
          'Account Management',
          'Walmart VA',
        ]}
        dark
      />

      <PlatformServiceSection
        id="etsy"
        eyebrow="Etsy Services"
        title="Etsy Shop Management"
        description="Build and optimize a successful Etsy presence with expert shop management."
        accentColor="#F1641E"
        services={[
          'Etsy Shop Setup',
          'Product Research',
          'Product Listing',
          'Etsy SEO',
          'Keyword Research',
          'Listing Optimization',
          'Shop Branding',
          'Product Upload',
          'Customer Support',
          'Etsy Store Management',
        ]}
      />

      <PlatformServiceSection
        id="shopify"
        eyebrow="Shopify Services"
        title="Build Your Shopify Store"
        description="Custom Shopify development and management for direct-to-consumer brands."
        accentColor="#96BF48"
        services={[
          'Shopify Store Setup',
          'Shopify Design',
          'Theme Customization',
          'Product Upload',
          'Collection Setup',
          'Payment Integration',
          'Shipping Setup',
          'App Integration',
          'Shopify SEO',
          'Conversion Optimization',
          'Shopify Management',
        ]}
        cta={{ label: 'Build My Store', href: '#contact' }}
        dark
      />

      <PlatformServiceSection
        id="tiktok"
        eyebrow="TikTok Shop"
        title="Turn Social Traffic Into E-Commerce Sales"
        description="Leverage TikTok's growing commerce ecosystem for your brand."
        accentColor="#00F2EA"
        services={[
          'TikTok Shop Setup',
          'Seller Account Setup',
          'Product Upload',
          'Product Testing',
          'Product Management',
          'TikTok Content',
          'Creator/Affiliate Support',
          'TikTok Ads',
          'Order Management',
          'TikTok Shop Management',
        ]}
      />
    </>
  )
}