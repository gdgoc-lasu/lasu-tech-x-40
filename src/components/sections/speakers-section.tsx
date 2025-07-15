'use client'

import { motion } from 'motion/react'
import { siteContent } from '@/lib/content'
import Image from 'next/image'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Twitter, Linkedin, Globe } from 'lucide-react'

export function SpeakersSection() {
  const { speakers } = siteContent
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="speakers" ref={ref} className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {speakers.title}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {speakers.subtitle}
          </motion.p>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {speakers.list.map((speaker, index) => (
            <motion.div key={speaker.id} variants={cardVariants} className="group">
              <motion.div
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Speaker Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Social Icons - appear on hover */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={speaker.social.twitter}
                      className="rounded-full bg-white/90 p-2 transition-colors duration-200 hover:bg-white"
                    >
                      <Twitter className="h-4 w-4 text-blue-500" />
                    </a>
                    <a
                      href={speaker.social.linkedin}
                      className="rounded-full bg-white/90 p-2 transition-colors duration-200 hover:bg-white"
                    >
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </a>
                    <a
                      href={speaker.social.website}
                      className="rounded-full bg-white/90 p-2 transition-colors duration-200 hover:bg-white"
                    >
                      <Globe className="h-4 w-4 text-gray-600" />
                    </a>
                  </motion.div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <motion.h3
                    className="mb-2 text-xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    {speaker.name}
                  </motion.h3>
                  <motion.p
                    className="mb-3 font-semibold text-green-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    {speaker.title}
                  </motion.p>
                  <motion.p
                    className="text-sm leading-relaxed text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {speaker.bio}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-6 text-lg text-gray-600">Want to join these amazing speakers at LASU TECH X 4.0?</p>
          <motion.button
            className="transform rounded-full bg-[linear-gradient(136deg,#30A832_-5.19%,#29C415_102.75%)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Seat
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
