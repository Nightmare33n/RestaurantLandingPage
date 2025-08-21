'use client'

import { useState, useEffect } from 'react'

export default function MenuSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('entrantes')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('menu')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserver(section)
      }
    }
  }, [])

  const menuCategories = {
    entrantes: [
      {
        name: "Tartar de Atún Rojo",
        description: "Atún rojo salvaje, aguacate, mango y vinagreta de yuzu",
        price: "$28"
      },
      {
        name: "Foie Gras Sellado",
        description: "Foie gras de pato con reducción de oporto y brioche tostado",
        price: "$35"
      },
      {
        name: "Ceviche de Corvina",
        description: "Corvina fresca, leche de tigre, camote y cancha serrana",
        price: "$24"
      }
    ],
    principales: [
      {
        name: "Cordero Patagónico",
        description: "Rack de cordero con costra de hierbas y reducción de vino tinto",
        price: "$45"
      },
      {
        name: "Risotto de Trufa Negra",
        description: "Arroz carnaroli, trufa negra del Périgord y parmesano 24 meses",
        price: "$38"
      },
      {
        name: "Lubina en Costra de Sal",
        description: "Lubina entera con vegetales mediterráneos y aceite de romero",
        price: "$42"
      }
    ],
    postres: [
      {
        name: "Soufflé de Chocolate",
        description: "Soufflé tibio con helado de vainilla de Madagascar",
        price: "$18"
      },
      {
        name: "Tiramisú Deconstructivo",
        description: "Mascarpone aireado, café etíope y cacao venezolano",
        price: "$16"
      },
      {
        name: "Tarta de Limón",
        description: "Merengue italiano, cuajada de limón y crumble de almendra",
        price: "$15"
      }
    ]
  }

  const categories = [
    { id: 'entrantes', name: 'Entrantes' },
    { id: 'principales', name: 'Platos Principales' },
    { id: 'postres', name: 'Postres' }
  ]

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Nuestra <span className="text-amber-400">Carta</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Una experiencia gastronómica que celebra los sabores más refinados del mundo, 
            elaborados con técnicas contemporáneas y ingredientes de la más alta calidad.
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-500 text-black shadow-lg transform scale-105'
                    : 'text-white hover:text-amber-400 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {menuCategories[activeCategory].map((item, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-400 ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6">
            Todos nuestros platos pueden ser adaptados para dietas especiales
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Ver Carta Completa
          </button>
        </div>
      </div>
    </section>
  )
}