'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'

export function SponsorsSection() {
  const { sponsors } = siteContent

  return (
    <section className="bg-[#30A832] py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{sponsors.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90">{sponsors.subtitle}</p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="mb-6 text-center text-xl font-semibold text-white">Platinum Sponsors</h3>
          <div className="flex justify-center gap-6">
            <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-white">
              <div className="text-sm font-medium text-gray-400">Sponsor Logo</div>
            </div>
            <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-white">
              <div className="text-sm font-medium text-gray-400">Sponsor Logo</div>
            </div>
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="mb-6 text-center text-xl font-semibold text-white">Gold Sponsors</h3>
          <div className="flex justify-center gap-4">
            <div className="flex h-20 w-36 items-center justify-center rounded-lg bg-white">
              <div className="text-sm font-medium text-gray-400">Logo</div>
            </div>
            <div className="flex h-20 w-36 items-center justify-center rounded-lg bg-white">
              <div className="text-sm font-medium text-gray-400">Logo</div>
            </div>
            <div className="flex h-20 w-36 items-center justify-center rounded-lg bg-white">
              <div className="text-sm font-medium text-gray-400">Logo</div>
            </div>
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="mb-6 text-center text-xl font-semibold text-white">Silver Sponsors</h3>
          <div className="flex justify-center gap-3">
            <div className="flex h-16 w-28 items-center justify-center rounded-lg bg-white">
              <div className="text-xs font-medium text-gray-400">Logo</div>
            </div>
            <div className="flex h-16 w-28 items-center justify-center rounded-lg bg-white">
              <div className="text-xs font-medium text-gray-400">Logo</div>
            </div>
          </div>
        </motion.div>

        {/* Become a Sponsor Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-white px-8 py-3 font-medium text-[#30A832] transition-all duration-300 hover:bg-gray-100"
          >
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
