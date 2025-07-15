'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Image from 'next/image'

export function SpeakersSection() {
  const { speakers } = siteContent

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
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{speakers.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{speakers.subtitle}</p>

          {/* Navigation dots */}
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-3 w-8 rounded-full bg-gray-800"></div>
            <div className="h-3 w-3 rounded-full bg-gray-400"></div>
          </div>
        </motion.div>

        {/* Speakers Grid */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {speakers.list.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-start gap-4">
                  {/* Speaker image with green border */}
                  <div className="relative flex-shrink-0">
                    <div className="h-20 w-20 overflow-hidden rounded-lg border-4 border-[#30A832]">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Speaker info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-xl font-bold text-gray-900">{speaker.name}</h3>
                    <p className="mb-2 text-sm font-medium text-[#30A832]">{speaker.title}</p>
                    <p className="mb-3 text-sm leading-relaxed text-gray-600">{speaker.bio}</p>

                    {/* Social links */}
                    <div className="flex gap-3">
                      {speaker.social && (
                        <>
                          {speaker.social.twitter && (
                            <a
                              href={speaker.social.twitter}
                              className="text-gray-400 transition-colors hover:text-[#30A832]"
                            >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            </a>
                          )}
                          {speaker.social.linkedin && (
                            <a
                              href={speaker.social.linkedin}
                              className="text-gray-400 transition-colors hover:text-[#30A832]"
                            >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Green accent */}
                  <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-[#30A832] opacity-20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-[#30A832] px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#278A29] hover:shadow-lg"
          >
            View All Speakers
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
