'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Image from 'next/image'

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#E0F0DF] to-[#D0E8CF] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {hero.title}
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 md:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="transform rounded-full bg-[linear-gradient(136deg,#30A832_-5.19%,#29C415_102.75%)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[linear-gradient(136deg,#278A29_-5.19%,#22B012_102.75%)] hover:shadow-lg"
              >
                {hero.cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-300 hover:bg-green-50"
              >
                {hero.cta.secondary}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-col justify-center gap-8 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600 md:text-4xl">{hero.stats.attendees}</div>
                <div className="text-gray-600">Expected Attendees</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600 md:text-4xl">{hero.stats.speakers}</div>
                <div className="text-gray-600">Expert Speakers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600 md:text-4xl">{hero.stats.workshops}</div>
                <div className="text-gray-600">Interactive Workshops</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="max-w-lg flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={hero.image}
                alt="LASU TECH X 4.0"
                width={600}
                height={400}
                className="h-auto w-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 h-20 w-20 rounded-full bg-green-400/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 h-16 w-16 rounded-full bg-blue-400/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-12 w-12 rounded-full bg-yellow-400/20"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}
