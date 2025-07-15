import { siteContent } from '@/lib/content'

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'LASU TECH X 4.0',
    description: siteContent.site.description,
    startDate: '2024-12-15T09:00:00+01:00',
    endDate: '2024-12-15T18:00:00+01:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Lagos State University',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lagos State University',
        addressLocality: 'Ojo',
        addressRegion: 'Lagos',
        addressCountry: 'Nigeria',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Lagos State University',
      url: 'https://lasutech.edu.ng',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://lasutech.edu.ng/#register',
      price: '0',
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      category: 'primary',
    },
    image: ['https://lasutech.edu.ng/images/logo.png', 'https://lasutech.edu.ng/images/og-image.png'],
    performer: [
      {
        '@type': 'Person',
        name: 'Dr. Sarah Johnson',
        jobTitle: 'Senior AI Researcher',
        worksFor: {
          '@type': 'Organization',
          name: 'Google AI',
        },
      },
      {
        '@type': 'Person',
        name: 'Michael Chen',
        jobTitle: 'Principal Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
      {
        '@type': 'Person',
        name: 'Emily Rodriguez',
        jobTitle: 'Head of Engineering',
        worksFor: {
          '@type': 'Organization',
          name: 'Meta',
        },
      },
      {
        '@type': 'Person',
        name: 'David Kim',
        jobTitle: 'CTO',
        worksFor: {
          '@type': 'Organization',
          name: 'Spotify',
        },
      },
    ],
    about: [
      {
        '@type': 'Thing',
        name: 'Technology',
      },
      {
        '@type': 'Thing',
        name: 'Innovation',
      },
      {
        '@type': 'Thing',
        name: 'Software Development',
      },
      {
        '@type': 'Thing',
        name: 'Artificial Intelligence',
      },
      {
        '@type': 'Thing',
        name: 'Digital Transformation',
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
