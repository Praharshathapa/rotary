import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LeadershipMessages() {
  const messages = [
    {
      title: "RI President Message",
      name: "RIPR Gordon McInally",
      position: "Rotary International President 2024-25",
      image: "/images/goals/RI president.png",
      message: "Rotary's mission to create lasting change in our communities has never been more important. Through our collective efforts in the seven Areas of Focus, we continue to build a better world where peace, health, and prosperity flourish for all.",
      pdf: "/downloads/RI_President_Message_2024-25.pdf",
      theme: "Create Hope in the World"
    },
    {
      title: "District Governor Message",
      name: "DG Dr. Rajendra Man Shrestha",
      position: "District Governor 2024-25, RID 3292",
      image: "/images/goals/district .jpg",
      message: "As we embark on another year of service, let us focus on strengthening our clubs, expanding our impact, and building bridges of understanding across our diverse communities. Together, we can achieve extraordinary things.",
      pdf: "/downloads/DG_Message_2024-25.pdf",
      theme: "Rotary Opens Opportunities"
    },
    {
      title: "Club President Message",
      name: "Rtn. Pradeep Thapa",
      position: "President 2024-25, RC Kathmandu North",
      image: "/images/clubmembers/executive_members/Pradeep .jpg",
      message: "It is an honor to serve as President of our esteemed club. This year, we will focus on membership growth, impactful service projects, and strengthening our fellowship. Let us work together to make a meaningful difference in our community.",
      pdf: "/downloads/President_Message_2024-25.pdf",
      theme: "Service Above Self"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Leadership Messages
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our leaders about their vision for Rotary service and the impact we&apos;re making together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {messages.map((message, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={message.image}
                  alt={message.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{message.name}</h3>
                  <p className="text-sm opacity-90">{message.position}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900">
                  {message.title}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  <Quote className="h-4 w-4 mr-2" />
                  <span className="italic">{message.theme}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{message.message}&quot;
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={message.pdf} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Read Full Message
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/club-profile">View All Goals & Messages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
