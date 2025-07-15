'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'

export function AboutSection() {
  const { about } = siteContent

  return (
    <section className="bg-[#30A832] py-20">
      <div className="container mx-auto px-6">
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
              className="mb-6 text-4xl font-bold text-white md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to LASU TECH X 4.0
            </motion.h2>

            <motion.p
              className="mb-8 text-lg leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              LASU TECH X is a premier technology conference designed to bring together top-tier talent in technology,
              innovation, and entrepreneurship. Join us for an immersive experience featuring industry experts,
              cutting-edge presentations, networking opportunities, and hands-on workshops.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mb-8 flex flex-col gap-6 sm:flex-row sm:gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">200+</div>
                <div className="text-sm text-white/80">Expected Attendees</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-white/80">Expert Speakers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">10</div>
                <div className="text-sm text-white/80">Workshops</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-3 font-medium text-[#30A832] transition-all duration-300 hover:bg-gray-100"
              >
                Register
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                Join Us Today →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Image placeholder */}
          <motion.div
            className="max-w-md flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex aspect-square items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-white/60">
                <path
                  d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M21 15L16 10L5 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
