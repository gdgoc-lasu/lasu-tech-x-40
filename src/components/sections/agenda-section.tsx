'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function AgendaSection() {
  const agendaItems = [
    {
      time: '09:00am – 10:00am',
      duration: '1 hour',
      event: 'Students Arrival & Registration',
      details: 'Check in, welcome packs or swags, name tags or meal tags',
      coordinator: 'Registration Team',
      type: 'registration',
      speakerImage: null,
    },
    {
      time: '10:00am – 10:10am',
      duration: '10 mins',
      event: 'Opening Remarks',
      details: 'Introduction of host in attendance & welcome speech to guest',
      coordinator: 'Moderator',
      type: 'opening',
      speakerImage: null,
    },
    {
      time: '10:10am – 10:15am',
      duration: '5 mins',
      event: 'Special Address by GDG LASU Lead',
      details: '',
      coordinator: 'Tijani S. Ahmad',
      type: 'address',
      speakerImage: null,
    },
    {
      time: '10:15am – 10:25am',
      duration: '10 mins',
      event: 'Ice Breaker – Speed Intro Networking',
      details:
        "Pair two attendees and give them 60 secs to: Introduce themselves, Say what tech they're learning/love, Share a recent tech win/fail. Rotate every 2-3mins for 4 rounds",
      coordinator: 'Moderator',
      type: 'networking',
      speakerImage: null,
    },
    {
      time: '10:25am – 10:45am',
      duration: '20 mins',
      event: 'Speaker Session (presentation + Q&A)',
      details: 'Building more than code: my DevRel journey into products, people, and purpose',
      coordinator: 'Daniel Adeboye',
      type: 'speaker',
      speakerImage: '/images/Daniel Adeboye.jpg',
    },
    {
      time: '10:45am – 10:50am',
      duration: '5 mins',
      event: 'Giveaway',
      details: '',
      coordinator: 'Daniel Adeboye',
      type: 'giveaway',
      speakerImage: '/images/Daniel Adeboye.jpg',
    },
    {
      time: '10:50am – 11:40am',
      duration: '50 mins',
      event: 'Panel Session: Academia and Research',
      details: 'Balancing Books and Bytes: Navigating Tech & Academics',
      coordinator: 'Tijani S. Ahmad',
      moderator: 'Tijani S. Ahmad',
      panelists: ['Prof. Toyin Enikuomehin', 'Prof. Abiodun Fatai-Abatan', 'Yinka Atobiloye'],
      type: 'panel',
      speakerImage: '/images/Abiodun Fatai-Abatan.jpg',
    },
    {
      time: '11:40am – 11:50am',
      duration: '10 mins',
      event: 'Award Presentation',
      details: '',
      coordinator: 'Moderator',
      type: 'award',
      speakerImage: null,
    },
    {
      time: '11:50am – 12:00pm',
      duration: '10 mins',
      event: 'Sponsors Product Showcase',
      details: '2 Sponsors, 5 mins each',
      coordinator: 'Babtech & SuperVerge',
      type: 'sponsor',
      speakerImage: null,
    },
    {
      time: '12:00pm – 12:20pm',
      duration: '20 mins',
      event: 'Speaker Session',
      details: '',
      coordinator: 'Luc Okalube',
      type: 'speaker',
      speakerImage: null,
    },
    {
      time: '12:20pm – 12:30pm',
      duration: '10 mins',
      event: 'Game to get the crowd going',
      details: 'Kahoot Games',
      coordinator: 'Moderator',
      type: 'game',
      speakerImage: null,
    },
    {
      time: '12:30pm – 12:50pm',
      duration: '20 mins',
      event: 'Speaker Session (presentation + Q&A)',
      details: '',
      coordinator: 'Hakeem Akiode',
      type: 'speaker',
      speakerImage: null,
    },
    {
      time: '12:50pm – 01:10pm',
      duration: '20 mins',
      event: 'Networking session / Group Photo',
      details: '',
      coordinator: 'Moderator',
      type: 'networking',
      speakerImage: null,
    },
    {
      time: '01:10pm – 01:25pm',
      duration: '15 mins',
      event: 'Speaker Session (presentation)',
      details: 'An exploration into my Tech Career Journey as a Software Engineer',
      coordinator: 'Adora Nwodo',
      type: 'speaker',
      speakerImage: '/images/Adora Nwodo.jpg',
    },
    {
      time: '01:25pm – 02:15pm',
      duration: '50 mins',
      event: 'Panel Session: Tech Talks',
      details: 'Beyond Code: Staying Ahead in a Rapidly Changing Tech World',
      coordinator: 'Oluodo Ayomide',
      moderator: 'Oluodo Ayomide',
      panelists: ['Seyi Ogundipe', 'Chinaza Icheke'],
      type: 'panel',
      speakerImage: null,
    },
    {
      time: '02:15pm – 02:30pm',
      duration: '15 mins',
      event: 'Award Presentation',
      details: '',
      coordinator: 'Moderator',
      type: 'award',
      speakerImage: null,
    },
    {
      time: '02:30pm – 02:35pm',
      duration: '5 mins',
      event: 'Ice Breaker (Jokes to get the crowd going)',
      details: 'Call random people to tell some Tech (Rizz) jokes',
      coordinator: 'Moderator',
      type: 'entertainment',
      speakerImage: null,
    },
    {
      time: '02:35pm – 02:45pm',
      duration: '10 mins',
      event: 'Sponsor Product Showcase',
      details: '2 sponsors',
      coordinator: 'Yamify & Lantern',
      type: 'sponsor',
      speakerImage: null,
    },
    {
      time: '02:45pm – 02:50pm',
      duration: '5 mins',
      event: 'Giveaway for tech courses and lantern',
      details: '',
      coordinator: 'Moderator',
      type: 'giveaway',
      speakerImage: null,
    },
    {
      time: '02:50pm – 03:10pm',
      duration: '20 mins',
      event: 'Speaker Session (presentation + Q&A)',
      details: 'Demystifying Artificial Intelligence and the General Misconception',
      coordinator: 'XRole Diamond',
      type: 'speaker',
      speakerImage: '/images/Xrole Diamond.png',
    },
    {
      time: '03:10pm – 03:15pm',
      duration: '5 mins',
      event: 'Giveaway for tech courses and lantern',
      details: '',
      coordinator: 'Moderator',
      type: 'giveaway',
      speakerImage: null,
    },
    {
      time: '03:15pm – 03:25pm',
      duration: '10 mins',
      event: 'Shoutout to Sponsors',
      details: '',
      coordinator: 'Moderator',
      type: 'shoutout',
      speakerImage: null,
    },
    {
      time: '03:25pm – 03:35pm',
      duration: '10 mins',
      event: 'Closing Remarks',
      details: `Thank you and what's next`,
      coordinator: 'Moderator',
      type: 'closing',
      speakerImage: null,
    },
    {
      time: '03:35pm – 03:40pm',
      duration: '5 mins',
      event: 'Post-event Networking',
      details: '',
      coordinator: 'Moderator',
      type: 'networking',
      speakerImage: null,
    },
    {
      time: '03:40pm – 04:20pm',
      duration: '40 mins',
      event: 'Final Wrap-up Interactions',
      details: 'Last Raffle, Selfie Spot, Social Wall, Feedback Slips',
      coordinator: 'Moderator',
      type: 'wrapup',
      speakerImage: null,
    },
  ]

  // Define the alternating colors
  const cardColors = [
    '#34A853', // Green
    '#FF7DAF', // Red
    '#FFE7A5', // Yellow
    '#136FDE', // Blue
  ]

  const getCardColor = (index: number) => {
    return cardColors[index % cardColors.length]
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">Event Agenda</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Join us for a full day of inspiring talks, networking, and hands-on sessions
          </p>
          <div className="mt-6 text-lg text-gray-700">
            <p className="font-semibold">Moderator: Mordiyyah T. Abdul Quadri</p>
          </div>
        </motion.div>

        {/* Two cards per row with clear spacing */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              style={{
                backgroundColor: getCardColor(index),
                border: `3px solid ${getCardColor(index)}`,
                borderRadius: '12px',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Topic at the top */}
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-normal text-gray-900">{item.event}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="font-medium">{item.time}</span>
                  <span>•</span>
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Details */}
              {item.details && <p className="mb-4 text-sm leading-relaxed text-gray-700">{item.details}</p>}

              {/* Speaker/Coordinator info at bottom */}
              <div className="flex items-center justify-between">
                {item.type === 'panel' ? (
                  // Panel session layout
                  <>
                    {/* Moderator on the left */}
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src={item.speakerImage || '/images/placeholder-speaker.jpg'}
                          alt={item.moderator || item.coordinator}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.moderator || item.coordinator}</p>
                        <p className="text-xs text-gray-600">Moderator</p>
                      </div>
                    </div>

                    {/* Panelists on the right with overlapping images */}
                    {item.panelists && (
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-2">
                          {item.panelists.slice(0, 3).map((panelist, idx) => (
                            <div key={idx} className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                              <Image
                                src="/images/placeholder-speaker.jpg"
                                alt={panelist}
                                width={32}
                                height={32}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="ml-2">
                          <p className="text-xs text-gray-600">Panelists</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // Regular session layout
                  <>
                    {item.speakerImage ? (
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                          <Image
                            src={item.speakerImage}
                            alt={item.coordinator}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.coordinator}</p>
                          <p className="text-xs text-gray-600">{item.type === 'speaker' ? 'Speaker' : 'Coordinator'}</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.coordinator}</p>
                        <p className="text-xs text-gray-600 capitalize">
                          {item.type === 'speaker' ? 'Speaker' : 'Coordinator'}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
