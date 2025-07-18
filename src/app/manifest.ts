import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LASU TECH X 4.0 - Premier Technology Conference',
    short_name: 'LASU TECH X 4.0',
    description:
      "Join us for LASU TECH X 4.0, Nigeria's premier technology conference. Experience innovation, connect with industry leaders, and shape the future of tech.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#30A832',
    orientation: 'portrait-primary',
    scope: '/',
    categories: ['education', 'technology', 'conferences'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],

    shortcuts: [
      {
        name: 'Register Now',
        short_name: 'Register',
        description: 'Register for LASU TECH X 4.0',
        url: '/#register',
        icons: [{ src: '/icons/android-chrome-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Speakers',
        short_name: 'Speakers',
        description: 'View our amazing speakers',
        url: '/#speakers',
        icons: [{ src: '/icons/android-chrome-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Schedule',
        short_name: 'Schedule',
        description: 'Check the event schedule',
        url: '/#schedule',
        icons: [{ src: '/icons/android-chrome-192x192.png', sizes: '192x192' }],
      },
    ],
  }
}
