

import Hero from '@/components/Hero'
import About from '@/app/about/page'
import Contact from '@/app/contact/page'
import Gallery from '@/app/gallery/page'
import Services from '@/app/services/page'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
    <Hero/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  );
}
