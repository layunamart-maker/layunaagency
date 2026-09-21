import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Layuna Agency',
  description:
    'Privacy Policy for Layuna Agency — how we collect, use, and protect information for our e-commerce, entity setup, marketplace management and digital services.',
}

export default function PrivacyPage() {
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
          <h1 className="text-h2 mt-4 text-white">Privacy Policy</h1>
          <p className="mt-3 text-[14px] text-white/45">
            Effective Date: January 1, 2026 &nbsp;•&nbsp; Last Updated: January 1, 2026
          </p>

          <p className="mt-8 text-[15px] leading-relaxed text-white/70">
            Layuna Agency is an international e-commerce and digital business
            solutions agency. This Privacy Policy explains how we collect, use,
            disclose, and safeguard information when you visit our website, submit
            an inquiry, engage our services, or participate in our programs —
            including e-commerce setup, entity formation, marketplace management,
            digital marketing, design, development, and the Amazon E-Commerce
            Investment Program.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            By using our website or services, you agree to the practices described
            in this Privacy Policy.
          </p>

          <div className="mt-12 flex flex-col gap-10 text-[15px] leading-relaxed text-white/65">
            <Section title="1. Who We Are">
              Layuna Agency provides e-commerce and digital business services to
              clients worldwide. Our registered operations include offices and
              service points in:
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <ul className="space-y-1.5 text-[14px] text-white/70">
                  <li>• Sialkot, Punjab, Pakistan — Head Office (Ali Center, Sialkot)</li>
                  <li>• Lahore, Punjab, Pakistan — Operations Office</li>
                  <li>• Islamabad, Pakistan — Operations Office</li>
                  <li>• Austin, Texas, United States — US Operations & Client Support</li>
                </ul>
              </div>
              We serve clients across the USA, UK, Canada, Australia, UAE, Pakistan
              and other international markets.
            </Section>

            <Section title="2. Information We Collect">
              We collect information that you voluntarily provide when you contact
              us, submit a form, request a proposal, engage our services, or
              communicate with us through WhatsApp, email, or our website. This may
              include:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">Personal Information:</strong> Full
                  name, email address, WhatsApp or phone number, country, and
                  language preference.
                </li>
                <li>
                  <strong className="text-white">Business Information:</strong>{' '}
                  Business name, business type (new, existing, brand, investor),
                  current platforms (Amazon, eBay, Walmart, Etsy, Shopify, TikTok
                  Shop), store URL, and marketplace seller identifiers.
                </li>
                <li>
                  <strong className="text-white">Project Details:</strong> Services
                  required, estimated budget, project timelines, and any messages
                  or requirements you share with us.
                </li>
                <li>
                  <strong className="text-white">Entity &amp; Payment Setup
                  Information:</strong> For entity setup, LLC/LTD formation, EIN
                  registration, PayPal, Payoneer, Stripe, Wise, or physical US bank
                  account opening support, we may collect documents you provide
                  such as identification, address proofs, business registration
                  details, and corporate documents. These are shared strictly for
                  the purpose of service delivery.
                </li>
                <li>
                  <strong className="text-white">Technical Information:</strong>{' '}
                  IP address, browser type, device type, referring pages, and
                  approximate location from website analytics.
                </li>
              </ul>
              We do <strong className="text-white">not</strong> collect sensitive
              financial information such as full bank account numbers, credit card
              numbers, or passwords through this website.
            </Section>

            <Section title="3. How We Use Your Information">
              We use the information we collect to:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries and provide requested services</li>
                <li>
                  Prepare proposals, quotations, service agreements and investment
                  program documentation
                </li>
                <li>
                  Coordinate entity formation, payment solution setup, and banking
                  support applications on your behalf
                </li>
                <li>
                  Deliver e-commerce, marketplace management, marketing, design,
                  development and logistics services
                </li>
                <li>Communicate project updates, reports and support responses</li>
                <li>
                  Verify inquiries and prevent spam, fraud, or misuse of our
                  contact forms (including CAPTCHA verification)
                </li>
                <li>Improve our website, services, and customer experience</li>
                <li>Comply with applicable legal, tax, and regulatory obligations</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing">
              Depending on your jurisdiction (including GDPR, UK GDPR, and similar
              frameworks), we process your personal information on the following
              legal bases:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">Contract:</strong> To deliver
                  services you have engaged us for, or to take steps at your request
                  before entering into a contract.
                </li>
                <li>
                  <strong className="text-white">Legitimate Interest:</strong> To
                  respond to inquiries, prevent fraud, and improve our services.
                </li>
                <li>
                  <strong className="text-white">Consent:</strong> Where you have
                  provided explicit consent (e.g., for marketing communications).
                </li>
                <li>
                  <strong className="text-white">Legal Obligation:</strong> To
                  comply with applicable laws and regulations.
                </li>
              </ul>
            </Section>

            <Section title="5. Information Sharing & Disclosure">
              Layuna Agency does <strong className="text-white">not sell, rent, or trade</strong>{' '}
              your personal information. We may share information only in the
              following limited circumstances:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">Service Providers:</strong> With
                  trusted third-party providers who help us operate — for example,
                  FormSubmit (for form delivery), email providers, hosting
                  providers, analytics tools, and payment processors. These
                  providers only receive the information necessary to perform
                  their function.
                </li>
                <li>
                  <strong className="text-white">Business Formation &amp; Banking
                  Partners:</strong> When you engage us for LLC, LTD, EIN, PayPal,
                  Payoneer, Stripe, Wise, or physical US bank account setup, we
                  share your submitted documents with the relevant registered
                  agents, banks, or payment providers solely for the purpose of
                  completing the requested application. Your information is not used
                  by these parties for unrelated purposes.
                </li>
                <li>
                  <strong className="text-white">Marketplace &amp; Platform
                  Partners:</strong> When managing your seller accounts on Amazon,
                  eBay, Walmart, Etsy, Shopify, or TikTok Shop, we may access your
                  account information on your behalf with your authorization.
                </li>
                <li>
                  <strong className="text-white">Legal Compliance:</strong> When
                  required by law, court order, or to protect the rights, property
                  or safety of Layuna Agency, our clients, or others.
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong> In the
                  event of a merger, acquisition, or sale of assets, information may
                  be transferred as part of that transaction with continued
                  protection under this policy.
                </li>
              </ul>
            </Section>

            <Section title="6. Payment & Financial Information">
              Layuna Agency does <strong className="text-white">not process card
              payments</strong> directly on this website. Where payment is required
              for services, we work with secure third-party processors, or issue
              invoices via email. All engagement-specific commercial terms — fees,
              ownership arrangements, refunds, and exit conditions — are governed by
              a signed service agreement or written proposal.
            </Section>

            <Section title="7. Investment Program — Data Handling">
              For clients participating in the Amazon E-Commerce Investment Program,
              we handle personal, business and investment-related documentation in
              accordance with the signed agreement. Information provided for the
              investment program is:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Used strictly for the delivery of the program as described in the agreement</li>
                <li>Kept confidential between Layuna Agency and the investor</li>
                <li>
                  Reported to the investor through agreed reporting channels and
                  intervals
                </li>
                <li>
                  Retained for the duration of the program and for a reasonable
                  period thereafter for compliance and record-keeping
                </li>
              </ul>
              Business and investment activities involve risk. No specific sales,
              profit, or return is guaranteed unless expressly stated in the signed
              agreement.
            </Section>

            <Section title="8. Data Security">
              We take reasonable technical and organizational measures to protect
              your information from unauthorized access, alteration, disclosure, or
              destruction. These measures include:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Encrypted connections (HTTPS) across our website</li>
                <li>CAPTCHA verification on inquiry forms to prevent automated abuse</li>
                <li>Restricted access to client information within our team</li>
                <li>Secure storage of submitted documents</li>
                <li>Signed confidentiality provisions in client agreements</li>
              </ul>
              However, no method of transmission over the internet is 100% secure.
              While we strive to protect your data, we cannot guarantee absolute
              security. We encourage you to contact us directly through secure
              channels for highly sensitive documents.
            </Section>

            <Section title="9. Third-Party Services & Links">
              Our website may use or link to third-party services including:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>FormSubmit (for secure contact form delivery)</li>
                <li>WhatsApp (for direct messaging)</li>
                <li>Analytics and performance tools</li>
                <li>Marketplace and platform links (Amazon, eBay, Walmart, Etsy, Shopify, TikTok Shop)</li>
                <li>Payment providers linked only as reference (PayPal, Payoneer, Stripe, Wise, Mercury)</li>
              </ul>
              These third parties have their own privacy policies. We are not
              responsible for the privacy practices of external websites or
              platforms. We encourage you to review their policies before submitting
              information.
            </Section>

            <Section title="10. Cookies & Tracking">
              Our website may use minimal cookies and similar technologies for:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Essential functionality and security</li>
                <li>Anonymous visitor analytics</li>
                <li>User experience preferences</li>
              </ul>
              You can disable cookies through your browser settings. Disabling
              cookies may affect certain website features. We do not use cookies for
              invasive tracking or sell cookie data to advertisers.
            </Section>

            <Section title="11. Your Privacy Rights">
              Depending on your location, you may have the following rights
              regarding your personal information:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">Access:</strong> Request a copy of
                  the personal information we hold about you
                </li>
                <li>
                  <strong className="text-white">Correction:</strong> Request
                  correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong className="text-white">Deletion:</strong> Request deletion
                  of your personal information (subject to legal retention
                  requirements)
                </li>
                <li>
                  <strong className="text-white">Restriction:</strong> Request that
                  we limit processing of your information
                </li>
                <li>
                  <strong className="text-white">Portability:</strong> Request a
                  machine-readable copy of your data
                </li>
                <li>
                  <strong className="text-white">Objection:</strong> Object to
                  certain types of processing, including direct marketing
                </li>
                <li>
                  <strong className="text-white">Withdraw Consent:</strong> Withdraw
                  consent where processing is based on consent
                </li>
              </ul>
              To exercise any of these rights, contact us at{' '}
              <a
                href="mailto:layunamart@gmail.com"
                className="text-electric-blue underline-offset-4 hover:underline"
              >
                layunamart@gmail.com
              </a>
              . We will respond to reasonable requests within the timeframes
              required by applicable law.
            </Section>

            <Section title="12. Data Retention">
              We retain personal information only as long as necessary for the
              purposes described in this policy, or as required by applicable law.
              Retention periods may vary based on:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>The nature of the service provided</li>
                <li>Legal, tax, and accounting requirements</li>
                <li>Dispute resolution and contract enforcement</li>
                <li>Investment program terms specified in signed agreements</li>
              </ul>
              When no longer needed, information is securely deleted or anonymized.
            </Section>

            <Section title="13. International Data Transfers">
              Layuna Agency operates internationally, with team members and service
              providers in Pakistan, the United States, and other countries. By
              using our services, you understand that your information may be
              transferred to and processed in countries other than your own. We take
              reasonable steps to ensure your information receives an adequate level
              of protection consistent with this Privacy Policy.
            </Section>

            <Section title="14. Children's Privacy">
              Our services are intended for businesses, entrepreneurs, sellers and
              investors. We do not knowingly collect personal information from
              individuals under the age of 18. If you believe we have inadvertently
              collected information from a minor, please contact us so we can delete
              it.
            </Section>

            <Section title="15. Marketing Communications">
              If you opt in to receive marketing communications, we may send you
              information about services, updates, or offers. You can opt out at any
              time by:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Replying to any marketing email with &quot;Unsubscribe&quot;</li>
                <li>
                  Emailing{' '}
                  <a
                    href="mailto:layunamart@gmail.com"
                    className="text-electric-blue underline-offset-4 hover:underline"
                  >
                    layunamart@gmail.com
                  </a>
                </li>
                <li>Contacting us via WhatsApp at +1 (843) 638-1773</li>
              </ul>
              Opting out of marketing communications will not affect service-related
              communications for active projects.
            </Section>

            <Section title="16. Changes to This Privacy Policy">
              We may update this Privacy Policy from time to time to reflect changes
              in our services, legal requirements, or industry practices. When we
              make material changes, we will update the &quot;Last Updated&quot;
              date at the top of this page. We encourage you to review this policy
              periodically.
            </Section>

            <Section title="17. Contact Us">
              If you have questions, concerns, or requests regarding this Privacy
              Policy or how we handle your information, please contact us:
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-[14px] leading-relaxed text-white/70">
                  <strong className="text-white">Layuna Agency</strong>
                  <br />
                  Sialkot • Lahore • Islamabad, Pakistan
                  <br />
                  Austin, Texas, United States
                  <br />
                  <br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a
                    href="mailto:layunamart@gmail.com"
                    className="text-electric-blue hover:underline"
                  >
                    layunamart@gmail.com
                  </a>
                  <br />
                  <strong className="text-white">WhatsApp:</strong> +1 (843) 638-1773
                </p>
              </div>
            </Section>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
            <p className="text-[12px] text-white/35">
              © 2026 Layuna Agency. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-[12px] text-electric-blue transition-colors hover:text-bright-blue"
              >
                Terms & Conditions →
              </Link>
            </div>
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
      <h2 className="font-display text-[20px] font-bold text-white md:text-[22px]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}