import { useEffect, useState } from 'react'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-navy/95 backdrop-blur-md border-b border-accent/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="font-mono text-lg font-semibold text-mist">
          <span className="text-accent">~/</span>maaz<span className="text-accent">.khan</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 font-mono text-sm">
            {links.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} className="group text-mist/80 hover:text-accent transition-colors">
                  <span className="text-accent/60">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="font-mono text-sm border border-accent/50 text-accent rounded px-4 py-2 hover:bg-accent hover:text-navy transition-all hover:shadow-glow"
          >
            Say Hi
          </a>
        </nav>

        <button
          className="md:hidden text-mist text-2xl font-mono"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-navy border-t border-accent/10">
          <ul className="flex flex-col gap-1 font-mono text-sm p-6">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-mist/80 hover:text-accent transition-colors"
                >
                  <span className="text-accent/60">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
