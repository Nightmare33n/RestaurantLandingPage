'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('experiencia')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserver(section)
      }
    }
  }, [])

  const experiences = [
    {
      title: "Cena de Lujo",
      description: "Una experiencia gastronómica refinada con nuestros platos más exquisitos en un ambiente de elegancia absoluta.",
      image: "luxury-dinner.jpeg"
    },
    {
      title: "Cena Maridaje",
      description: "Descubra la perfecta armonía entre nuestros platos signature y una selección exclusiva de vinos premium.",
      image: "restaurant-table-with-cups-and-wine.jpeg"
    },
    {
      title: "Terraza Privada",
      description: "Disfrute de una velada romántica en nuestra terraza privada con vista panorámica de la ciudad.",
      image: "restaurant-balcony.jpeg"
    }
  ]

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experiencias <span className="text-amber-400">Únicas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Más que una cena, ofrecemos momentos inolvidables que despiertan todos sus sentidos 
            en un ambiente de sofisticación y elegancia sin igual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/images/${experience.image}`}
                    alt={experience.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>
                  
                  <button className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300 group-hover:translate-x-1">
                    Descubrir más
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 backdrop-blur-md border border-amber-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Reservas Especiales</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cada experiencia está cuidadosamente diseñada para crear recuerdos únicos. 
              Permítanos personalizar su visita según sus preferencias y celebraciones especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Reservar Experiencia
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}