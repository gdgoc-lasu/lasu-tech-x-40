import { HeroSection } from '@/components/sections/hero-section'
import { LastEventGallerySection } from '@/components/sections/last-event-gallery-section'
import { AgendaSection } from '@/components/sections/agenda-section'
import { VenueSection } from '@/components/sections/venue-section'
import { SponsorsSection } from '@/components/sections/sponsors-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastEventGallerySection />
      <AgendaSection />
      <VenueSection />
      <SponsorsSection />
    </>
  )
}
