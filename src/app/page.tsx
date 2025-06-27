import Carousel from './_components/Carousel'
import FeaturedProjects from './_components/FeaturedProjects'
import UpcomingEvents from './_components/UpcomingEvents'
import CallToAction from './_components/CallToAction'

const carouselItems = [
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Welcome to Rotary Club of Kathmandu North",
    description: "Serving our community since 1995"
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Join Our Next Project",
    description: "Make a difference in your community"
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Rotary International Convention 2024",
    description: "Join us in Singapore this June"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Carousel items={carouselItems} />
      <FeaturedProjects />
      <UpcomingEvents />
      <CallToAction />
    </div>
  )
}

