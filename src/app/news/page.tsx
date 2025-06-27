import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from "next/image"

export default function News() {
  const newsItems = [
    {
      slug: "annual-charity-gala-success",
      title: "Annual Charity Gala Success",
      date: "January 5, 2024",
      content: "Our annual charity gala raised over $50,000 for local education initiatives...",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      slug: "new-community-health-project",
      title: "New Community Health Project",
      date: "December 28, 2023",
      content: "Launching a new health project to serve remote communities...",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      slug: "youth-leadership-workshop",
      title: "Youth Leadership Workshop",
      date: "December 15, 2023",
      content: "Successfully conducted a leadership workshop for 100 young leaders...",
      image: "/placeholder.svg?height=300&width=400"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Latest News</h1>
      <div className="grid gap-8">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-gray-500">{item.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <Button asChild>
                    <Link href={`/news/${item.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

