'use client'

import { useState, useEffect } from 'react'

export default function ReservationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('reservas')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserver(section)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation data:', formData)
  }

  return (
    <section id="reservas" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Reserve su <span className="text-amber-400">Mesa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Asegure su lugar en una experiencia gastronómica excepcional. 
            Nuestro equipo está preparado para hacer de su visita un momento memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Reserva */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-amber-400/30 transition-all duration-500"
              style={{
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Número de Invitados</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="1" className="bg-gray-900">1 persona</option>
                      <option value="2" className="bg-gray-900">2 personas</option>
                      <option value="3" className="bg-gray-900">3 personas</option>
                      <option value="4" className="bg-gray-900">4 personas</option>
                      <option value="5" className="bg-gray-900">5 personas</option>
                      <option value="6+" className="bg-gray-900">6+ personas</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Fecha</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Hora</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="" className="bg-gray-900">Seleccionar hora</option>
                      <option value="12:00" className="bg-gray-900">12:00 PM</option>
                      <option value="12:30" className="bg-gray-900">12:30 PM</option>
                      <option value="13:00" className="bg-gray-900">1:00 PM</option>
                      <option value="13:30" className="bg-gray-900">1:30 PM</option>
                      <option value="19:00" className="bg-gray-900">7:00 PM</option>
                      <option value="19:30" className="bg-gray-900">7:30 PM</option>
                      <option value="20:00" className="bg-gray-900">8:00 PM</option>
                      <option value="20:30" className="bg-gray-900">8:30 PM</option>
                      <option value="21:00" className="bg-gray-900">9:00 PM</option>
                      <option value="21:30" className="bg-gray-900">9:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Ocasión Especial</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-900">Seleccionar ocasión</option>
                    <option value="anniversary" className="bg-gray-900">Aniversario</option>
                    <option value="birthday" className="bg-gray-900">Cumpleaños</option>
                    <option value="business" className="bg-gray-900">Cena de negocios</option>
                    <option value="date" className="bg-gray-900">Cita romántica</option>
                    <option value="celebration" className="bg-gray-900">Celebración</option>
                    <option value="other" className="bg-gray-900">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Solicitudes Especiales</label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Alergias, preferencias dietéticas, solicitudes especiales..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Dirección</p>
                      <p className="text-gray-300">123 Calle Gourmet, Centro Histórico</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Teléfono</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                      <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Horarios</p>
                      <p className="text-gray-300">Mar-Dom: 12:00 PM - 11:00 PM</p>
                      <p className="text-gray-300 text-sm">Lunes: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Políticas de Reserva</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="text-sm leading-relaxed">
                    • Las reservas se confirman con 24 horas de anticipación
                  </p>
                  <p className="text-sm leading-relaxed">
                    • Cancelaciones sin costo hasta 2 horas antes
                  </p>
                  <p className="text-sm leading-relaxed">
                    • Mesa reservada por 2 horas para grupos de hasta 4 personas
                  </p>
                  <p className="text-sm leading-relaxed">
                    • Código de vestimenta: Elegante casual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}