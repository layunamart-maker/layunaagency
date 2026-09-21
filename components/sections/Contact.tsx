'use client'

import { useState, useMemo, useEffect } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import {
  Mail,
  MapPin,
  MessageCircle,
  Loader2,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  Briefcase,
} from 'lucide-react'

const initialFormState = {
  fullName: '',
  email: '',
  whatsapp: '',
  country: '',
  businessType: '',
  currentPlatform: '',
  storeUrl: '',
  servicesRequired: '',
  estimatedBudget: '',
  message: '',
  captchaAnswer: '',
}

export function Contact() {
  const [form, setForm] = useState(initialFormState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 })

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 2
    const b = Math.floor(Math.random() * 9) + 2
    setCaptcha({ a, b })
    setForm((f) => ({ ...f, captchaAnswer: '' }))
  }

  const captchaExpected = useMemo(() => captcha.a + captcha.b, [captcha])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required'
    } else if (!/^[+\d][\d\s\-()]{6,}$/.test(form.whatsapp.trim())) {
      newErrors.whatsapp = 'Please enter a valid WhatsApp number'
    }

    if (!form.message.trim()) newErrors.message = 'Message is required'

    if (!form.captchaAnswer.trim()) {
      newErrors.captchaAnswer = 'Please solve the verification'
    } else if (parseInt(form.captchaAnswer, 10) !== captchaExpected) {
      newErrors.captchaAnswer = 'Incorrect answer. Please try again.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    try {
      const response = await fetch('https://formsubmit.co/ajax/layunamart@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Layuna Inquiry from ${form.fullName}`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': form.fullName,
          'Email Address': form.email,
          'WhatsApp Number': form.whatsapp,
          Country: form.country,
          'Business Type': form.businessType,
          'Current Platform': form.currentPlatform,
          'Store URL': form.storeUrl,
          'Services Required': form.servicesRequired,
          'Estimated Budget': form.estimatedBudget,
          Message: form.message,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      setForm(initialFormState)
      generateCaptcha()
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="section-padding bg-light-bg">
        <div className="container-layuna">
          <Reveal>
            <div className="mx-auto max-w-lg rounded-2xl border border-border-light bg-white p-10 text-center shadow-soft">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                <CheckCircle className="h-7 w-7 text-success" />
              </div>
              <h3 className="mt-5 font-display text-[22px] font-bold text-text-primary">
                Thank you. Your inquiry has been received.
              </h3>
              <p className="mt-3 text-[14px] text-text-secondary">
                The Layuna Agency team will contact you regarding your request.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-primary mt-6">
                Send Another Inquiry
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-light-bg">
      <div className="container-layuna">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="text-h2 mt-4 text-balance text-text-primary">
                Let&apos;s Build Your E-Commerce Business.
              </h2>
              <p className="text-body-lg mt-5 max-w-md text-pretty text-text-secondary">
                Tell us what you&apos;re building and what you need help with. Our
                team will help you identify the right solution.
              </p>

              <div className="mt-10 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft-blue-surface">
                    <MapPin className="h-4 w-4 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary">
                      LAYUNA AGENCY
                    </p>
                    <p className="text-[13px] text-text-secondary">
                      Sialkot • Lahore • Islamabad, Pakistan
                    </p>
                    <p className="text-[13px] text-text-secondary">
                      Austin, Texas, USA
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:layunamart@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft-blue-surface">
                    <Mail className="h-4 w-4 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary group-hover:text-electric-blue">
                      Email
                    </p>
                    <p className="text-[13px] text-text-secondary group-hover:text-electric-blue">
                      layunamart@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/18436381773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft-blue-surface">
                    <MessageCircle className="h-4 w-4 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary group-hover:text-electric-blue">
                      WhatsApp
                    </p>
                    <p className="text-[13px] text-text-secondary group-hover:text-electric-blue">
                      +1 (843) 638-1773
                    </p>
                  </div>
                </a>

                <a
                  href="https://protfolioofrafay.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft-blue-surface">
                    <Briefcase className="h-4 w-4 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary group-hover:text-electric-blue">
                      Founder
                    </p>
                    <p className="text-[13px] text-text-secondary group-hover:text-electric-blue">
                      Rafay&apos;s Portfolio — E-Commerce Entrepreneur
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:layunamart@gmail.com" className="btn-primary">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
                <a
                  href="https://wa.me/18436381773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-light p-7 md:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="WhatsApp Number"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    error={errors.whatsapp}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                  <FormField
                    label="Country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Business Type"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    options={['New Business', 'Existing Business', 'Brand', 'Investor', 'Other']}
                  />
                  <SelectField
                    label="Current Platform"
                    name="currentPlatform"
                    value={form.currentPlatform}
                    onChange={handleChange}
                    options={['None', 'Amazon', 'eBay', 'Walmart', 'Etsy', 'Shopify', 'TikTok Shop', 'Multiple']}
                  />
                </div>

                <FormField
                  label="Store URL"
                  name="storeUrl"
                  value={form.storeUrl}
                  onChange={handleChange}
                  placeholder="https://"
                />

                <SelectField
                  label="Services Required"
                  name="servicesRequired"
                  value={form.servicesRequired}
                  onChange={handleChange}
                  options={[
                    'E-Commerce Setup',
                    'USA Business Setup (LLC / LTD)',
                    'PayPal / Payoneer / US Bank Account',
                    'Product Research & Sourcing',
                    'Marketplace Management',
                    'Amazon Services',
                    'eBay Services',
                    'Walmart Services',
                    'Etsy Services',
                    'Shopify Development',
                    'TikTok Shop',
                    'Social Media Marketing',
                    'Graphic Designing',
                    'Web Development (3D + UI/UX)',
                    'Marketing & Advertising',
                    'Branding & Creative',
                    'Investment Program',
                    'Other',
                  ]}
                />

                <SelectField
                  label="Estimated Budget"
                  name="estimatedBudget"
                  value={form.estimatedBudget}
                  onChange={handleChange}
                  options={[
                    'Under $5,000',
                    '$5,000 – $10,000',
                    '$10,000 – $25,000',
                    '$25,000 – $50,000',
                    '$50,000+',
                    'Not sure yet',
                  ]}
                />

                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-text-primary">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project and requirements..."
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-text-primary placeholder:text-text-secondary/50 transition-all duration-250 focus:border-electric-blue focus:outline-none focus:ring-4 focus:ring-electric-blue/10 ${
                      errors.message ? 'border-error' : 'border-border-light'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[12px] text-error">{errors.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-2 text-[13px] font-medium text-text-primary">
                    <ShieldCheck className="h-4 w-4 text-electric-blue" />
                    Security Verification <span className="text-error">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1 items-center gap-2 rounded-xl border border-border-light bg-soft-blue-surface px-4 py-3">
                      <span className="font-display text-[15px] font-bold text-text-primary">
                        {captcha.a} + {captcha.b} =
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        name="captchaAnswer"
                        value={form.captchaAnswer}
                        onChange={handleChange}
                        placeholder="?"
                        className="w-full bg-transparent text-[14px] text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
                        aria-label="CAPTCHA answer"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-light bg-white text-text-secondary transition-all hover:border-electric-blue/30 hover:text-electric-blue"
                      aria-label="Refresh verification question"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                  {errors.captchaAnswer && (
                    <p className="mt-1 text-[12px] text-error">{errors.captchaAnswer}</p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 rounded-xl border border-error/20 bg-error/[0.04] p-3.5">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-error" />
                    <p className="text-[13px] text-error">
                      Something went wrong. Please try again or contact us directly at{' '}
                      <a href="mailto:layunamart@gmail.com" className="underline">
                        layunamart@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>

                <p className="text-center text-[11px] text-text-secondary/60">
                  Your inquiry will be sent securely to our team at layunamart@gmail.com
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-text-primary">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-text-primary placeholder:text-text-secondary/50 transition-all duration-250 focus:border-electric-blue focus:outline-none focus:ring-4 focus:ring-electric-blue/10 ${
          error ? 'border-error' : 'border-border-light'
        }`}
      />
      {error && <p className="mt-1 text-[12px] text-error">{error}</p>}
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-text-primary">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-[14px] text-text-primary transition-all duration-250 focus:border-electric-blue focus:outline-none focus:ring-4 focus:ring-electric-blue/10"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}