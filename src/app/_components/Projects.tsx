import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const projects: Array<{
  title: string;
  description: string;
  image: string;
}> = [];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">
          Our Projects
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <CardDescription>{project.description}</CardDescription>
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
