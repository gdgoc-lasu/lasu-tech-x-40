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
      </div>
    </section>
  )
}
