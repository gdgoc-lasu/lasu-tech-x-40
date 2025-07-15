'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative bg-[#E0F0DF] py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          {/* Top content - Text and buttons */}
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
            {/* Left content */}
            <motion.div
              className="max-w-xl flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="mb-8 text-5xl leading-tight font-bold text-gray-900 lg:text-6xl xl:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to
                <br />
                <span className="text-gray-900">LASU TECH X 4.0!</span>
              </motion.h1>
            </motion.div>

            {/* Right content - Description and buttons */}
            <motion.div
              className="max-w-xl flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p
                className="mb-10 text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join us for an exhilarating day of innovation and technology. Experience the future at LASU TECH X 4.0,
                where ideas come to life!
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
                >
                  Register
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-gray-900 px-8 py-3 text-lg font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
                >
                  Sponsor
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom content - Large banner image */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="aspect-[16/9] min-h-[300px] w-full overflow-hidden rounded-2xl lg:min-h-[400px]">
              <img src={hero.image} alt="LASU TECH X 4.0 Hero Image" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
