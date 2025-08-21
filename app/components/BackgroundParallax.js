'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BackgroundParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div 
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      >
        <Image
          src="/images/luxury-restaurant-texture.jpg"
          alt="Luxury restaurant background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  )
}