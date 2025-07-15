import { Logo } from '@/components/custom/logo'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/lib/content'
import Link from 'next/link'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const { navigation, footer } = siteContent

  return (
    <div className="min-h-screen bg-[#E0F0DF]">
      <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Logo variant="dark" />

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigation.links.map((item) => (
                <li key={item.title}>
                  <Link
                    className="text-sm font-medium transition-colors duration-200 hover:text-green-600 lg:text-base"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            className="transform rounded-full bg-[linear-gradient(136deg,#30A832_-5.19%,#29C415_102.75%)] px-6 py-3 text-white transition-all duration-200 hover:scale-105 hover:bg-[linear-gradient(136deg,#278A29_-5.19%,#22B012_102.75%)] hover:shadow-lg"
            asChild
          >
            <Link href={navigation.cta.href}>{navigation.cta.text}</Link>
          </Button>
        </div>
      </header>

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
