import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, DollarSign, Target, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: "pcos-awareness" },
    { slug: "dengue-awareness" },
    { slug: "medical-accessories" },
  ];
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  // Project data - in a real app, this would come from a database or API
  const projects = {
    "pcos-awareness": {
      title: "Talk program on PCOS",
      status: "Completed",
      description: "A comprehensive awareness program on Polycystic Ovary Syndrome (PCOS) and reproductive health was conducted at Reliance Public School, organized by the Rotary Club of Kathmandu North and its sponsored Rotaract Clubs.",
      image: "/images/Projects/PCOS.jpg",
      date: "February 1, 2024",
      location: "Reliance Public School, Kathmandu",
      budget: "NPR 50,000",
      beneficiaries: "200+ students and teachers",
      objectives: [
        "Raise awareness about PCOS and its impact on women's health",
        "Educate students about reproductive health and wellness",
        "Provide information about prevention and management of PCOS",
        "Encourage open discussion about women's health issues"
      ],
      outcomes: [
        "200+ students and teachers educated about PCOS",
        "Increased awareness about reproductive health",
        "Established partnership with Indira Infertility Center",
        "Created educational materials for future use"
      ],
      partners: [
        "Indira Infertility Center",
        "Reliance Public School",
        "Rotaract Club of Kathmandu North"
      ],
      gallery: [
        "/images/Projects/PCOS.jpg",
        "/images/Projects/PCOS.jpg", // Placeholder for additional images
      ]
    },
    "dengue-awareness": {
      title: "Dengue Awareness Campaign",
      status: "Ongoing",
      description: "A comprehensive dengue awareness program conducted in Dang and Kathmandu districts to educate communities about dengue prevention, symptoms, and treatment.",
      image: "/images/Projects/Dengue Awarness.jpg",
      date: "Ongoing since March 2024",
      location: "Dang and Kathmandu Districts",
      budget: "NPR 100,000",
      beneficiaries: "5,000+ community members",
      objectives: [
        "Educate communities about dengue prevention",
        "Distribute mosquito nets and repellents",
        "Train local health workers",
        "Establish early warning systems"
      ],
      outcomes: [
        "5,000+ community members reached",
        "500+ mosquito nets distributed",
        "50+ health workers trained",
        "Reduced dengue cases in target areas"
      ],
      partners: [
        "District Health Office, Dang",
        "Kathmandu Metropolitan City",
        "Local Health Posts"
      ],
      gallery: [
        "/images/Projects/Dengue Awarness.jpg",
        "/images/Projects/Dengue Awarness.jpg", // Placeholder
      ]
    },
    "medical-accessories": {
      title: "Medical Accessories and Laptop Handover Program",
      status: "Completed",
      description: "Distribution of essential medical equipment and laptops to support local health initiatives and educational programs in Bunkot, Gorkha.",
      image: "/images/Projects/medical accessories.jpg",
      date: "January 15, 2024",
      location: "Bunkot, Gorkha",
      budget: "NPR 200,000",
      beneficiaries: "500+ community members",
      objectives: [
        "Improve healthcare infrastructure in rural areas",
        "Support educational initiatives with technology",
        "Enhance community health services",
        "Build capacity of local institutions"
      ],
      outcomes: [
        "Medical equipment distributed to health posts",
        "Laptops provided to schools",
        "Healthcare workers trained on new equipment",
        "Improved healthcare access for 500+ people"
      ],
      partners: [
        "Gorkha District Health Office",
        "Local Schools in Bunkot",
        "Community Health Workers"
      ],
      gallery: [
        "/images/Projects/medical accessories.jpg",
        "/images/Projects/medical accessories.jpg", // Placeholder
      ]
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <span>/</span>
          <span className="text-gray-900">{project.title}</span>
        </div>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Header */}
          <Card>
            <div className="relative h-64 md:h-80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  variant={project.status === "Completed" ? "secondary" : "default"}
                  className="text-sm"
                >
                  {project.status}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                {project.title}
              </CardTitle>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </CardHeader>
          </Card>

          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold">{project.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="font-semibold">{project.budget}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Beneficiaries</p>
                    <p className="font-semibold">{project.beneficiaries}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Project Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Project Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Partners */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.partners.map((partner, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    • {partner}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Get Involved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/members">Join Our Club</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
