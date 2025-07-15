import { Logo } from '@/components/custom/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="hello flex h-screen flex-col items-center gap-5 bg-[#E0F0DF]">
      <header className="flex w-full items-center justify-between px-10 py-5">
        <Logo variant="dark" />

        <nav>
          <ul className="flex items-center gap-8">
            {[
              { title: 'Home', href: '/' },
              { title: 'About Us', href: '#about-us' },
              { title: 'Event Highlights', href: '#event-highlights' },
              { title: 'Speakers', href: '#speakers' },
              { title: 'Sponsors', href: '#sponsors' },
            ].map((item) => (
              <li key={item.title}>
                <Link className="text-sm font-medium hover:underline lg:text-base" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="rounded-full bg-[linear-gradient(136deg,#30A832_-5.19%,#29C415_102.75%)] px-6 py-3 transition-all duration-200 hover:bg-[linear-gradient(136deg,#278A29_-5.19%,#22B012_102.75%)] hover:shadow-lg">
          Register
        </Button>
      </header>

      <main className="flex h-full flex-col items-center justify-center gap-5">{children}</main>
    </div>
  )
}
