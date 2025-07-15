'use client'

import { motion } from 'motion/react'
import { siteContent } from '@/lib/content'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Clock, User, Calendar } from 'lucide-react'

export function ScheduleSection() {
  const { schedule } = siteContent
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-blue-500/20 border-blue-500 text-blue-400'
      case 'workshop':
        return 'bg-green-500/20 border-green-500 text-green-400'
      case 'panel':
        return 'bg-purple-500/20 border-purple-500 text-purple-400'
      case 'networking':
        return 'bg-orange-500/20 border-orange-500 text-orange-400'
      case 'break':
        return 'bg-gray-500/20 border-gray-500 text-gray-400'
      default:
        return 'bg-indigo-500/20 border-indigo-500 text-indigo-400'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {schedule.title}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {schedule.subtitle}
          </motion.p>
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div
          className="mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {schedule.events.map((event, index) => (
            <motion.div key={event.id} variants={cardVariants} className="mb-6 last:mb-0">
              <motion.div
                className="flex flex-col items-start gap-6 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50 md:flex-row md:items-center"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Time */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="mb-1 flex items-center gap-2 text-2xl font-bold text-green-400">
                    <Clock className="h-6 w-6" />
                    {event.time}
                  </div>
                  <div className="text-sm text-gray-400">{event.duration}</div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${getEventTypeColor(event.type)}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <p className="mb-3 text-gray-300">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="h-4 w-4" />
                    <span>{event.speaker}</span>
                  </div>
                </div>

                {/* Timeline connector */}
                {index < schedule.events.length - 1 && (
                  <div className="absolute top-full left-20 hidden h-6 w-px bg-gradient-to-b from-gray-600 to-transparent md:block" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-6 text-lg text-gray-300">Don&apos;t miss out on this amazing lineup of events!</p>
          <motion.button
            className="transform rounded-full bg-[linear-gradient(136deg,#30A832_-5.19%,#29C415_102.75%)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Ticket
          </motion.button>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 h-32 w-32 rounded-full border border-green-500/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-24 w-24 rounded-full border border-blue-500/20"
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 h-4 w-4 rounded-full bg-green-500/30"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}
