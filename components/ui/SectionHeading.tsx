import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={`flex flex-col ${
          align === 'center' ? 'items-center text-center' : 'items-start text-left'
        }`}
      >
        {eyebrow && (
          <span className="eyebrow mb-4 text-electric-blue">{eyebrow}</span>
        )}
        <h2
          className={`text-h2 max-w-3xl text-balance ${
            light ? 'text-text-primary' : 'text-white'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-body-lg mt-5 max-w-2xl text-pretty ${
              light ? 'text-text-secondary' : 'text-white/55'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}