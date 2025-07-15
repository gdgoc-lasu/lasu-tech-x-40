'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const { about } = siteContent
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#30A832] to-[#29C415] py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {about.title}
            </motion.h2>

            <motion.p
              className="mb-6 text-lg text-green-50 md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {about.subtitle}
            </motion.p>

            <motion.p
              className="mb-12 max-w-2xl text-base text-green-100 md:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {about.description}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.2,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <motion.div
                    className="mb-2 text-5xl font-bold md:text-6xl"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1 + index * 0.2,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="mb-1 text-xl font-semibold">{stat.label}</div>
                  <div className="text-sm text-green-100">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:shadow-lg"
              >
                Join Us Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="max-w-lg flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={about.image} alt="Innovation Hub" width={500} height={400} className="h-auto w-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated background patterns */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 h-32 w-32 rounded-full border-2 border-white/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-24 w-24 rounded-full border-2 border-white/20"
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-white/30"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}
