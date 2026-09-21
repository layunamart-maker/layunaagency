import { Reveal } from '@/components/ui/Reveal'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface PlatformServiceProps {
  id: string
  eyebrow: string
  title: string
  description: string
  services: string[]
  cta?: { label: string; href: string }
  accentColor: string
  logo: string
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
  logo,
  dark = false,
}: PlatformServiceProps) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-midnight' : 'bg-light-bg'}`}
    >
      <div className="container-layuna">
        {/* Header with LOGO */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div
              className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl p-4 ${
                dark ? 'bg-white/[0.04]' : 'bg-white'
              }`}
              style={{
                border: dark
                  ? '1px solid rgba(255,255,255,0.08)'
                  : '1px solid #E5E9F2',
              }}
            >
              <Image
                src={logo}
                alt={`${eyebrow} logo`}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="eyebrow text-electric-blue mb-4">{eyebrow}</span>
            <h2
              className={`text-h2 max-w-3xl text-balance ${
                dark ? 'text-white' : 'text-text-primary'
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-body-lg mt-5 max-w-2xl text-pretty ${
                dark ? 'text-white/55' : 'text-text-secondary'
              }`}
            >
              {description}
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
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
        logo="/amazon.png"
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
        logo="/ebay.png"
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
        logo="/walmart.png"
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
        logo="/etsy.png"
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
        logo="/shopify.png"
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
        logo="/tiktok.png"
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