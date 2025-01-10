'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Club Profile', href: '/club-profile' },
    { label: 'Members', href: '/members' },
    { label: 'News', href: '/news' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Rotary Logo"
              width={80}
              height={80}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-blue-900">Rotary Club of Kathmandu North</h1>
              <p className="text-xs sm:text-sm text-gray-600">District: 3292, Club Number: 29915</p>
            </div>
          </Link>

          <nav className="hidden sm:block">
            <ul className="flex space-x-1 text-sm lg:text-base">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-blue-900 text-white"
                        : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="px-2 pt-2 pb-4 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "bg-blue-900 text-white"
                    : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

