'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Enable only on desktop
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setReady(true)

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (!t || !t.closest) return
      setHovering(!!t.closest('a, button, [role="button"], input, select, textarea'))
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18

      setPos({ x: mouseX, y: mouseY })
      setRingPos({ x: ringX, y: ringY })

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseover', onOver)

    // Hide native cursor safely
    document.documentElement.style.cursor = 'none'
    document.body.style.cursor = 'none'

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.style.cursor = ''
      document.body.style.cursor = ''
    }
  }, [])

  if (!ready) return null

  return (
    <>
      {/* Dot */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: clicking ? '14px' : '8px',
          height: clicking ? '14px' : '8px',
          borderRadius: '50%',
          backgroundColor: '#4F8CFF',
          boxShadow: '0 0 12px rgba(79,140,255,0.9)',
          pointerEvents: 'none',
          zIndex: 999999,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          transition: 'width 150ms ease, height 150ms ease',
        }}
      />

      {/* Ring */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: hovering ? '60px' : '36px',
          height: hovering ? '60px' : '36px',
          borderRadius: '50%',
          border: '2px solid rgba(79,140,255,0.7)',
          backgroundColor: hovering ? 'rgba(79,140,255,0.12)' : 'transparent',
          boxShadow: hovering
            ? '0 0 30px rgba(79,140,255,0.35)'
            : '0 0 16px rgba(79,140,255,0.15)',
          pointerEvents: 'none',
          zIndex: 999998,
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`,
          transition: 'width 250ms ease, height 250ms ease, background-color 250ms ease',
        }}
      />
    </>
  )
}