'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

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
            {/* Registration Check */}
            <div className="rounded-xl bg-gradient-to-r from-[#30A832] to-[#228B22] p-6 text-white">
              <h3 className="mb-4 text-xl font-bold">Registration Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Total Capacity:</span>
                  <span className="font-semibold">500 attendees</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Registered:</span>
                  <span className="font-semibold">350+ attendees</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/20">
                  <div className="h-2 rounded-full bg-white" style={{ width: '70%' }}></div>
                </div>
                <p className="mt-2 text-center text-sm">Limited spots available - Register now!</p>
              </div>
            </div>

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

            {/* Transportation Info */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-800">Getting There</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Bus: Take BRT to Ojo and connect to LASU shuttle</p>
                <p>• Car: Free parking available on campus</p>
                <p>• Ride-share: Available to campus gates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
