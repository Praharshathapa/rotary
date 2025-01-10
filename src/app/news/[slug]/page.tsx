import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const newsArticles = [
  {
    slug: "annual-charity-gala-success",
    title: "Annual Charity Gala Success",
    date: "January 5, 2024",
    content: "Our annual charity gala raised over $50,000 for local education initiatives. The event, held at the prestigious Hotel Yak & Yeti, saw participation from over 200 distinguished guests, including local business leaders, government officials, and long-time supporters of our club. The funds raised will go towards providing scholarships, improving school infrastructure, and supplying educational materials to underprivileged students in rural areas of Nepal. We extend our heartfelt gratitude to all attendees, sponsors, and volunteers who made this event a resounding success.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    slug: "new-community-health-project",
    title: "New Community Health Project",
    date: "December 28, 2023",
    content: "We are thrilled to announce the launch of our new community health project aimed at serving remote communities in Nepal. This initiative will focus on providing basic healthcare services, conducting health awareness programs, and improving sanitation facilities in areas with limited access to medical care. Our team of volunteer doctors and health workers will be conducting regular health camps, offering free check-ups and medicines to those in need. We believe this project will significantly impact the lives of thousands of people in rural Nepal.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    slug: "youth-leadership-workshop",
    title: "Youth Leadership Workshop",
    date: "December 15, 2023",
    content: "We successfully conducted a leadership workshop for 100 young leaders from various schools and colleges in Kathmandu. The day-long event featured inspiring talks from successful entrepreneurs, team-building activities, and interactive sessions on communication skills and project management. The workshop aimed to empower the youth with essential leadership skills and motivate them to take active roles in community service. The enthusiasm and energy of the participants were truly inspiring, and we look forward to seeing these young leaders make positive changes in their communities.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = newsArticles.find(article => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">{article.title}</CardTitle>
          <p className="text-gray-500 mt-2">{article.date}</p>
        </CardHeader>
        <CardContent>
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-6"
          />
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

