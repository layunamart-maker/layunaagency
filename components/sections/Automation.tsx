'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  RefreshCw,
  Package,
  HeadphonesIcon,
  Mail,
  MessageCircle,
  Database,
  BarChart3,
  Bot,
} from 'lucide-react'

const automationServices = [
  { icon: Package, label: 'Order Automation' },
  { icon: RefreshCw, label: 'Inventory Automation' },
  { icon: HeadphonesIcon, label: 'Customer Support Automation' },
  { icon: Mail, label: 'Email Automation' },
  { icon: MessageCircle, label: 'WhatsApp Automation' },
  { icon: Database, label: 'CRM Integration' },
  { icon: BarChart3, label: 'Reporting Automation' },
  { icon: Bot, label: 'AI-Assisted Workflows' },
]

export function Automation() {
  return (
    <section id="automation" className="section-padding bg-deep-navy">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="E-Commerce Automation"
          title="Automate Your Operations. Focus on Growth."
          description="Streamline repetitive tasks and workflows with modern automation tools and integrations."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {automationServices.map((service, i) => (
            <Reveal key={service.label} delay={i * 60}>
              <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center transition-all duration-250 hover:-translate-y-1.5 hover:border-electric-blue/20 hover:bg-white/[0.04]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/10 transition-colors group-hover:bg-electric-blue/15">
                  <service.icon className="h-5 w-5 text-electric-blue" />
                </div>
                <p className="mt-4 text-[13px] font-medium text-white/70">
                  {service.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 flex items-center justify-center gap-3 overflow-x-auto py-4 scrollbar-hide">
            {['Order Placed', 'Processed', 'Fulfilled', 'Delivered', 'Reviewed'].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-electric-blue/20 text-[10px] font-bold text-electric-blue">
                      {i + 1}
                    </span>
                    <span className="whitespace-nowrap text-[12px] font-medium text-white/60">
                      {step}
                    </span>
                  </div>
                  {i < 4 && (
                    <div className="h-[1px] w-6 bg-gradient-to-r from-electric-blue/40 to-electric-blue/10" />
                  )}
                </div>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}