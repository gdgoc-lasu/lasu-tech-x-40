'use client'

import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function SponsorsSection() {
  const { sponsors } = siteContent
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="sponsors" ref={ref} className="bg-gradient-to-br from-[#30A832] to-[#29C415] py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{sponsors.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-green-100 md:text-xl">{sponsors.subtitle}</p>
        </motion.div>

        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-8 text-center text-2xl font-bold">{sponsors.categories.platinum.title}</h3>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {sponsors.categories.platinum.sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className="h-20 w-full object-contain brightness-0 invert filter"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gold Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mb-8 text-center text-xl font-bold">{sponsors.categories.gold.title}</h3>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sponsors.categories.gold.sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={150}
                    height={75}
                    className="h-16 w-full object-contain brightness-0 invert filter"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Silver Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="mb-8 text-center text-lg font-bold">{sponsors.categories.silver.title}</h3>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {sponsors.categories.silver.sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="h-12 w-full object-contain brightness-0 invert filter"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="mb-6 text-lg text-green-100">Interested in sponsoring LASU TECH X 4.0?</p>
          <motion.button
            className="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Sponsor
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
