import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects: Array<{
  title: string;
  description: string;
  image: string;
  status: string;
}> = [];

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Our Impact Projects
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 sm:h-56 lg:h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={
                      project.status === "Ongoing"
                        ? "default"
                        : project.status === "Completed"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <Button asChild>
                  <Link href="/projects">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
