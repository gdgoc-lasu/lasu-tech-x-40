'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function LastEventGallerySection() {
  // Updated with LASU TECH X 3 images from last year's event
  const galleryImages = [
    '/images/LASU TECH X 3 (10).jpg',
    '/images/LASU TECH X 3 (12).jpg',
    '/images/LASU TECH X 3 (129).jpg',
    '/images/LASU TECH X 3 (137).jpg',
    '/images/LASU TECH X 3 (141).jpg',
    '/images/LASU TECH X 3 (149).jpg',
    '/images/LASU TECH X 3 (153).jpg',
    '/images/LASU TECH X 3 (171).jpg',
    '/images/LASU TECH X 3 (174).jpg',
    '/images/LASU TECH X 3 (19).jpg',
    '/images/LASU TECH X 3 (190).jpg',
    '/images/LASU TECH X 3 (20).jpg',
    '/images/LASU TECH X 3 (202).jpg',
    '/images/LASU TECH X 3 (23).jpg',
    '/images/LASU TECH X 3 (247).jpg',
    '/images/LASU TECH X 3 (281).jpg',
    '/images/LASU TECH X 3 (287).jpg',
    '/images/LASU TECH X 3 (31).jpg',
    '/images/LASU TECH X 3 (311).jpg',
    '/images/LASU TECH X 3 (318).jpg',
    '/images/LASU TECH X 3 (32).jpg',
    '/images/LASU TECH X 3 (320).jpg',
    '/images/LASU TECH X 3 (331).jpg',
    '/images/LASU TECH X 3 (332).jpg',
    '/images/LASU TECH X 3 (342).jpg',
    '/images/LASU TECH X 3 (353).jpg',
    '/images/LASU TECH X 3 (359).jpg',
    '/images/LASU TECH X 3 (36).jpg',
    '/images/LASU TECH X 3 (369).jpg',
    '/images/LASU TECH X 3 (370).jpg',
    '/images/LASU TECH X 3 (377).jpg',
    '/images/LASU TECH X 3 (38).jpg',
    '/images/LASU TECH X 3 (42).jpg',
    '/images/LASU TECH X 3 (46).jpg',
    '/images/LASU TECH X 3 (5).jpg',
    '/images/LASU TECH X 3 (51).jpg',
    '/images/LASU TECH X 3 (53).jpg',
    '/images/LASU TECH X 3 (54).jpg',
    '/images/LASU TECH X 3 (56).jpg',
    '/images/LASU TECH X 3 (58).jpg',
    '/images/LASU TECH X 3 (59).jpg',
    '/images/LASU TECH X 3 (62).jpg',
    '/images/LASU TECH X 3 (65).jpg',
    '/images/LASU TECH X 3 (66).jpg',
    '/images/LASU TECH X 3 (74).jpg',
    '/images/LASU TECH X 3 (76).jpg',
    '/images/LASU TECH X 3 (80).jpg',
    '/images/LASU TECH X 3 (81).jpg',
    '/images/LASU TECH X 3 (82).jpg',
    '/images/LASU TECH X 3 (84).jpg',
    '/images/LASU TECH X 3 (93).jpg',
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-100 to-green-200 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">Recap from LASUTECHX3.0</h2>
          </motion.div>

          {/* Icons on the right */}
          <motion.div
            className="hidden items-center space-x-4 lg:flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image src="/images/icons b-1.svg" alt="Icon" width={20} height={20} className="opacity-80" />
            <Image src="/images/icons b-2.svg" alt="Icon" width={20} height={20} className="opacity-80" />
            <Image src="/images/icons b-3.svg" alt="Icon" width={20} height={20} className="opacity-80" />
            <Image src="/images/icons b-4.svg" alt="Icon" width={20} height={20} className="opacity-80" />
          </motion.div>
        </div>
      </div>

      {/* Full-width Sliding Gallery - extends to screen edges */}
      <div className="relative w-screen space-y-8">
        {/* Gradient overlays for smooth entry/exit - positioned at screen edges */}
        <div className="absolute top-0 left-0 z-10 h-full w-48 bg-gradient-to-r from-green-100 to-transparent" />
        <div className="absolute top-0 right-0 z-10 h-full w-48 bg-gradient-to-l from-green-100 to-transparent" />

        {/* First row - sliding right to left */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First set of images */}
            {galleryImages.map((image, index) => (
              <div key={index} className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={image}
                  alt={`LASU TECH X 3.0 Gallery ${index + 1}`}
                  width={320}
                  height={240}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {galleryImages.map((image, index) => (
              <div key={`duplicate-${index}`} className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={image}
                  alt={`LASU TECH X 3.0 Gallery ${index + 1}`}
                  width={320}
                  height={240}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - sliding left to right (opposite direction) */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{ x: ['-100%', '0%'] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First set of images (reversed order for variety) */}
            {galleryImages
              .slice()
              .reverse()
              .map((image, index) => (
                <div key={`reverse-${index}`} className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={image}
                    alt={`LASU TECH X 3.0 Gallery ${index + 1}`}
                    width={320}
                    height={340}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}

            {/* Duplicate set for seamless loop */}
            {galleryImages
              .slice()
              .reverse()
              .map((image, index) => (
                <div
                  key={`reverse-duplicate-${index}`}
                  className="h-60 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-2xl"
                >
                  <Image
                    src={image}
                    alt={`LASU TECH X 3.0 Gallery ${index + 1}`}
                    width={320}
                    height={240}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* LASU TECHX Badge at bottom - crossed X design */}
      <div className="relative mt-16 flex justify-center">
        <div className="relative h-32 w-32">
          {/* First badge */}
          <motion.div
            className="absolute inset-0 -rotate-12 transform"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/lasutechx_badge.svg"
              alt="LASU TECHX Badge"
              width={128}
              height={128}
              className="h-full w-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Second badge - crossed to form X */}
          <motion.div
            className="absolute inset-0 rotate-12 transform"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/lasutechx_badge.svg"
              alt="LASU TECHX Badge"
              width={128}
              height={128}
              className="h-full w-full object-contain opacity-80 drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
