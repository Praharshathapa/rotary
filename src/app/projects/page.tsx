import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Talk program on PCOS",
      status: "Completed",
      description:
        "A talk on PCOS and reproductive health was held on February 1 at Reliance Public School, organized by the Rotary Club of Kathmandu North and its sponsored Rotaract Clubs, with Dr. Neha Guragai and Dr. Manisha Acharya from Indira Infertility Center as resource persons.",
      image: "/images/Projects/PCOS.jpg",
      progress: 100,
    },
    {
      title: "Dengue Awareness Campaign",
      status: "Completed",
      description:
        "Dengue awareness programs have  been conducted and still going on in Dang and Kathmandu by Rotary Club of Kathmandu North led by Rtn. Dr. Sugat Adhikari.",
      image: "/images/Projects/Dengue Awarness.jpg",
      progress: 100,
    },
    {
      title: "Medical Accessories and laptop handover program",
      status: "Completed",
      description:
        " Handover of medical accessories and laptops to support local health initiatives in Bunkot,Gorkha.",
      image: "/images/Projects/medical accessories.jpg",
      progress: 100,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {projects.map((project, index) => (
          <Card key={index}>
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
              height={192}
              width={400}
            />
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{project.title}</CardTitle>
                <span
                  className={cn(
                    "px-2 py-1 rounded-full text-sm",
                    project.status === "Ongoing" && "bg-blue-100 text-blue-800",
                    project.status === "Completed" &&
                      "bg-green-100 text-green-800",
                    project.status === "Upcoming" &&
                      "bg-yellow-100 text-yellow-800"
                  )}
                >
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
  );
}
