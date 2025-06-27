import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Sidebar() {
  const navigationLinks = [
    { title: 'Home', href: '#' },
    { title: 'Club Profile', href: '#' },
    { title: 'Message', href: '#' },
    { title: 'Executive Member', href: '#' },
    { title: 'Chartered Member', href: '#' },
    { title: 'Active Member', href: '#' },
    { title: 'Past Presidents Member', href: '#' },
    { title: 'Immunization Project', href: '#' },
    { title: 'Projects', href: '#' },
    { title: 'News', href: '#' },
    { title: 'Events', href: '#' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Site Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <nav>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Message from RI President</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="RI President"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="font-bold mb-2">R. Gordon R. McInally</h3>
            <p className="text-sm text-gray-600 mb-4">RI President 2023-24</p>
            <p className="text-sm">
              Even as we face new and serious challenges, Rotary is...
            </p>
            <Link
              href="#"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Read more
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

