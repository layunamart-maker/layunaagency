'use client'

import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    q: 'What e-commerce services do you provide?',
    a: 'Layuna Agency provides e-commerce business setup, product research, product sourcing, store development, marketplace management, marketing, branding, automation and logistics support across major platforms including Amazon, eBay, Walmart, Etsy, Shopify and TikTok Shop.',
  },
  {
    q: 'Which marketplaces do you support?',
    a: 'We support Amazon, eBay, Walmart, Etsy, Shopify and TikTok Shop. Our services cover account setup, product listings, optimization, advertising, inventory management, order management and full account management across these platforms.',
  },
  {
    q: 'Do you work with new sellers?',
    a: 'Yes. We work with new sellers through our Starter package, which includes account setup, basic product research, store setup, initial consultation and basic support.',
  },
  {
    q: 'Can you manage an existing store?',
    a: 'Yes. We provide ongoing management for existing stores across all supported platforms. This includes product management, listing optimization, inventory management, order management, advertising management and account health monitoring.',
  },
  {
    q: 'Do you provide product research?',
    a: 'Yes. Our product research services include product hunting, niche research, market research, competitor research, keyword research, demand analysis, profitability analysis and product validation.',
  },
  {
    q: 'Do you source products?',
    a: 'Yes. We provide product sourcing services including Alibaba sourcing, manufacturer research, supplier verification, wholesale sourcing, private label, MOQ negotiation, product samples and supplier communication.',
  },
  {
    q: 'Do you provide Amazon PPC?',
    a: 'Yes. Amazon PPC management is part of our Amazon services. We manage sponsored products, sponsored brands and sponsored display campaigns, with ongoing optimization and reporting.',
  },
  {
    q: 'Do you build Shopify stores?',
    a: 'Yes. We provide Shopify store development including store setup, design, theme customization, product upload, collection setup, payment integration, shipping setup, app integration, Shopify SEO, conversion optimization and ongoing Shopify management.',
  },
  {
    q: 'Do you provide e-commerce VA services?',
    a: 'Yes. We provide virtual assistant services for e-commerce operations, including Amazon VA, eBay VA and Walmart VA support, as well as general e-commerce operational support.',
  },
  {
    q: 'What is included in store management?',
    a: 'Store management includes account management, product management, listing management, inventory management, order management, pricing management, customer support, supplier communication, account health monitoring and reporting.',
  },
  {
    q: 'What is the minimum investment for the Amazon investment program?',
    a: 'The starting investment for the Amazon E-Commerce Investment Program is $5,000. This is the minimum investment level for qualified investors.',
  },
  {
    q: 'What does the $5,000 investment package include?',
    a: 'The package can include LLC/business setup, Amazon business account setup, product sourcing and inventory, store launch and configuration, professional store management, product listing and optimization, advertising and operational support, investor access and business transparency, a formal agreement covering the complete arrangement, and ongoing after-sales and business support. Specific inclusions are confirmed in the formal agreement.',
  },
  {
    q: 'What is the minimum investment term?',
    a: 'The minimum investment period is 6 months. After completion of the agreed term, you may request the return of your initial investment subject to the conditions, procedures, and other terms specified in the signed agreement.',
  },
  {
    q: 'How does investor reporting work?',
    a: 'Investors have access to relevant business information and agreed reporting specified in their agreement. This includes business information, agreed reporting, operational updates, documented responsibilities, documented investment terms and documented exit conditions.',
  },
  {
    q: 'What does the formal agreement cover?',
    a: 'The formal agreement covers the specific terms of the arrangement, including responsibilities, fees, ownership arrangements, reporting, and exit conditions. Business and investment activities involve risk, and no specific sales, profit, or return is guaranteed unless expressly stated in the agreement.',
  },
  {
    q: 'How can I contact Layuna?',
    a: 'You can contact us by email at layunamart@gmail.com, through the contact form on this website, or via WhatsApp. Our team will respond to your inquiry as soon as possible.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-midnight">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our services and the Amazon investment program."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 30}>
              <div className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-electric-blue"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-[15px] font-medium text-white/85">
                    {faq.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-250">
                    {openIndex === i ? (
                      <X className="h-3.5 w-3.5 text-electric-blue" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-white/40" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? 'max-h-[400px] opacity-100 pb-5'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[14px] leading-relaxed text-white/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}