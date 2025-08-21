'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Diagonal Split Layout */}
      <div className="flex min-h-screen">
        {/* Left Side - Content */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-amber-900">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-20 px-8 sm:px-12 lg:px-16 max-w-2xl">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">Maison</span>
                <span className="text-amber-400 block">Étoile</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Descubre una experiencia culinaria única donde cada plato cuenta una historia de tradición, pasión y sabores excepcionales
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center justify-center">
                    Ver Menú
                    <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="group border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    Reservar Mesa
                    <svg className="ml-2 h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Features - Mobile/Tablet */}
            <div className={`mt-12 lg:hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                <div className="text-center group">
                  <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/30 transition-colors duration-300">
                    <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Horarios Flexibles</h3>
                  <p className="text-gray-400 text-xs">12:00 PM - 11:00 PM</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/30 transition-colors duration-300">
                    <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Ubicación Central</h3>
                  <p className="text-gray-400 text-xs">Corazón de la ciudad</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/30 transition-colors duration-300">
                    <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">Pasión Culinaria</h3>
                  <p className="text-gray-400 text-xs">Ingredientes frescos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Diagonal Cut */}
        <div className="hidden lg:block relative w-1/2">
          {/* Diagonal cut overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 transform -skew-x-12 origin-top-right -ml-32 z-0"></div>
          
          {/* Image */}
          <div className="relative h-full">
            <Image
              src="/images/heroimage.jpg"
              alt="Restaurante elegante"
              fill
              className="object-cover"
              priority
            />
            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Features overlay on image */}
            <div className={`absolute bottom-20 left-12 right-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 gap-6 text-white">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 group hover:bg-black/85 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-amber-500/30 transition-colors duration-300">
                      <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horarios Flexibles</h3>
                      <p className="text-gray-300 text-sm">Abierto todos los días de 12:00 PM a 11:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 group hover:bg-black/85 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-amber-500/30 transition-colors duration-300">
                      <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Pasión por la Cocina</h3>
                      <p className="text-gray-300 text-sm">Ingredientes frescos y recetas tradicionales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}