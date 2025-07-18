'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
const lasutechx_ticket = '/images/lasutechx_ticket.svg'

export function VenueSection() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">Event Venue</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Join us at our state-of-the-art venue for an unforgettable tech experience
          </p>
        </motion.div>
        <div className="mb-8 flex justify-center">
          <Image src={lasutechx_ticket} alt="LASU TechX Ticket" width={600} height={400} className="h-auto w-1/2" />
        </div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Venue Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              <Image src="/images/Lasu-CBT.webp" alt="LASU CBT Center" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Venue Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Venue Details */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">Venue Details</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832]">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">LASU CBT Center</p>
                    <p className="text-gray-600">Lagos State University, Ojo Campus</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832]">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Date & Time</h4>
                    <p className="text-gray-600">Saturday, March 15, 2025</p>
                    <p className="text-gray-600">9:00 AM - 4:20 PM (WAT)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832]">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Capacity</h4>
                    <p className="text-gray-600">500 attendees</p>
                    <p className="text-gray-600">Air-conditioned auditorium</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832]">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Facilities</h4>
                    <p className="text-gray-600">High-speed WiFi</p>
                    <p className="text-gray-600">Audio/Visual equipment</p>
                    <p className="text-gray-600">Refreshments & Networking area</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Getting There section moved below the grid */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-6 text-lg font-bold text-gray-800">Getting There</h3>
            <div className="space-y-4">
              {/* Bus Route */}
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832] text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Take BRT to Ojo</h4>
                  <p className="text-gray-600">Board any BRT bus heading to Ojo terminal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832] text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Connect to LASU Shuttle</h4>
                  <p className="text-gray-600">From Ojo terminal, take LASU shuttle to campus</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#30A832] text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Arrive at LASU CBT Center</h4>
                  <p className="text-gray-600">Follow signs to the CBT Center building</p>
                </div>
              </div>

              {/* Alternative Options */}
              <div className="mt-6 border-t border-gray-300 pt-4">
                <p className="mb-3 text-sm font-semibold text-gray-700">Alternative Options:</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-[#30A832]"></div>
                    <span>Car: Free parking available on campus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-[#30A832]"></div>
                    <span>Ride-share: Available to campus main gate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
