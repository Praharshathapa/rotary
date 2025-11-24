import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Talk program on PCOS",
    description:
      "A talk on PCOS and reproductive health was held on February 1 at Reliance Public School, organized by the Rotary Club of Kathmandu North and its sponsored Rotaract Clubs, with Dr. Neha Guragai and Dr. Manisha Acharya from Indira Infertility Center as resource persons.",
    image: "/rotary/images/Projects/PCOS.jpg",
  },
  {
    title: "Dengue Awareness Campaign",
    description:
      "Dengue awareness programs have  been conducted and still going on in Dang and Kathmandu by Rotary Club of Kathmandu North led by Rtn. Dr. Sugat Adhikari.",
    image: "/rotary/images/Projects/Dengue Awarness.jpg",
  },
  {
    title: "Medical Accessories and laptop handover program",
      description:
        " Handover of medical accessories and laptops to support local health initiatives in Bunkot,Gorkha.",
      image: "/rotary/images/Projects/medical accessories.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
