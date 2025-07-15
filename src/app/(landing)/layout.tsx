'use client'

import { Logo } from '@/components/custom/logo'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const { navigation, footer } = siteContent

  // Simplified navigation items to match the design
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Event Highlights', href: '#event-highlights' },
    { title: 'Speakers', href: '#speakers' },
  ]

  return (
    <div className="min-h-screen bg-[#E0F0DF]">
      <motion.header
        className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100/50 bg-white/95 shadow-sm backdrop-blur-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo with subtle animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo variant="dark" />
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link
                      className="group relative text-base font-medium text-gray-700 transition-colors duration-300 hover:text-[#30A832]"
                      href={item.href}
                    >
                      {item.title}
                      {/* Animated underline */}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-[#30A832]"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(48, 168, 50, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
            >
              <Button
                className="relative overflow-hidden rounded-full border-0 bg-[#30A832] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#278A29] hover:shadow-xl"
                asChild
              >
                <Link href={navigation.cta.href}>
                  <motion.span
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    {navigation.cta.text}
                  </motion.span>
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button (for future enhancement) */}
          <motion.button
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-[#30A832] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Animated border at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#30A832] to-[#29C415]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
        />
      </motion.header>

      <main className="pt-20">{children}</main>

      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <Logo variant="light" />
              <p className="mt-4 text-gray-300">{footer.organizedBy}</p>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-bold">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>{footer.contact.email}</p>
                <p>{footer.contact.phone}</p>
                <p>{footer.contact.address}</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
              <div className="flex gap-4">
                <a href={footer.social.twitter} className="text-gray-300 transition-colors hover:text-white">
                  Twitter
                </a>
                <a href={footer.social.linkedin} className="text-gray-300 transition-colors hover:text-white">
                  LinkedIn
                </a>
                <a href={footer.social.facebook} className="text-gray-300 transition-colors hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
