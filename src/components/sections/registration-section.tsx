'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'

export function RegistrationSection() {
  const { registration } = siteContent

  return (
    <section className="bg-[#E0F0DF] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Left content */}
          <motion.div
            className="max-w-lg flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {registration.title}
            </motion.h2>

            <motion.p
              className="mb-8 text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {registration.subtitle}
            </motion.p>

            {/* Features List */}
            <motion.div
              className="mb-8 space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {registration.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#30A832]"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-[#30A832] px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#278A29] hover:shadow-lg"
              >
                Register Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Registration Card */}
          <motion.div
            className="max-w-md flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-lg bg-[#30A832] p-8 text-white">
              <div className="mb-6 text-center">
                <div className="mb-2 text-3xl font-bold">{registration.pricing.early.price}</div>
                <div className="text-lg text-white/90">{registration.pricing.early.deadline}</div>
              </div>

              <div className="mb-8 space-y-4">
                <div className="rounded-lg bg-white/10 p-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-0 bg-transparent text-white placeholder-white/70 outline-none"
                  />
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-0 bg-transparent text-white placeholder-white/70 outline-none"
                  />
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <select className="w-full border-0 bg-transparent text-white outline-none">
                    <option value="" className="text-gray-900">
                      Select Ticket Type
                    </option>
                    <option value="regular" className="text-gray-900">
                      Regular
                    </option>
                    <option value="student" className="text-gray-900">
                      Student
                    </option>
                    <option value="vip" className="text-gray-900">
                      VIP
                    </option>
                  </select>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full rounded-full bg-white px-8 py-3 font-medium text-[#30A832] transition-all duration-300 hover:bg-gray-100"
              >
                Complete Registration
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
