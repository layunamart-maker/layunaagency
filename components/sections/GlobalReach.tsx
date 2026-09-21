import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Globe, MapPin } from 'lucide-react'

const markets = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇵🇰', name: 'Pakistan' },
  { flag: '🌍', name: 'International' },
]

const offices = [
  {
    city: 'Sialkot',
    region: 'Punjab, Pakistan',
    note: 'Head Office — Ali Center, Sialkot',
  },
  {
    city: 'Lahore',
    region: 'Punjab, Pakistan',
    note: 'Operations Office',
  },
  {
    city: 'Islamabad',
    region: 'Pakistan',
    note: 'Operations Office',
  },
  {
    city: 'Austin',
    region: 'Texas, USA',
    note: 'US Operations & Client Support',
  },
]

export function GlobalReach() {
  return (
    <section className="section-padding bg-midnight">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Global E-Commerce"
          title="Built for Global E-Commerce"
          description="Supporting sellers, brands and businesses across international markets from our offices in Pakistan and the United States."
        />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="card-dark p-8">
              <div className="flex items-center justify-center gap-2">
                <Globe className="h-5 w-5 text-electric-blue" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50">
                  Markets We Support
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {markets.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 transition-all duration-250 hover:border-electric-blue/20 hover:bg-white/[0.05]"
                  >
                    <span className="text-[18px]" role="img" aria-label={loc.name}>
                      {loc.flag}
                    </span>
                    <span className="text-[14px] font-medium text-white/70">
                      {loc.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/[0.06] pt-8">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-electric-blue" />
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50">
                    Our Locations
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-all duration-250 hover:border-electric-blue/20 hover:bg-white/[0.04]"
                    >
                      <p className="font-display text-[16px] font-bold text-white">
                        {office.city}
                      </p>
                      <p className="mt-1 text-[12px] text-white/50">{office.region}</p>
                      <p className="mt-2 text-[11px] text-electric-blue/70">
                        {office.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-center text-[13px] text-white/35">
                Service availability may vary by market. Contact us to discuss your
                specific requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}