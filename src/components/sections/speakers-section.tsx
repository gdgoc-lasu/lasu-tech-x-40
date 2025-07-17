'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

export function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null)

  const speakers = [
    {
      name: 'Daniel Adeboye',
      position: 'DevRel Engineer',
      image: '/images/Daniel Adeboye.jpg',
      sessionType: 'Keynote',
      bio: 'Daniel is a seasoned DevRel Engineer with extensive experience in building developer communities and creating engaging technical content. He specializes in helping developers build more than just code.',
      twitter: 'https://twitter.com/danieladeboye',
      linkedin: 'https://linkedin.com/in/danieladeboye',
    },
    {
      name: 'Adora Nwodo',
      position: 'Software Engineer',
      image: '/images/Adora Nwodo.jpg',
      sessionType: 'Tech Talk',
      bio: 'Adora is a passionate software engineer with a focus on career development and technical excellence. She shares insights on navigating the tech industry and building successful engineering careers.',
      twitter: 'https://twitter.com/adoranwodo',
      linkedin: 'https://linkedin.com/in/adoranwodo',
    },
    {
      name: 'Abiodun Fatai-Abatan',
      position: 'Professor',
      image: '/images/Abiodun Fatai-Abatan.jpg',
      sessionType: 'Panel',
      bio: 'Professor Abiodun Fatai-Abatan is a distinguished academic with expertise in technology and research. He brings valuable insights on balancing academic pursuits with technological advancement.',
      twitter: 'https://twitter.com/abiodunadatan',
      linkedin: 'https://linkedin.com/in/abiodunadatan',
    },
    {
      name: 'Olayinka Atobiloye',
      position: 'Tech Professional',
      image: '/images/Olayinka Atobiloye.jpg',
      sessionType: 'Workshop',
      bio: 'Olayinka is a skilled tech professional with experience in various aspects of technology and innovation. She is passionate about sharing knowledge and mentoring upcoming developers.',
      twitter: 'https://twitter.com/yinkaatobiloye',
      linkedin: 'https://linkedin.com/in/yinkaatobiloye',
    },
    {
      name: 'XRole Diamond',
      position: 'AI Specialist',
      image: '/images/Xrole Diamond.png',
      sessionType: 'AI Talk',
      bio: 'XRole Diamond is an AI specialist focused on demystifying artificial intelligence and addressing common misconceptions. He brings practical insights into AI implementation and best practices.',
      twitter: 'https://twitter.com/xrolediamond',
      linkedin: 'https://linkedin.com/in/xrolediamond',
    },
  ]

  const sessionTypeColors = {
    Keynote: 'bg-blue-500',
    Workshop: 'bg-green-500',
    Panel: 'bg-red-500',
  }

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-red-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">Our Speakers</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Meet the industry experts and thought leaders who will share their insights and experiences
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="overflow-hidden rounded-2xl border-4 border-gray-200 bg-white shadow-lg transition-all duration-300 group-hover:border-[#30A832] group-hover:shadow-xl">
                {/* Session Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${sessionTypeColors[speaker.sessionType as keyof typeof sessionTypeColors]}`}
                  >
                    {speaker.sessionType}
                  </span>
                </div>

                {/* Speaker Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Divider Line */}
                <div className="h-1 bg-gradient-to-r from-[#30A832] to-[#228B22]" />

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{speaker.name}</h3>
                  <p className="font-medium text-gray-600">{speaker.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Dialog */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
            />

            {/* Dialog */}
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                <div className="flex flex-col gap-8 lg:flex-row">
                  {/* Speaker Image and Basic Info */}
                  <div className="lg:w-1/3">
                    <div className="relative mb-6 h-80 overflow-hidden rounded-2xl">
                      <Image src={selectedSpeaker.image} alt={selectedSpeaker.name} fill className="object-cover" />
                    </div>
                    <div className="text-center">
                      <h3 className="mb-2 text-2xl font-bold text-gray-800">{selectedSpeaker.name}</h3>
                      <p className="mb-4 font-medium text-gray-600">{selectedSpeaker.position}</p>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-4">
                        <a
                          href={selectedSpeaker.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                        <a
                          href={selectedSpeaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-blue-700 p-2 text-white transition-colors hover:bg-blue-800"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="lg:w-2/3">
                    <div className="mb-4">
                      <span
                        className={`inline-block rounded-full px-4 py-2 text-sm font-semibold text-white ${sessionTypeColors[selectedSpeaker.sessionType as keyof typeof sessionTypeColors]}`}
                      >
                        {selectedSpeaker.sessionType}
                      </span>
                    </div>
                    <h4 className="mb-4 text-xl font-bold text-gray-800">Biography</h4>
                    <p className="text-lg leading-relaxed text-gray-700">{selectedSpeaker.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
