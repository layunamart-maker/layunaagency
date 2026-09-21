import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, CheckCircle, Code2, Layers, Sparkles } from 'lucide-react'
import Link from 'next/link'

const webCategories = [
  {
    icon: Sparkles,
    title: 'UI / UX Design',
    services: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'UI Design',
      'UX Optimization',
      'Design Systems',
      'Usability Testing',
      'Mobile-First Design',
    ],
  },
  {
    icon: Layers,
    title: '3D Web Experiences',
    services: [
      '3D Interactive Websites',
      'WebGL Development',
      'Three.js / React Three Fiber',
      '3D Product Showcases',
      'Scroll-Based 3D Animation',
      '3D Landing Pages',
      'Immersive Experiences',
      'Performance Optimization',
    ],
  },
  {
    icon: Code2,
    title: 'Web Development',
    services: [
      'Custom Website Development',
      'Frontend Development',
      'Backend Development',
      'React / Next.js Development',
      'E-Commerce Websites',
      'Web Applications',
      'API Integration',
      'CMS Development',
      'Responsive Design',
      'Landing Page Development',
      'Website Maintenance',
      'Speed Optimization',
    ],
  },
]

export function WebDevelopment() {
  return (
    <section id="web-development" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <SectionHeading
          eyebrow="Web Development (3D + UI/UX)"
          title="Modern Websites. Beautiful Design. Real Code."
          description="From UI/UX design to 3D interactive experiences and full-stack development — we build websites that perform and impress."
          light
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {webCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="card-light h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-blue-surface">
                  <cat.icon className="h-6 w-6 text-electric-blue" />
                </div>
                <h3 className="mt-5 font-display text-[20px] font-bold text-text-primary">
                  {cat.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {cat.services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric-blue" />
                      <span className="text-[13px] text-text-secondary">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="btn-primary">
              Build My Website
              <ArrowRight className="arrow h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}