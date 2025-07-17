'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null)

  // Extract speakers from agenda
  const speakers = [
    {
      name: 'Daniel Adeboye',
      topic: 'Building more than code: my DevRel journey into products, people, and purpose',
      image: '/images/Daniel Adeboye.jpg',
      position: 'Developer Relations Engineer',
      tag: 'DevRel',
      bio: 'Daniel is a seasoned DevRel Engineer with extensive experience in building developer communities and creating engaging technical content. He specializes in helping developers build more than just code, focusing on products, people, and purpose.',
      twitter: 'https://twitter.com/danieladeboye',
      linkedin: 'https://linkedin.com/in/danieladeboye',
    },
    {
      name: 'Prof. Abiodun Fatai-Abatan',
      topic: 'Balancing Books and Bytes: Navigating Tech & Academics',
      image: '/images/Abiodun Fatai-Abatan.jpg',
      position: 'Professor',
      tag: 'Academia',
      bio: 'Professor Abiodun Fatai-Abatan is a distinguished academic with expertise in technology and research. He brings valuable insights on balancing academic pursuits with technological advancement and navigating the intersection of education and tech.',
      twitter: 'https://twitter.com/abiodunadatan',
      linkedin: 'https://linkedin.com/in/abiodunadatan',
    },
    {
      name: 'Adora Nwodo',
      topic: 'An exploration into my Tech Career Journey as a Software Engineer',
      image: '/images/Adora Nwodo.jpg',
      position: 'Software Engineer',
      tag: 'Career',
      bio: 'Adora is a passionate software engineer with a focus on career development and technical excellence. She shares insights on navigating the tech industry and building successful engineering careers, inspiring the next generation of developers.',
      twitter: 'https://twitter.com/adoranwodo',
      linkedin: 'https://linkedin.com/in/adoranwodo',
    },
    {
      name: 'Luc Okalube',
      topic: 'Tech Innovation & Leadership',
      image: '/images/placeholder-speaker.jpg',
      position: 'Tech Leader',
      tag: 'Leadership',
      bio: 'Luc is an experienced tech leader with a passion for innovation and driving technological advancement. He focuses on building high-performing teams and creating solutions that make a real impact in the tech industry.',
      twitter: 'https://twitter.com/lucokalube',
      linkedin: 'https://linkedin.com/in/lucokalube',
    },
    {
      name: 'Hakeem Akiode',
      topic: 'Software Development Best Practices',
      image: '/images/placeholder-speaker.jpg',
      position: 'Software Developer',
      tag: 'Development',
      bio: 'Hakeem is a skilled software developer with extensive experience in best practices and code quality. He is passionate about writing clean, maintainable code and sharing knowledge about software development methodologies.',
      twitter: 'https://twitter.com/hakeemakiode',
      linkedin: 'https://linkedin.com/in/hakeemakiode',
    },
    {
      name: 'Seyi Ogundipe',
      topic: 'Beyond Code: Staying Ahead in a Rapidly Changing Tech World',
      image: '/images/placeholder-speaker.jpg',
      position: 'Tech Consultant',
      tag: 'Innovation',
      bio: 'Seyi is a tech consultant who helps organizations navigate the rapidly evolving technology landscape. He specializes in helping teams stay ahead of trends and implement innovative solutions that drive business success.',
      twitter: 'https://twitter.com/seyiogundipe',
      linkedin: 'https://linkedin.com/in/seyiogundipe',
    },
    {
      name: 'Chinaza Icheke',
      topic: 'Beyond Code: Staying Ahead in a Rapidly Changing Tech World',
      image: '/images/placeholder-speaker.jpg',
      position: 'Tech Entrepreneur',
      tag: 'Entrepreneurship',
      bio: 'Chinaza is a tech entrepreneur with a focus on building innovative solutions and scaling tech businesses. She shares insights on entrepreneurship in the tech space and how to build sustainable, impactful technology companies.',
      twitter: 'https://twitter.com/chinazaicheke',
      linkedin: 'https://linkedin.com/in/chinazaicheke',
    },
    {
      name: 'XRole Diamond',
      topic: 'Demystifying Artificial Intelligence and the General Misconception',
      image: '/images/Xrole Diamond.png',
      position: 'AI Specialist',
      tag: 'AI/ML',
      bio: 'XRole Diamond is an AI specialist focused on demystifying artificial intelligence and addressing common misconceptions. He brings practical insights into AI implementation, best practices, and the real-world applications of machine learning.',
      twitter: 'https://twitter.com/xrolediamond',
      linkedin: 'https://linkedin.com/in/xrolediamond',
    },
  ]

  const tagColors = [
    { bg: 'bg-green-100', text: 'text-green-800', hover: 'bg-green-500' },
    { bg: 'bg-red-100', text: 'text-red-800', hover: 'bg-red-500' },
    { bg: 'bg-yellow-100', text: 'text-yellow-800', hover: 'bg-yellow-500' },
    { bg: 'bg-blue-100', text: 'text-blue-800', hover: 'bg-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Our Speakers</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Join us at <span className="font-bold">LASUTECHX4.0 </span>on the 16th of July, for a day of inspiring
            talks, englightening panel sessions, and unparalleled networking opportunities!
          </p>
        </motion.div>

        {/* Speakers Grid - 3 per row */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => {
            const colorIndex = index % tagColors.length
            const tagColor = tagColors[colorIndex]

            return (
              <motion.div
                key={speaker.name}
                className="group relative cursor-pointer overflow-hidden rounded-lg border-4 border-gray-800 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedSpeaker(speaker)}
              >
                {/* Animated background overlays */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Bottom to middle animation */}
                  <motion.div
                    className={`absolute right-0 bottom-0 left-0 h-0 ${tagColor.hover} opacity-90`}
                    initial={{ height: 0 }}
                    whileHover={{ height: '50%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                  {/* Top to middle animation */}
                  <motion.div
                    className={`absolute top-0 right-0 left-0 h-0 ${tagColor.hover} opacity-90`}
                    initial={{ height: 0 }}
                    whileHover={{ height: '50%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
                  />
                </div>

                {/* Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`rounded-full px-3 py-1 text-lg font-normal ${tagColor.bg} ${tagColor.text} transition-colors duration-300 group-hover:text-white`}
                  >
                    {speaker.tag}
                  </span>
                </div>

                {/* Speaker Image - 60% of card */}
                <div className="relative z-10 h-80 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Demarcation line */}
                <div className="relative z-10 h-px bg-gray-200"></div>

                {/* Speaker Info - 40% of card */}
                <div className="relative z-10 space-y-2 p-4">
                  <h3 className="line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                    {speaker.name}
                  </h3>
                  <p className="font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
                    {speaker.position}
                  </p>
                  <p className="line-clamp-3 text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-200">
                    {speaker.topic}
                  </p>
                </div>

                {/* Hover overlay with "View Profile" */}
                <div className="bg-opacity-30 absolute inset-0 z-20 flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-semibold text-white drop-shadow-lg">View Profile</span>
                </div>
              </motion.div>
            )
          })}
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

                  {/* Bio and Topic */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <span
                        className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${tagColors[speakers.findIndex((s) => s.name === selectedSpeaker.name) % tagColors.length]}`}
                      >
                        {selectedSpeaker.tag}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-3 text-xl font-bold text-gray-800">Session Topic</h4>
                      <p className="text-lg font-medium text-gray-700">{selectedSpeaker.topic}</p>
                    </div>

                    <div>
                      <h4 className="mb-4 text-xl font-bold text-gray-800">Biography</h4>
                      <p className="text-lg leading-relaxed text-gray-700">{selectedSpeaker.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
