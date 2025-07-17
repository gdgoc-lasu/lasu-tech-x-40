import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const googleSansDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/GoogleSansDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GoogleSansDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-google-sans-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LASU TECH X 4.0 - Premier Technology Conference',
    template: '%s | LASU TECH X 4.0',
  },
  description:
    "Join us for LASU TECH X 4.0, Nigeria's premier technology conference. Experience innovation, connect with industry leaders, and shape the future of tech. Lagos State University presents an extraordinary day of learning and networking.",
  keywords: [
    'LASU TECH X',
    'technology conference',
    'Nigeria tech event',
    'Lagos State University',
    'innovation summit',
    'tech networking',
    'software development',
    'artificial intelligence',
    'digital transformation',
    'startup ecosystem',
    'tech careers',
    'programming',
    'web development',
    'mobile apps',
    'tech education',
  ],
  authors: [{ name: 'Lagos State University' }],
  creator: 'Lagos State University',
  publisher: 'LASU TECH X',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lasutech.edu.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LASU TECH X 4.0 - Premier Technology Conference',
    description:
      "Join us for LASU TECH X 4.0, Nigeria's premier technology conference. Experience innovation, connect with industry leaders, and shape the future of tech.",
    url: 'https://lasutech.edu.ng',
    siteName: 'LASU TECH X 4.0',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LASU TECH X 4.0 - Premier Technology Conference',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LASU TECH X 4.0 - Premier Technology Conference',
    description:
      "Join us for LASU TECH X 4.0, Nigeria's premier technology conference. Experience innovation and connect with industry leaders.",
    images: ['/images/twitter-image.png'],
    creator: '@lasutechx',
    site: '@lasutechx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#30A832" />
        <meta name="msapplication-TileColor" content="#30A832" />
      </head>
      <body className={`${googleSansDisplay.variable} antialiased`}>{children}</body>
    </html>
  )
}
