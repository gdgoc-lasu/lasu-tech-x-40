'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function SponsorsSection() {
  const sponsors = {
    platinum: [
      {
        name: 'LASU',
        logo: '/images/LASU LOGO.png',
        website: 'https://lasu.edu.ng',
      },
    ],
    gold: [
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
    ],
    silver: [
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
    ],
    community: [
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
    ],
  }

  const SponsorCard = ({ sponsor, tier }: { sponsor: any; tier: string }) => {
    const getCardSize = () => {
      switch (tier) {
        case 'platinum':
          return 'w-72 h-40'
        case 'gold':
          return 'w-60 h-32'
        case 'silver':
          return 'w-48 h-28'
        default:
          return 'w-40 h-24'
      }
    }

    return (
      <motion.a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`${getCardSize()} group relative flex items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
        whileHover={{ y: -5, scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#30A832]/5 to-[#228B22]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Logo */}
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={tier === 'platinum' ? 200 : tier === 'gold' ? 160 : tier === 'silver' ? 120 : 100}
            height={tier === 'platinum' ? 100 : tier === 'gold' ? 80 : tier === 'silver' ? 60 : 50}
            className="object-contain filter transition-all duration-300 group-hover:brightness-110"
          />
        </div>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#30A832] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div className="text-center">
            <motion.h3
              className="mb-8 text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-white">
                Platinum Sponsors
              </span>
            </motion.h3>
            <div className="flex justify-center">
              {sponsors.platinum.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="platinum" />
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="text-center">
            <motion.h3
              className="mb-8 text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 text-white">
                Gold Sponsors
              </span>
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-6 space-x-8">
              {sponsors.gold.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="gold" />
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="text-center">
            <motion.h3
              className="mb-8 text-xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-gray-400 to-gray-600 px-4 py-2 text-white">
                Silver Sponsors
              </span>
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4 space-x-6">
              {sponsors.silver.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="silver" />
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div className="text-center">
            <motion.h3
              className="mb-8 text-lg font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-[#30A832] to-[#228B22] px-4 py-2 text-white">
                Community Partners
              </span>
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-3 space-x-4">
              {sponsors.community.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} tier="community" />
              ))}
            </div>
          </div>
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
