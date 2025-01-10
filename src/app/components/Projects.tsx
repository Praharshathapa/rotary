import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Clean Water Initiative",
    description: "Providing clean water to rural communities in Nepal.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Education for All",
    description: "Supporting underprivileged children with quality education.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Health Camp",
    description: "Organizing free health check-ups in remote areas.",
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

