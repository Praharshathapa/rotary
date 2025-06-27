import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    title: "Annual Charity Gala",
    date: "September 15, 2023",
    description: "Join us for an evening of fundraising and celebration."
  },
  {
    title: "Community Clean-up Drive",
    date: "October 2, 2023",
    description: "Let's work together to keep our city clean and green."
  },
  {
    title: "Youth Leadership Workshop",
    date: "November 10, 2023",
    description: "Empowering the next generation of leaders in our community."
  }
]

export default function Events() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

