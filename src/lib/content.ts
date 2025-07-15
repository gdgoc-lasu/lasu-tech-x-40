export const siteContent = {
  // Site metadata
  site: {
    title: 'LASU TECH X 4.0',
    description:
      'Join us for an extraordinary day of innovation and technology. Experience the future at LASU TECH X 4.0 where ideas come to life!',
    logo: '/images/logo.png',
  },

  // Navigation
  navigation: {
    links: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '#about-us' },
      { title: 'Event Highlights', href: '#event-highlights' },
      { title: 'Speakers', href: '#speakers' },
      { title: 'Schedule', href: '#schedule' },
      { title: 'Gallery', href: '#gallery' },
      { title: 'Sponsors', href: '#sponsors' },
    ],
    cta: {
      text: 'Register',
      href: '#register',
    },
  },

  // Hero section
  hero: {
    title: 'Welcome to LASU TECH X 4.0!',
    subtitle:
      'Join us for an extraordinary day of innovation and technology. Experience the future at LASU TECH X 4.0 where ideas come to life!',
    cta: {
      primary: 'Register Now',
      secondary: 'Learn More',
    },
    image: 'https://picsum.photos/600/400?random=1',
    stats: {
      attendees: '500+',
      speakers: '25+',
      workshops: '15+',
    },
  },

  // About section
  about: {
    title: 'Welcome to LASU TECH X 4.0',
    subtitle:
      "LASU TECH X 4.0 is not just an event, it's a movement. We're bringing together the brightest minds in technology to explore innovative solutions, share knowledge, and build the future.",
    description:
      'Join us for a day filled with cutting-edge technology discussions, networking opportunities, and hands-on workshops that will shape the next generation of tech innovators.',
    stats: [
      { number: '200+', label: 'Participants', description: 'Tech enthusiasts and professionals' },
      { number: '20+', label: 'Speakers', description: 'Industry experts and thought leaders' },
      { number: '10', label: 'Workshops', description: 'Hands-on learning sessions' },
    ],
    image: 'https://picsum.photos/500/400?random=2',
  },

  // Speakers section
  speakers: {
    title: 'Our Speakers',
    subtitle: 'Meet the industry experts and thought leaders who will be sharing their insights and experiences.',
    list: [
      {
        id: 1,
        name: 'Mr. John Anderson',
        title: 'CTO, TechCorp',
        image: 'https://picsum.photos/300/300?random=20',
        bio: 'Leading expert in AI and machine learning with 15+ years of experience in tech innovation.',
        social: {
          twitter: '#',
          linkedin: '#',
          website: '#',
        },
      },
      {
        id: 2,
        name: 'Ms. Sarah Johnson',
        title: 'VP Engineering, StartupXYZ',
        image: 'https://picsum.photos/300/300?random=21',
        bio: 'Passionate about building scalable systems and leading high-performing engineering teams.',
        social: {
          twitter: '#',
          linkedin: '#',
          website: '#',
        },
      },
      {
        id: 3,
        name: 'Prof. Mark Williams',
        title: 'Computer Science, MIT',
        image: 'https://picsum.photos/300/300?random=22',
        bio: 'Renowned academic researcher specializing in quantum computing and cybersecurity.',
        social: {
          twitter: '#',
          linkedin: '#',
          website: '#',
        },
      },
      {
        id: 4,
        name: 'Dr. Lisa Chen',
        title: 'Founder, AI Solutions Inc',
        image: 'https://picsum.photos/300/300?random=23',
        bio: 'Pioneer in artificial intelligence applications for healthcare and biotechnology.',
        social: {
          twitter: '#',
          linkedin: '#',
          website: '#',
        },
      },
    ],
  },

  // Event schedule
  schedule: {
    title: 'Event Schedule',
    subtitle: 'Join us for a full day of inspiring talks, interactive workshops, and networking opportunities.',
    events: [
      {
        id: 1,
        time: '9:00 AM',
        title: 'Opening Ceremony',
        description: 'Welcome address and event kickoff',
        speaker: 'Event Organizers',
        type: 'ceremony',
        duration: '30 mins',
      },
      {
        id: 2,
        time: '9:30 AM',
        title: 'Tech Innovations',
        description: 'Latest trends in technology and innovation',
        speaker: 'Mr. John Anderson',
        type: 'keynote',
        duration: '45 mins',
      },
      {
        id: 3,
        time: '10:30 AM',
        title: 'Networking Session',
        description: 'Coffee break and networking opportunity',
        speaker: 'All Participants',
        type: 'networking',
        duration: '30 mins',
      },
      {
        id: 4,
        time: '11:00 AM',
        title: 'Workshop: Design Thinking',
        description: 'Hands-on workshop on design thinking methodologies',
        speaker: 'Ms. Sarah Johnson',
        type: 'workshop',
        duration: '60 mins',
      },
      {
        id: 5,
        time: '12:30 PM',
        title: 'Panel Discussion: Future of Tech',
        description: 'Expert panel discussing the future of technology',
        speaker: 'All Speakers',
        type: 'panel',
        duration: '45 mins',
      },
      {
        id: 6,
        time: '1:30 PM',
        title: 'Lunch Break',
        description: 'Networking lunch with all participants',
        speaker: 'All Participants',
        type: 'break',
        duration: '60 mins',
      },
      {
        id: 7,
        time: '2:30 PM',
        title: 'Keynote Speech',
        description: 'Emerging technologies and their impact',
        speaker: 'Prof. Mark Williams',
        type: 'keynote',
        duration: '45 mins',
      },
    ],
  },

  // Gallery section
  gallery: {
    title: 'Image Gallery',
    subtitle: 'Glimpses from our previous tech events and what awaits you.',
    images: [
      'https://picsum.photos/400/300?random=10',
      'https://picsum.photos/400/300?random=11',
      'https://picsum.photos/400/300?random=12',
      'https://picsum.photos/400/300?random=13',
      'https://picsum.photos/400/300?random=14',
      'https://picsum.photos/400/300?random=15',
      'https://picsum.photos/400/300?random=16',
      'https://picsum.photos/400/300?random=17',
    ],
  },

  // Sponsors section
  sponsors: {
    title: 'Our Sponsors',
    subtitle: 'Thank you to our amazing sponsors who make this event possible.',
    categories: {
      platinum: {
        title: 'Platinum Sponsors',
        sponsors: [
          {
            name: 'TechCorp Global',
            logo: 'https://dummyimage.com/200x100/4f46e5/ffffff&text=TechCorp+Global',
            website: '#',
          },
          {
            name: 'Innovation Labs',
            logo: 'https://dummyimage.com/200x100/f59e0b/ffffff&text=Innovation+Labs',
            website: '#',
          },
        ],
      },
      gold: {
        title: 'Gold Sponsors',
        sponsors: [
          {
            name: 'StartupXYZ',
            logo: 'https://dummyimage.com/150x75/ef4444/ffffff&text=StartupXYZ',
            website: '#',
          },
          {
            name: 'AI Solutions',
            logo: 'https://dummyimage.com/150x75/8b5cf6/ffffff&text=AI+Solutions',
            website: '#',
          },
          {
            name: 'Future Tech',
            logo: 'https://dummyimage.com/150x75/10b981/ffffff&text=Future+Tech',
            website: '#',
          },
        ],
      },
      silver: {
        title: 'Silver Sponsors',
        sponsors: [
          {
            name: 'CodeMasters',
            logo: 'https://dummyimage.com/120x60/f97316/ffffff&text=CodeMasters',
            website: '#',
          },
          {
            name: 'DevTools Inc',
            logo: 'https://dummyimage.com/120x60/3b82f6/ffffff&text=DevTools+Inc',
            website: '#',
          },
        ],
      },
    },
  },

  // Registration/CTA section
  registration: {
    title: 'Join LASU TECH X 4.0!',
    subtitle: "Don't miss out on this incredible opportunity to be part of the future of technology.",
    description:
      "Register now to secure your spot at Lagos State University's premier technology event. Limited seats available!",
    cta: {
      primary: 'Register Now',
      secondary: 'Learn More',
    },
    features: [
      'Access to all keynote sessions',
      'Hands-on workshops',
      'Networking opportunities',
      'Free lunch and refreshments',
      'Certificate of participation',
      'Exclusive swag bag',
    ],
    pricing: {
      early: {
        label: 'Early Bird',
        price: 'Free',
        deadline: 'Limited Time',
        features: ['All access pass', 'Workshop materials', 'Networking lunch', 'Certificate'],
      },
    },
  },

  // Footer
  footer: {
    copyright: '© 2024 LASU TECH X 4.0. All rights reserved.',
    organizedBy: 'Organized by Lagos State University',
    contact: {
      email: 'info@lasutech.edu.ng',
      phone: '+234 (0) 800 LASU TECH',
      address: 'Lagos State University, Ojo, Lagos, Nigeria',
    },
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
}
