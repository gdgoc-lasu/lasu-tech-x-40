'use client'

import { motion, AnimatePresence } from 'motion/react'
import { siteContent } from '@/lib/content'
import Image from 'next/image'
import { useState } from 'react'

export function SpeakersSection() {
  const { speakers } = siteContent

  // Create multiple speaker sets for pagination
  const allSpeakers = [
    ...speakers.list,
    // Add more speakers for better pagination demonstration
    {
      name: 'Dr. Alice Chen',
      title: 'AI Research Director',
      bio: 'Pioneer in machine learning and neural networks, leading breakthrough research in AI applications.',
      image: 'https://picsum.photos/200/200?random=5',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Mr. David Wilson',
      title: 'Blockchain Expert',
      bio: 'Cryptocurrency innovator and blockchain architect with 10+ years of experience.',
      image: 'https://picsum.photos/200/200?random=6',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Ms. Emily Rodriguez',
      title: 'UX Design Lead',
      bio: 'Award-winning designer specializing in human-centered design and accessibility.',
      image: 'https://picsum.photos/200/200?random=7',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Prof. Michael Kim',
      title: 'Quantum Computing',
      bio: 'Leading researcher in quantum algorithms and computational complexity theory.',
      image: 'https://picsum.photos/200/200?random=8',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Dr. Sophia Martinez',
      title: 'Cloud Architecture',
      bio: 'Expert in scalable cloud solutions and distributed systems architecture.',
      image: 'https://picsum.photos/200/200?random=9',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Mr. James Thompson',
      title: 'DevOps Engineer',
      bio: 'Automation specialist focused on CI/CD pipelines and infrastructure as code.',
      image: 'https://picsum.photos/200/200?random=10',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Ms. Rachel Green',
      title: 'Product Manager',
      bio: 'Strategic product leader with expertise in agile methodologies and user research.',
      image: 'https://picsum.photos/200/200?random=11',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Dr. Kevin Lee',
      title: 'IoT Specialist',
      bio: 'Internet of Things expert specializing in smart device connectivity and edge computing.',
      image: 'https://picsum.photos/200/200?random=12',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Ms. Anna Foster',
      title: 'Mobile Developer',
      bio: 'Cross-platform mobile development expert with focus on React Native and Flutter.',
      image: 'https://picsum.photos/200/200?random=13',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Prof. Robert Taylor',
      title: 'Database Expert',
      bio: 'Database optimization specialist and distributed systems researcher.',
      image: 'https://picsum.photos/200/200?random=14',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Ms. Nina Patel',
      title: 'Security Analyst',
      bio: 'Cybersecurity expert specializing in threat detection and vulnerability assessment.',
      image: 'https://picsum.photos/200/200?random=15',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Dr. Alex Johnson',
      title: 'Data Engineer',
      bio: 'Big data processing expert with focus on real-time analytics and machine learning pipelines.',
      image: 'https://picsum.photos/200/200?random=16',
      social: { linkedin: '#', twitter: '#' },
    },
  ]

  // Split speakers into groups of 4
  const speakersPerPage = 4
  const totalPages = Math.ceil(allSpeakers.length / speakersPerPage)
  const [currentPage, setCurrentPage] = useState(0)

  const currentSpeakers = allSpeakers.slice(currentPage * speakersPerPage, (currentPage + 1) * speakersPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  return (
    <section className="bg-[#E0F0DF] py-20">
      <div className="container mx-auto px-6">
        {/* Header with Navigation Controls */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-start md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{speakers.title}</h2>
            <p className="max-w-2xl text-lg text-gray-600">Meet the innovative minds behind LASU TECH X.</p>
          </div>

          {/* Navigation Controls */}
          <motion.div
            className="mt-8 flex justify-center gap-4 md:mt-0 md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              onClick={prevPage}
              className="flex h-12 w-16 items-center justify-center rounded-full bg-gray-400 shadow-lg transition-all duration-300 hover:bg-gray-500 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              whileHover={{ scale: totalPages > 1 ? 1.05 : 1, x: totalPages > 1 ? -2 : 0 }}
              whileTap={{ scale: totalPages > 1 ? 0.95 : 1 }}
              disabled={totalPages <= 1}
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextPage}
              className="flex h-12 w-16 items-center justify-center rounded-full bg-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              whileHover={{ scale: totalPages > 1 ? 1.05 : 1, x: totalPages > 1 ? 2 : 0 }}
              whileTap={{ scale: totalPages > 1 ? 0.95 : 1 }}
              disabled={totalPages <= 1}
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Page Indicators */}
        <motion.div
          className="mb-12 flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToPage(index)}
              className={`relative h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? 'w-10 bg-gray-900' : 'w-3 bg-gray-400 hover:bg-gray-600'
              }`}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.4,
                type: 'spring',
                stiffness: 300,
              }}
            >
              {/* Active indicator glow effect */}
              {index === currentPage && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gray-900"
                  layoutId="activeIndicator"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Speakers Grid with AnimatePresence */}
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1],
              }}
            >
              {currentSpeakers.map((speaker, index) => (
                <motion.div
                  key={`${currentPage}-${speaker.name}`}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-start gap-6">
                      {/* Speaker image with geometric green border */}
                      <motion.div
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                          {/* Geometric green border background */}
                          <div
                            className="absolute inset-0 rounded-2xl p-1"
                            style={{
                              background: `linear-gradient(45deg, 
                                #30A832 0%, #30A832 25%, 
                                transparent 25%, transparent 50%, 
                                #30A832 50%, #30A832 75%, 
                                transparent 75%, transparent 100%),
                                linear-gradient(-45deg, 
                                #30A832 0%, #30A832 25%, 
                                transparent 25%, transparent 50%, 
                                #30A832 50%, #30A832 75%, 
                                transparent 75%, transparent 100%)`,
                              backgroundSize: '8px 8px',
                            }}
                          >
                            <div className="h-full w-full overflow-hidden rounded-xl bg-white p-1">
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                width={88}
                                height={88}
                                className="h-full w-full rounded-lg object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Speaker info */}
                      <div className="min-w-0 flex-1">
                        <motion.h3
                          className="mb-2 text-xl font-bold text-gray-900"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {speaker.name}
                        </motion.h3>
                        <motion.p
                          className="mb-3 text-sm font-semibold text-[#30A832]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          {speaker.title}
                        </motion.p>
                        <motion.p
                          className="mb-4 text-sm leading-relaxed text-gray-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {speaker.bio}
                        </motion.p>

                        {/* Social links with enhanced animations */}
                        <motion.div
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                        >
                          {speaker.social && (
                            <>
                              {speaker.social.linkedin && (
                                <motion.a
                                  href={speaker.social.linkedin}
                                  className="rounded-lg bg-gray-100 p-2 text-gray-400 transition-all duration-300 hover:bg-[#30A832] hover:text-white"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                  </svg>
                                </motion.a>
                              )}
                              {speaker.social.twitter && (
                                <motion.a
                                  href={speaker.social.twitter}
                                  className="rounded-lg bg-gray-100 p-2 text-gray-400 transition-all duration-300 hover:bg-[#30A832] hover:text-white"
                                  whileHover={{ scale: 1.1, rotate: -5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                  </svg>
                                </motion.a>
                              )}
                              <motion.a
                                href="#"
                                className="rounded-lg bg-gray-100 p-2 text-gray-400 transition-all duration-300 hover:bg-[#30A832] hover:text-white"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                              </motion.a>
                            </>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
