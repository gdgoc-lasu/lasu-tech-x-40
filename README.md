# LASU TECH X 4.0 🚀

The official website for LASU TECH X 4.0 - Nigeria's premier technology conference hosted by Lagos State University. Built with modern web technologies including Next.js 15, Motion.dev animations, and TypeScript.

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with LASU's green branding (#30A832)
- **⚡ Motion.dev Animations**: Smooth, hardware-accelerated animations throughout
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🔍 SEO Optimized**: Comprehensive SEO with structured data, Open Graph, and Twitter cards
- **♿ Accessible**: Built with accessibility best practices
- **🚀 Performance**: Optimized for Core Web Vitals and fast loading
- **📊 PWA Ready**: Progressive Web App with offline support

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion.dev](https://motion.dev/) (successor to Framer Motion)
- **TypeScript**: Full type safety throughout
- **Components**: Custom UI components with shadcn/ui
- **Icons**: Custom SVG icons and Lucide React
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/lasu-tech-x-40.git
cd lasu-tech-x-40
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (landing)/         # Landing page group
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   └── manifest.ts        # PWA manifest
├── components/            # Reusable components
│   ├── custom/           # Custom components (Logo, etc.)
│   ├── sections/         # Page sections
│   ├── seo/             # SEO components
│   └── ui/              # UI components
└── lib/                  # Utilities and content
    ├── content.ts        # Site content management
    └── utils.ts          # Utility functions
```

## 🎯 Key Sections

- **Hero Section**: Eye-catching landing with event branding
- **About Section**: Event information with animated statistics  
- **Speakers Section**: Interactive speaker showcase with pagination
- **Schedule Section**: Detailed event timeline
- **Gallery Section**: Event photo gallery
- **Sponsors Section**: Multi-tier sponsor showcase
- **Registration Section**: Event registration with pricing
- **Footer**: Comprehensive footer with social links

## 🎨 Design System

- **Primary Color**: #30A832 (LASU Green)
- **Typography**: Geist Sans for headings, system fonts for body
- **Animations**: Smooth entrance animations, hover effects, and page transitions
- **Responsive Breakpoints**: Mobile-first with sm, md, lg, xl variants

## 📈 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph and Twitter card support
- ✅ JSON-LD structured data for events
- ✅ Sitemap and robots.txt ready
- ✅ Performance optimized
- ✅ Mobile-friendly design
- ✅ PWA manifest with app shortcuts

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏫 About LASU TECH X

LASU TECH X 4.0 is organized by Lagos State University to bring together technology enthusiasts, students, professionals, and industry leaders. Join us for an extraordinary day of innovation, learning, and networking!

---

**Built with ❤️ for the tech community by Lagos State University**
