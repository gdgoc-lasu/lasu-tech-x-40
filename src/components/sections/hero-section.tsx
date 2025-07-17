'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-[#E0F0DF]">
      {/* LASU TECHX Cover Image - Full width, close to nav */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full">
          <Image
            src="/images/lasutechx-cover.png"
            alt="LASU TECH X 4.0 Cover"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>
      </motion.div>

      {/* Beyond Code Image - Centered and actual size */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <Image
              src="/images/beyond-code.svg"
              alt="Beyond Code"
              width={0}
              height={0}
              sizes="30vw"
              className="h-auto w-auto max-w-[300px] sm:max-w-[400px]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
