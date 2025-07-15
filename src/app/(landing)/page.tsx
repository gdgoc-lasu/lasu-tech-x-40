import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SpeakersSection } from '@/components/sections/speakers-section'
import { ScheduleSection } from '@/components/sections/schedule-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { SponsorsSection } from '@/components/sections/sponsors-section'
import { RegistrationSection } from '@/components/sections/registration-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <GallerySection />
      <SponsorsSection />
      <RegistrationSection />
    </>
  )
}
