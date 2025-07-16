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
    image: '/images/Hero_Bg.jpg',
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
    image: '/images/AboutImg.jpg',
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
        time: '09:00am – 10:00am',
        title: 'Students Arrival & Registration',
        description: 'Check in, welcome packs or swags, name tags or meal tags',
        speaker: 'Registration Team',
        type: 'Check-In',
        duration: '1 hour',
      },
      {
        id: 2,
        time: '10:00am – 10:10am',
        title: 'Opening Remarks',
        description: 'Introduction of host in attendance & welcome speech to guest',
        speaker: 'Moderator',
        type: 'Opening Remarks',
        duration: '10 mins',
      },
      {
        id: 3,
        time: '10:10am – 10:15am',
        title: 'Special Address by GDG LASU Lead',
        description: '',
        speaker: 'Tijani S. Ahmad',
        type: 'Special Address',
        duration: '5 mins',
      },
      {
        id: 4,
        time: '10:15am – 10:25am',
        title: 'Ice Breaker',
        description:
          "Speed Intro Networking - Pair two attendees and give them 60 secs to: Introduce themselves, Say what tech they're learning/love, Share a recent tech win/fail, Rotate every 2-3mins for 4 rounds",
        speaker: 'All Attendees',
        type: 'Ice Breaker',
        duration: '10 mins',
      },
      {
        id: 5,
        time: '10:25am – 10:45am',
        title: 'Speaker Session',
        description: 'Topic: Building more than code: my DevRel journey into products, people, and purpose',
        speaker: 'Daniel Adeboye',
        type: 'Speaker Session',
        duration: '20 mins',
      },
      {
        id: 6,
        time: '10:45am – 10:50am',
        title: 'Giveaway',
        description: '',
        speaker: 'Daniel Adeboye',
        type: 'Giveaway',
        duration: '5 mins',
      },
      {
        id: 7,
        time: '10:50am – 11:40am',
        title: 'Panel Session: Academia and Research',
        description: 'Theme: Balancing Books and Bytes: Navigating Tech & Academics - Moderator: Tijani S. Ahmad',
        speaker: 'Prof. Toyin Enikuomehin, Prof. Abiodun Fatai-Abatan, Yinka Atobiloye',
        type: 'Panel Session',
        duration: '50 mins',
      },
      {
        id: 8,
        time: '11:40am – 11:50am',
        title: 'Award Presentation',
        description: '',
        speaker: '',
        type: 'Award Presentation',
        duration: '10 mins',
      },
      {
        id: 9,
        time: '11:50am – 12:00pm',
        title: 'Sponsors Product Showcase',
        description:
          'A company that sponsored the event talks about their product (2 Sponsors, 5 mins each) - Babtech & SuperVerge',
        speaker: 'Sponsors',
        type: 'Sponsor Showcase',
        duration: '10 mins',
      },
      {
        id: 10,
        time: '12:00pm – 12:20pm',
        title: 'Speaker Speech',
        description: '',
        speaker: 'Luc Okalube',
        type: 'Speaker Speech',
        duration: '20 mins',
      },
      {
        id: 11,
        time: '12:20pm – 12:30pm',
        title: 'Game to get the crowd going',
        description: 'Kahoot Games',
        speaker: 'All Participants',
        type: 'Games',
        duration: '10 mins',
      },
      {
        id: 12,
        time: '12:30pm – 12:50pm',
        title: 'Speaker Session',
        description: '',
        speaker: 'Hakeem Akiode',
        type: 'Speaker Session',
        duration: '20 mins',
      },
      {
        id: 13,
        time: '12:50pm – 01:10pm',
        title: 'Networking session / Group Photo',
        description: '',
        speaker: 'Moderator',
        type: 'Networking',
        duration: '20 mins',
      },
      {
        id: 14,
        time: '01:10pm – 01:25pm',
        title: 'Speaker Session',
        description: 'Topic: An exploration into my Tech Career Journey as a Software Engineer',
        speaker: 'Adora Nwodo',
        type: 'Speaker Session',
        duration: '15 mins',
      },
      {
        id: 15,
        time: '01:25pm – 02:15pm',
        title: 'Panel Session: Tech Talks',
        description: 'Theme: Beyond Code: Staying Ahead in a Rapidly Changing Tech World - Moderator: Oluodo Ayomide',
        speaker: 'Seyi Ogundipe, Chinaza Icheke',
        type: 'Panel Session',
        duration: '50 mins',
      },
      {
        id: 16,
        time: '02:15pm – 02:30pm',
        title: 'Award Presentation',
        description: '',
        speaker: 'Moderator',
        type: 'Award Presentation',
        duration: '15 mins',
      },
      {
        id: 17,
        time: '02:30pm – 02:35pm',
        title: 'Ice Breaker',
        description: 'Call random people to tell some Tech (Rizz) jokes',
        speaker: 'All Participants',
        type: 'Ice Breaker',
        duration: '5 mins',
      },
      {
        id: 18,
        time: '02:35pm – 02:45pm',
        title: 'Sponsor Product Showcase',
        description: 'Another company that sponsored wants to talk about their product (2 sponsors) - Yamify & Lantern',
        speaker: 'Sponsors',
        type: 'Sponsor Showcase',
        duration: '10 mins',
      },
      {
        id: 19,
        time: '02:45pm – 02:50pm',
        title: 'Giveaway',
        description: 'Giveaway for tech courses and lantern',
        speaker: 'Moderator',
        type: 'Giveaway',
        duration: '5 mins',
      },
      {
        id: 20,
        time: '02:50pm – 03:10pm',
        title: 'Speaker Session',
        description: 'Topic: Demystifying Artificial Intelligence and the General Misconception',
        speaker: 'XRole Diamond',
        type: 'Speaker Session',
        duration: '20 mins',
      },
      {
        id: 21,
        time: '03:10pm – 03:15pm',
        title: 'Giveaway',
        description: 'Giveaway for tech courses and lantern',
        speaker: 'Moderator',
        type: 'Giveaway',
        duration: '5 mins',
      },
      {
        id: 22,
        time: '03:15pm – 03:20pm',
        title: 'Shoutout',
        description: 'Introduction of GDG Core Team Members',
        speaker: 'Moderator',
        type: 'Shoutout',
        duration: '5 mins',
      },
      {
        id: 23,
        time: '03:20pm – 03:40pm',
        title: 'Closing Remarks',
        description: 'Given by GDG Alumni',
        speaker: 'Aanuoluwapo Famakinwa',
        type: 'Closing Remarks',
        duration: '20 mins',
      },
      {
        id: 24,
        time: '03:40pm – 04:20pm',
        title: 'Final Wrap-up Interactions',
        description: 'Last Raffle, Selfie Spot, Social Wall, Feedback Slips',
        speaker: 'Moderator',
        type: 'Wrap-up',
        duration: '40 mins',
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
