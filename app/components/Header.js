'use client'

import { useState } from 'react'

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-400">Maison Étoile</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                Inicio
              </a>
              <a href="#menu" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                Menú
              </a>
              <a href="#sobre-nosotros" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                Sobre Nosotros
              </a>
              <a href="#reservas" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                Reservas
              </a>
              <a href="#contacto" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                Contacto
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Reservar Mesa
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-lg mt-2">
              <a href="#inicio" className="text-white hover:text-amber-400 block px-3 py-2 transition-colors duration-300">
                Inicio
              </a>
              <a href="#menu" className="text-white hover:text-amber-400 block px-3 py-2 transition-colors duration-300">
                Menú
              </a>
              <a href="#sobre-nosotros" className="text-white hover:text-amber-400 block px-3 py-2 transition-colors duration-300">
                Sobre Nosotros
              </a>
              <a href="#reservas" className="text-white hover:text-amber-400 block px-3 py-2 transition-colors duration-300">
                Reservas
              </a>
              <a href="#contacto" className="text-white hover:text-amber-400 block px-3 py-2 transition-colors duration-300">
                Contacto
              </a>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 mt-4">
                Reservar Mesa
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}