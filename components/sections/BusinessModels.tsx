import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'

const models = [
  { title: 'Amazon FBA', flow: ['Supplier', 'Amazon', 'Customer'] },
  { title: 'Amazon FBM', flow: ['Supplier / Warehouse', 'Customer'] },
  { title: 'Private Label', flow: ['Research', 'Branding', 'Manufacturing', 'Launch'] },
  { title: 'Wholesale', flow: ['Supplier', 'Inventory', 'Marketplace', 'Customer'] },
  { title: 'Shopify DTC', flow: ['Brand', 'Shopify', 'Marketing', 'Customer'] },
  {
    title: 'Multi-Channel',
    flow: ['Brand', 'Amazon / eBay / Walmart / Etsy / Shopify / TikTok Shop'],
  },
]

export function BusinessModels() {
  return (
    <section className="section-padding bg-midnight">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Business Models"
          title="E-Commerce Business Models We Support"
          description="We work across a range of e-commerce business models, providing tailored support for each."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, i) => (
            <Reveal key={model.title} delay={i * 80}>
              <div className="card-dark group h-full p-6">
                <h3 className="font-display text-[20px] font-bold text-white">
                  {model.title}
                </h3>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {model.flow.map((step, j) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-white/60 transition-colors group-hover:border-electric-blue/20 group-hover:text-white/80">
                        {step}
                      </span>
                      {j < model.flow.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0 text-electric-blue/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}