'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Users, Award, Coffee, Gift, Calendar, Star } from 'lucide-react'

export function RegistrationSection() {
  const { registration } = siteContent
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const featureIcons = [
    <Users className="h-6 w-6" key="users" />,
    <Award className="h-6 w-6" key="award" />,
    <Coffee className="h-6 w-6" key="coffee" />,
    <Gift className="h-6 w-6" key="gift" />,
    <Calendar className="h-6 w-6" key="calendar" />,
    <Star className="h-6 w-6" key="star" />,
  ]

  return (
    <section id="register" ref={ref} className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20">
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
            {registration.title}
          </motion.h2>
          <motion.p
            className="mx-auto mb-4 max-w-3xl text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {registration.subtitle}
          </motion.p>
          <motion.p
            className="mx-auto max-w-2xl text-base text-gray-500"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {registration.description}
          </motion.p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left side - Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="mb-8 text-2xl font-bold text-gray-900">What&apos;s Included:</h3>
              <div className="space-y-4">
                {registration.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 rounded-lg bg-green-100 p-2 text-green-600">
                      {featureIcons[index] || <Check className="h-6 w-6" />}
                    </div>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-white shadow-2xl"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/5 opacity-20"></div>

                <div className="relative z-10">
                  <div className="mb-6 text-center">
                    <h4 className="mb-2 text-2xl font-bold">{registration.pricing.early.label}</h4>
                    <div className="mb-2 text-5xl font-bold">{registration.pricing.early.price}</div>
                    <p className="text-green-100">{registration.pricing.early.deadline}</p>
                  </div>

                  <div className="mb-8 space-y-3">
                    {registration.pricing.early.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-200" />
                        <span className="text-green-50">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full transform rounded-full bg-white py-4 text-lg font-bold text-green-600 transition-all duration-300 hover:scale-105 hover:bg-green-50"
                    >
                      {registration.cta.primary}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-full border-2 border-white py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-green-600"
                    >
                      {registration.cta.secondary}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-6 text-lg text-gray-600">Limited seats available. Secure your spot today!</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.div
              className="rounded-full bg-green-100 px-6 py-3 font-semibold text-green-800"
              animate={
                isInView
                  ? {
                      scale: [1, 1.05, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🎯 Registration Ends Soon!
            </motion.div>
            <div className="rounded-full bg-blue-100 px-6 py-3 font-semibold text-blue-800">📅 December 15, 2024</div>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 h-32 w-32 rounded-full bg-green-200/30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-24 w-24 rounded-full bg-blue-200/30"
          animate={{
            y: [0, 20, 0],
            x: [0, 20, 0],
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
