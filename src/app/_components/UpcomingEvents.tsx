import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from 'lucide-react'
import Link from 'next/link'

const events = [
  {
    title: "Annual Charity Gala",
    date: "September 15, 2025",
    description: "Join us for an evening of fundraising and celebration.",
    location: "Hotel Yak & Yeti, Kathmandu"
  },
  {
    title: "Community Clean-up Drive",
    date: "October 2, 2025",
    description: "Let's work together to keep our city clean and green.",
    location: "Thamel, Kathmandu"
  },
  {
    title: "Youth Leadership Workshop",
    date: "November 10, 2025",
    description: "Empowering the next generation of leaders in our community.",
    location: "Rotary Center, Kathmandu"
  }
]

export default function UpcomingEvents() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                <CardDescription className="flex items-center text-blue-600">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{event.description}</p>
                <p className="text-sm text-gray-600 mb-4">{event.location}</p>
                <Button asChild variant="outline">
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

