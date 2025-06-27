import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Rotary Club of Kathmandu North</h3>
            <p>Making a difference in our community since 1995</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/club-profile" className="hover:underline">About Us</Link></li>
              <li><Link href="/projects" className="hover:underline">Our Projects</Link></li>
              <li><Link href="/members" className="hover:underline">Members</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500"><Facebook className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="#" className="hover:text-yellow-500"><Twitter className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="#" className="hover:text-yellow-500"><Instagram className="w-5 h-5 sm:w-6 sm:h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2024 Rotary Club of Kathmandu North. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

