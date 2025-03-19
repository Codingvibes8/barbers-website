

import Hero from '@/components/Hero'
import About from '@/app/about/page'
import Contact from '@/app/contact/page'
import BarberGallery from '@/components/Gallery'
import Services from '@/app/services/page'
import AppointmentPage from './appointment/page'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
    <Hero/>
      <About/>
      <Services/>
      <BarberGallery/>
      <Contact/>
      <AppointmentPage/>
    </div>
  );
}
