'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function SponsorsSection() {
  const sponsors = [
    {
      name: 'Yamify',
      logo: '/images/yamify.svg',
      website: 'https://yamify.com',
    },
    {
      name: 'Razzl',
      logo: '/images/razzl.svg',
      website: 'https://razzl.com',
    },
    {
      name: 'Kript',
      logo: '/images/kript.svg',
      website: 'https://kript.com',
    },
    {
      name: 'MERP',
      logo: '/images/merp.svg',
      website: 'https://merp.com',
    },
    {
      name: 'LASU Conscience',
      logo: '/images/lasuconscience.svg',
      website: 'https://lasuconscience.com',
    },
    {
      name: 'Community',
      logo: '/images/community logo.png',
      website: '#',
    },
    {
      name: 'LASU Life',
      logo: '/images/lasulife.svg',
      website: 'https://lasulife.com',
    },
    {
      name: 'Tech Law Club',
      logo: '/images/techlawclub.svg',
      website: 'https://techlawclub.com',
    },
  ]

  const SponsorCard = ({ sponsor }: { sponsor: any }) => {
    return (
      <motion.a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image src={sponsor.logo} alt={sponsor.name} width={120} height={60} className="object-contain" />
      </motion.a>
    )
  }

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">Our Sponsors</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We&apos;re grateful to our partners who make this event possible. Join us in celebrating innovation and
            community!
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#30A832] to-[#228B22] p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">Interested in Sponsoring?</h3>
            <p className="mb-6 text-lg opacity-90">
              Join our amazing sponsors and help us create an unforgettable tech experience
            </p>
            <motion.a
              href="mailto:sponsors@lasutechx.com"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#30A832] transition-colors duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Sponsor
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
