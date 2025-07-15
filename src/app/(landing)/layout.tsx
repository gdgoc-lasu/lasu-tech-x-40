'use client'

import { Logo } from '@/components/custom/logo'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const { navigation, footer } = siteContent
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items from design
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Event Highlights', href: '#event-highlights' },
    { title: 'Speakers', href: '#speakers' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#E0F0DF]">
      <motion.header
        className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100/50 bg-white/95 backdrop-blur-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Logo variant="dark" className="h-8 w-auto sm:h-10" />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden lg:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ul className="flex items-center space-x-8 xl:space-x-12">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
                      <Link
                        href={item.href}
                        className="group relative text-base font-medium text-gray-700 transition-colors duration-300 hover:text-[#30A832]"
                      >
                        {item.title}
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#30A832]"
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

            {/* Desktop Register Button */}
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(48, 168, 50, 0.25)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  asChild
                  className="relative overflow-hidden rounded-full border-0 bg-[#30A832] px-6 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#278A29] hover:shadow-xl"
                >
                  <Link href={navigation.cta.href}>
                    <span className="relative z-10">{navigation.cta.text}</span>
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

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="relative z-50 rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#30A832] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Bottom border animation */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-[#30A832] via-[#29C415] to-[#30A832]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMobileMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                className="absolute top-full right-0 left-0 border-b border-gray-100 bg-white/95 shadow-xl backdrop-blur-md lg:hidden"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="container mx-auto px-4 py-6">
                  {/* Mobile Navigation */}
                  <motion.nav className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: 'easeOut',
                        }}
                      >
                        <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-[#30A832]"
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.nav>

                  {/* Mobile Register Button */}
                  <motion.div
                    className="mt-6 border-t border-gray-100 pt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                      <Button
                        asChild
                        className="w-full rounded-full border-0 bg-[#30A832] py-3 font-semibold text-white shadow-lg hover:bg-[#278A29]"
                      >
                        <Link href={navigation.cta.href} onClick={closeMobileMenu}>
                          {navigation.cta.text}
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
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
