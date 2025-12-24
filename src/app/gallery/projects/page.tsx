import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type ProjectPhoto = {
  image: string;
  title: string;
  category: string;
  date?: string;
  description?: string;
  link?: string;
};

export default function ProjectsGallery() {
  // Education Support (Service Projects) photos
  const educationSupport: ProjectPhoto[] = [
    { image: "Education Support(Service Projects)/page_112_img_001.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_002.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_003.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_004.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_005.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_006.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_007.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_008.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_112_img_009.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_001.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_002.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_003.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_004.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_005.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_006.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_007.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_113_img_008.png", title: "Education Support Project", category: "Education Support" },
    { image: "Education Support(Service Projects)/page_111_img_001.png", title: "Education Support Project", category: "Education Support" },
  ];

  // Global Grant photos
  const globalGrant: ProjectPhoto[] = [
    { image: "global grant/page_114_img_001.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_002.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_003.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_004.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_005.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_006.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_007.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_008.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_009.png", title: "Global Grant Project", category: "Global Grant" },
    { image: "global grant/page_114_img_010.png", title: "Global Grant Project", category: "Global Grant" },
  ];

  // Existing project photos with links
  const featuredProjects: ProjectPhoto[] = [
    {
      title: "Talk program on PCOS",
      image: "images/Projects/PCOS.jpg",
      date: "February 1, 2024",
      description: "A comprehensive awareness program on PCOS and reproductive health",
      link: "/projects/pcos-awareness",
      category: "Health Awareness"
    },
    {
      title: "Dengue Awareness Campaign",
      image: "images/Projects/Dengue Awarness.jpg",
      date: "2024",
      description: "Dengue awareness programs conducted in Dang and Kathmandu",
      link: "/projects/dengue-awareness",
      category: "Health Awareness"
    },
    {
      title: "Medical Accessories and Laptop Handover",
      image: "images/Projects/medical accessories.jpg",
      date: "January 15, 2024",
      description: "Distribution of medical equipment and laptops in Bunkot, Gorkha",
      link: "/projects/medical-accessories",
      category: "Community Support"
    },
  ];

  const projectPhotos = [...featuredProjects, ...educationSupport, ...globalGrant];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Projects Gallery
        </h1>
        <p className="text-gray-600">
          Photos from our community service projects and initiatives
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projectPhotos.map((photo, index) => {
          const cardContent = (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="relative aspect-square">
                <Image
                  src={photo.image.startsWith('/') ? photo.image : `/${photo.image}`}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-500">{photo.category || "Project"}</p>
                {photo.date && <p className="text-sm text-gray-600 mt-1">{photo.date}</p>}
                {photo.description && <p className="text-sm text-gray-500 line-clamp-2 mt-1">{photo.description}</p>}
              </CardContent>
            </Card>
          );

          return photo.link ? (
            <Link key={index} href={photo.link}>
              {cardContent}
            </Link>
          ) : (
            <div key={index}>{cardContent}</div>
          );
        })}
      </div>

      {projectPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No project photos available yet.</p>
        </div>
      )}
    </div>
  );
}

