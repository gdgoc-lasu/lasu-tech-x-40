'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Image from 'next/image'

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative min-h-screen bg-[#E0F0DF] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Left content */}
          <motion.div
            className="max-w-lg flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to
              <br />
              LASU TECH X<br />
              4.0!
            </motion.h1>

            <motion.p
              className="mb-8 max-w-md text-lg text-gray-700 lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join us for an extraordinary day of technology and innovation. Experience the future at LASU TECH X 4.0,
              where ideas come to life.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-[#30A832] px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#278A29] hover:shadow-lg"
              >
                Register
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-gray-800 px-8 py-3 font-medium text-gray-800 transition-all duration-300 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Large placeholder image */}
          <motion.div
            className="max-w-2xl flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-gray-300">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-gray-500">
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
