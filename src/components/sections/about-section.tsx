'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'

export function AboutSection() {
  const { about } = siteContent

  return (
    <section
      className="relative overflow-hidden bg-[#30A832] py-20"
      style={{
        backgroundImage: "url('/images/pattern.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Pattern overlay for better text readability */}
      <div className="absolute inset-0 bg-[#30A832]/80"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Left content */}
          <motion.div
            className="max-w-lg flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to LASU TECH X 4.0
            </motion.h2>

            <motion.p
              className="mb-8 text-lg leading-relaxed text-white/95"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              LASU TECH X is the annual flagship tech festival by GDSC LASU. It brings together students, developers,
              innovators and industry experts for a day of hands-on learning, networking and idea sharing.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mb-8 flex flex-col justify-center gap-6 sm:flex-row sm:gap-12 lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white lg:text-5xl">200+</div>
                <div className="text-sm font-medium text-white/90">Attendees</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white lg:text-5xl">20+</div>
                <div className="text-sm font-medium text-white/90">Talks</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white lg:text-5xl">10</div>
                <div className="text-sm font-medium text-white/90">Speakers</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-3 font-semibold text-[#30A832] transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
              >
                Register
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full border-0 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                Apply to Speak →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="max-w-lg flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">
              <img src={about.image} alt="About LASU TECH X 4.0" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
