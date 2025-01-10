import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Community Member",
    quote: "The Rotary Club of Kathmandu North has made a significant impact in our local schools. Their dedication is truly inspiring."
  },
  {
    name: "Priya Thapa",
    role: "Project Beneficiary",
    quote: "Thanks to the clean water project, our village now has access to safe drinking water. We are forever grateful."
  },
  {
    name: "Bijay Adhikari",
    role: "Club Member",
    quote: "Being part of this club has given me the opportunity to serve my community and make lifelong friends."
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">Impact Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic mb-4">{testimonial.quote}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

