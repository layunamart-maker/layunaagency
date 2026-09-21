import { Reveal } from '@/components/ui/Reveal'
import { ArrowRight, MessageCircle, Mail } from 'lucide-react'
import Link from 'next/link'

const WHATSAPP_NUMBER = '18436381773'
const WHATSAPP_MESSAGE = `Hello Layuna Agency! 👋

I'd like to discuss my e-commerce business and how your team can help.

Please let me know how we can get started.`

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-deep-navy section-padding">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse, rgba(79,140,255,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="container-layuna relative">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-h2 max-w-3xl text-balance text-white">
              Ready to Build Your E-Commerce Business?
            </h2>
            <p className="text-body-lg mt-5 max-w-2xl text-pretty text-white/55">
              Tell us what you&apos;re building. We&apos;ll help you plan the next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary">
                Get Started
                <ArrowRight className="arrow h-4 w-4" />
              </Link>

              {/* WHATSAPP — opens WhatsApp with pre-filled message */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>

              {/* Consultation — opens email */}
              <a
                href="mailto:layunamart@gmail.com?subject=Consultation%20Request%20-%20Layuna%20Agency&body=Hello%20Layuna%20Agency%2C%0A%0AI%20would%20like%20to%20request%20a%20consultation%20regarding%20my%20e-commerce%20business.%0A%0AThank%20you."
                className="btn-secondary"
              >
                <Mail className="h-4 w-4" />
                Request a Consultation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}