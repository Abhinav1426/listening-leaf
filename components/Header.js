import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-we-work', label: 'How We Work' },
    { href: '#about', label: 'About' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 sm:space-x-3">
            <Logo className="h-8 sm:h-12 w-auto" />
            <div>
              <span className="text-base sm:text-xl font-bold text-primary-700">LISTENING LEAF</span>
              <span className="hidden sm:block text-xs text-accent-600 font-medium">Listening Deeply. Leading Wisely.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm py-2 px-6">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 btn-primary text-center text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
