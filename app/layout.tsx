import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Layuna Agency | E-Commerce Services, Marketplace Management & Growth',
  description:
    'Layuna Agency provides e-commerce setup, Amazon, eBay, Walmart, Etsy, Shopify and TikTok Shop management, product sourcing, digital marketing, graphic design, social media marketing, web development, branding and business solutions.',
  keywords: [
    'e-commerce agency',
    'e-commerce services',
    'Amazon management',
    'Amazon VA',
    'Amazon FBA management',
    'eBay management',
    'Walmart marketplace management',
    'Etsy management',
    'Shopify development',
    'TikTok Shop management',
    'product research',
    'product sourcing',
    'e-commerce marketing',
    'digital marketing',
    'SEO services',
    'graphic designing',
    'social media marketing',
    'web development',
    'UI UX design',
    '3D web design',
    'e-commerce business management',
  ],
  authors: [{ name: 'Layuna Agency' }],
  creator: 'Layuna Agency',
  publisher: 'Layuna Agency',
  metadataBase: new URL('https://layunaagency.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://layunaagency.netlify.app',
    siteName: 'Layuna Agency',
    title: 'Layuna Agency | E-Commerce Services, Marketplace Management & Growth',
    description:
      'Complete e-commerce solutions for businesses, brands, sellers, and investors across global marketplaces.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layuna Agency | E-Commerce Services & Marketplace Management',
    description:
      'E-commerce business setup, marketplace management, product research, sourcing, marketing and growth solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-midnight text-white antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Layuna Agency',
              url: 'https://layunaagency.netlify.app',
              email: 'layunamart@gmail.com',
              telephone: '+1-843-638-1773',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sialkot',
                addressRegion: 'Punjab',
                addressCountry: 'PK',
              },
              description:
                'E-Commerce & Digital Business Solutions Agency providing setup, management, marketing, sourcing and growth services across global marketplaces.',
            }),
          }}
        />
      </body>
    </html>
  )
}