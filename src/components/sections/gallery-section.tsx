'use client'

import { motion } from 'motion/react'
import { siteContent } from '@/lib/content'
import Image from 'next/image'
import { useInView } from 'motion/react'
import { useRef } from 'react'

export function GallerySection() {
  const { gallery } = siteContent
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="gallery" ref={ref} className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">{gallery.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">{gallery.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.images.map((image, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
