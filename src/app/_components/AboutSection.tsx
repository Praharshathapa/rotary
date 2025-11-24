import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "50+",
      label: "Active Members",
      description: "Dedicated volunteers serving our community"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      number: "100+",
      label: "Projects Completed",
      description: "Making a lasting impact in Nepal"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      number: "10,000+",
      label: "Lives Impacted",
      description: "Through our service initiatives"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      number: "30",
      label: "Years of Service",
      description: "Since our charter in 1995"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Rotary Club of Kathmandu North
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chartered in 1995, the Rotary Club of Kathmandu North has been a beacon of hope and service 
              in Nepal for over three decades. We are part of Rotary International, a global network of 
              community leaders who work together to address the world's most persistent challenges.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our club focuses on seven key areas: promoting peace, fighting disease, providing clean water, 
              saving mothers and children, supporting education, growing local economies, and protecting the environment. 
              Through local service projects and global partnerships, we create lasting change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/club-profile">Learn More About Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/members">Meet Our Members</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/rotary/images/rotarylogo.png"
                alt="Rotary Club of Kathmandu North"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Service Above Self</h3>
                <p className="text-sm opacity-90">Our motto drives everything we do</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-blue-900">
                  {stat.number}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-gray-800 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
