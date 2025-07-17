'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function CoreTeamPage() {
  const teamMembers = [
    {
      name: 'Team Member 1',
      position: 'Lead Organizer',
      image: '/images/placeholder-team.jpg',
    },
    {
      name: 'Team Member 2',
      position: 'Technical Lead',
      image: '/images/placeholder-team.jpg',
    },
    {
      name: 'Team Member 3',
      position: 'Marketing Lead',
      image: '/images/placeholder-team.jpg',
    },
    {
      name: 'Team Member 4',
      position: 'Community Manager',
      image: '/images/placeholder-team.jpg',
    },
    {
      name: 'Team Member 5',
      position: 'Event Coordinator',
      image: '/images/placeholder-team.jpg',
    },
    {
      name: 'Team Member 6',
      position: 'Volunteer Coordinator',
      image: '/images/placeholder-team.jpg',
    },
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
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Our Team</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Discover the driving force behind Lagos State University&apos;s largest tech event.
          </p>
        </motion.div>

        {/* Team Grid - 3 per row */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative overflow-hidden rounded-lg border-4 border-gray-800 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Team Member Image - 60% of card */}
              <div className="relative h-80 overflow-hidden">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>

              {/* Demarcation line */}
              <div className="h-px bg-gray-200"></div>

              {/* Member Info - 40% of card */}
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
