import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GalleryPhotos() {
  // Select a mix of photos from different gallery sections
  const galleryPhotos = [
    // Events
    { image: "Installation ceremony/page_105_img_001.png", title: "Installation Ceremony", category: "Events", link: "/gallery/events" },
    { image: "District acrivities/page_107_img_001.png", title: "District Activities", category: "Events", link: "/gallery/events" },
    { image: "Tree plantation/page_111_img_001.png", title: "Tree Plantation", category: "Events", link: "/gallery/events" },
    
    // Celebrations
    { image: "Charters day and DG visit/page_109_img_001.png", title: "Charter Day and DG Visit", category: "Celebrations", link: "/gallery/celebrations" },
    { image: "picnic and social gathering/page_119_img_001.png", title: "Picnic and Social Gathering", category: "Celebrations", link: "/gallery/celebrations" },
    
    // Meetings
    { image: "BOD meeting/page_106_img_001.png", title: "BOD Meeting", category: "Meetings", link: "/gallery/meetings" },
    { image: "weekly regular meeting/page_117_img_001.png", title: "Weekly Regular Meeting", category: "Meetings", link: "/gallery/meetings" },
    { image: "Rotaract,Interact and RCC/page_115_img_001.png", title: "Rotaract, Interact and RCC", category: "Meetings", link: "/gallery/meetings" },
    
    // Projects
    { image: "images/Projects/PCOS.jpg", title: "PCOS Awareness Program", category: "Projects", link: "/gallery/projects" },
    { image: "Education Support(Service Projects)/page_112_img_001.png", title: "Education Support Project", category: "Projects", link: "/gallery/projects" },
    { image: "global grant/page_114_img_001.png", title: "Global Grant Project", category: "Projects", link: "/gallery/projects" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Gallery
          </h2>
          <Button asChild variant="outline">
            <Link href="/gallery/events">View All Photos</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryPhotos.map((photo, index) => (
            <Link key={index} href={photo.link}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative aspect-square">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-900 mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-500">{photo.category}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

