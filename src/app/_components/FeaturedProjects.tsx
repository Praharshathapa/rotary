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

const projects = [
  {
    title: "Talk program on PCOS",
    description:
      "A talk on PCOS and reproductive health was held on February 1 at Reliance Public School, organized by the Rotary Club of Kathmandu North and its sponsored Rotaract Clubs, with Dr. Neha Guragai and Dr. Manisha Acharya from Indira Infertility Center as resource persons.",
    image: "/rotary/images/Projects/PCOS.jpg",
    status: "Ongoing",
  },
  {
    title: "Dengue Awareness Campaign",
    description:
      "Dengue awareness programs have  been conducted and still going on in Dang and Kathmandu by Rotary Club of Kathmandu North led by Rtn. Dr. Sugat Adhikari.",
    image: "/rotary/images/Projects/Dengue Awarness.jpg",
    status: "Completed",
  },
  {
    title: "Medical Accessories and laptop handover program",
    description:
      " Handover of medical accessories and laptops to support local health initiatives in Bunkot,Gorkha.",
    image: "/rotary/images/Projects/medical accessories.jpg",
    status: "Completed",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Our Impact Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
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
      </div>
    </section>
  );
}
