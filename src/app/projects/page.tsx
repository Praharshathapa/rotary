import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Projects() {
  const projects = [
    {
      title: "Clean Water Initiative",
      status: "Ongoing",
      description: "Providing clean water access to rural communities in Nepal",
      image: "/placeholder.svg?height=300&width=400",
      progress: 75
    },
    {
      title: "Education for All",
      status: "Completed",
      description: "Supporting underprivileged children with quality education",
      image: "/placeholder.svg?height=300&width=400",
      progress: 100
    },
    {
      title: "Health Camp 2024",
      status: "Upcoming",
      description: "Free health checkups and medicine distribution in remote areas",
      image: "/placeholder.svg?height=300&width=400",
      progress: 0
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {projects.map((project, index) => (
          <Card key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{project.title}</CardTitle>
                <span className={cn(
                  "px-2 py-1 rounded-full text-sm",
                  project.status === "Ongoing" && "bg-blue-100 text-blue-800",
                  project.status === "Completed" && "bg-green-100 text-green-800",
                  project.status === "Upcoming" && "bg-yellow-100 text-yellow-800"
                )}>
                  {project.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

