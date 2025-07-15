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

      <motion.footer
        className="bg-gray-900 px-4 py-16 text-white sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Logo variant="light" />
              </motion.div>
              <motion.p
                className="mt-4 leading-relaxed text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {footer.organizedBy}
              </motion.p>
              <motion.p
                className="mt-2 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join the future of technology with Nigeria&apos;s premier tech event.
              </motion.p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h4
                className="mb-6 text-lg font-bold text-[#30A832]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Contact Info
              </motion.h4>
              <motion.div
                className="space-y-3 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center space-x-3 transition-colors duration-300 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#30A832]">📧</span>
                  <p>{footer.contact.email}</p>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 transition-colors duration-300 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#30A832]">📞</span>
                  <p>{footer.contact.phone}</p>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 transition-colors duration-300 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#30A832]">📍</span>
                  <p>{footer.contact.address}</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h4
                className="mb-6 text-lg font-bold text-[#30A832]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Follow Us
              </motion.h4>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {[
                  { platform: 'twitter', url: footer.social.twitter },
                  { platform: 'instagram', url: footer.social.instagram },
                  { platform: 'linkedin', url: footer.social.linkedin },
                  { platform: 'facebook', url: footer.social.facebook },
                ].map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-full bg-gray-800 p-3 shadow-lg transition-all duration-300 group-hover:bg-[#30A832] group-hover:shadow-xl group-hover:shadow-[#30A832]/20"
                      whileHover={{
                        boxShadow: '0 10px 30px rgba(48, 168, 50, 0.3)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      {social.platform === 'twitter' && (
                        <svg
                          className="h-5 w-5 text-gray-300 transition-colors group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      )}
                      {social.platform === 'instagram' && (
                        <svg
                          className="h-5 w-5 text-gray-300 transition-colors group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      {social.platform === 'linkedin' && (
                        <svg
                          className="h-5 w-5 text-gray-300 transition-colors group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.platform === 'facebook' && (
                        <svg
                          className="h-5 w-5 text-gray-300 transition-colors group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      )}
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
              <motion.p
                className="mt-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Stay updated with the latest tech trends and event updates!
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.p className="text-gray-400" whileHover={{ color: '#30A832' }} transition={{ duration: 0.3 }}>
                {footer.copyright}
              </motion.p>
              <motion.div
                className="flex space-x-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="transition-colors duration-300 hover:text-[#30A832]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                  >
                    {link}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
