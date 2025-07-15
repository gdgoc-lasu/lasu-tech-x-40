'use client'

import { motion } from 'motion/react'
import { siteContent } from '@/lib/content'

export function GallerySection() {
  const { gallery } = siteContent

  // Create placeholder images
  const placeholderImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery Image ${i + 1}`,
  }))

  return (
    <section className="bg-[#E0F0DF] py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{gallery.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{gallery.subtitle}</p>
        </motion.div>

        {/* Image Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {placeholderImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-full w-full items-center justify-center bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-500 transition-colors duration-300 group-hover:text-gray-600"
                >
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
          ))}
        </div>
      </div>
    </section>
  )
}
