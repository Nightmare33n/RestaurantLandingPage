import Navbar from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import ExperienceSection from './components/ExperienceSection'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <ExperienceSection />
      <ReservationSection />
      <Footer />
    </div>
  );
}
