import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | Layuna Agency',
  description:
    'Terms and Conditions governing the use of Layuna Agency services and website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-midnight pt-[72px] lg:pt-[80px]">
      <div className="container-layuna py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-electric-blue transition-colors hover:text-bright-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto mt-10 max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="text-h2 mt-4 text-white">Terms & Conditions</h1>
          <p className="mt-3 text-[14px] text-white/45">
            Last updated: January 2026
          </p>

          <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-white/65">
            <Section title="1. Agreement to Terms">
              By accessing or using the Layuna Agency website and services, you
              agree to be bound by these Terms & Conditions. If you do not agree
              with any part of these terms, please discontinue use of our website
              and services.
            </Section>

            <Section title="2. Services Overview">
              Layuna Agency provides e-commerce and digital business solutions,
              including but not limited to:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>E-Commerce business setup and consultation</li>
                <li>USA business formation (LLC, LTD, EIN registration support)</li>
                <li>Payment solution setup (PayPal, Payoneer, Stripe, Wise)</li>
                <li>Physical US bank account opening support</li>
                <li>Product research, sourcing and supplier verification</li>
                <li>Marketplace management (Amazon, eBay, Walmart, Etsy, Shopify, TikTok Shop)</li>
                <li>Digital marketing, SEO, social media marketing and graphic design</li>
                <li>Web development (3D, UI/UX and custom coding)</li>
                <li>Branding, creative and automation services</li>
                <li>Logistics and fulfillment coordination support</li>
              </ul>
            </Section>

            <Section title="3. Client Responsibilities">
              As a client, you agree to:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Provide accurate, current and complete information</li>
                <li>Comply with the terms of service of all third-party platforms (Amazon, eBay, Walmart, Etsy, Shopify, TikTok Shop, PayPal, Payoneer, banks, etc.)</li>
                <li>Not use our services for illegal, fraudulent or deceptive activities</li>
                <li>Maintain confidentiality of any account credentials shared with us</li>
                <li>Promptly communicate any changes affecting your account or project</li>
              </ul>
            </Section>

            <Section title="4. Payments & Fees">
              Service fees, package pricing and payment schedules are provided upon
              consultation or as specified in a written agreement. Pricing displayed
              on the website is indicative and may be subject to change. All
              services are performed on a service-fee basis unless a separate
              written agreement specifies otherwise.
            </Section>

            <Section title="5. Investment Program Terms">
              The Layuna Agency Amazon E-Commerce Investment Program is subject to
              the following general terms:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Minimum investment: $5,000 (starting)</li>
                <li>Minimum term: 6 months</li>
                <li>Specific terms, responsibilities, fees, ownership, and exit conditions are governed by a formal signed agreement</li>
                <li>No specific sales, profit, or investment return is guaranteed unless expressly stated in the agreement</li>
                <li>Business and investment activities involve risk</li>
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              All content on this website, including text, graphics, logos, design
              elements and code, is the property of Layuna Agency and is protected
              by applicable copyright and intellectual property laws. You may not
              reproduce, distribute or use our content without written permission.
            </Section>

            <Section title="7. Third-Party Platforms">
              Layuna Agency is an independent service provider. We are not
              affiliated, endorsed by, or officially partnered with Amazon, eBay,
              Walmart, Etsy, Shopify, TikTok, PayPal, Payoneer, Stripe, Wise, or any
              banking institution unless expressly stated in writing. All
              trademarks belong to their respective owners.
            </Section>

            <Section title="8. Limitation of Liability">
              To the maximum extent permitted by law, Layuna Agency shall not be
              liable for any indirect, incidental, special, consequential or
              punitive damages arising out of or relating to your use of our
              services, including but not limited to loss of profits, data, or
              business opportunities.
            </Section>

            <Section title="9. No Guarantees">
              While we strive for excellence in our services, we do not guarantee:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Specific sales, revenue or profit figures</li>
                <li>Specific rankings on any marketplace or search engine</li>
                <li>Approval of any business entity, banking, or payment application by third parties</li>
                <li>Continued availability of any third-party platform or service</li>
              </ul>
            </Section>

            <Section title="10. Confidentiality">
              Both parties agree to maintain the confidentiality of proprietary
              information shared during the course of the engagement, unless
              disclosure is required by law or authorized in writing.
            </Section>

            <Section title="11. Termination">
              Either party may terminate services subject to the terms of the
              specific service agreement. Fees for services already rendered remain
              payable.
            </Section>

            <Section title="12. Governing Law">
              These Terms & Conditions are governed by the laws applicable in the
              jurisdictions where Layuna Agency operates. Any disputes shall be
              resolved through good-faith negotiation or as specified in the
              relevant service agreement.
            </Section>

            <Section title="13. Changes to Terms">
              We reserve the right to update these Terms & Conditions at any time.
              Continued use of our website or services after changes constitutes
              acceptance of the updated terms.
            </Section>

            <Section title="14. Contact Information">
              For questions about these Terms & Conditions, contact us at:
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-[14px] text-white/70">
                  <strong className="text-white">Layuna Agency</strong>
                  <br />
                  Sialkot • Lahore • Islamabad, Pakistan
                  <br />
                  Austin, Texas, USA
                  <br />
                  Email:{' '}
                  <a
                    href="mailto:layunamart@gmail.com"
                    className="text-electric-blue hover:underline"
                  >
                    layunamart@gmail.com
                  </a>
                  <br />
                  WhatsApp: +1 (843) 638-1773
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-display text-[20px] font-bold text-white">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}