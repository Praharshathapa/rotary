import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CelebrationsGallery() {
  // Charters Day and DG Visit photos
  const chartersDay = [
    { image: "Charters day and DG visit/page_109_img_001.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_002.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_003.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_004.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_005.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_006.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_007.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_109_img_008.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_001.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_002.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_003.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_004.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_005.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_006.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_007.png", title: "Charter Day and DG Visit", category: "Charter Day" },
    { image: "Charters day and DG visit/page_110_img_008.png", title: "Charter Day and DG Visit", category: "Charter Day" },
  ];

  // Picnic and Social Gathering photos
  const picnicPhotos = [
    { image: "picnic and social gathering/page_119_img_001.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_002.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_003.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_004.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_005.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_006.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_007.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
    { image: "picnic and social gathering/page_119_img_008.png", title: "Picnic and Social Gathering", category: "Social Gathering" },
  ];

  const celebrationPhotos = [...chartersDay, ...picnicPhotos];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Celebrations
        </h1>
        <p className="text-gray-600">
          Celebrating special occasions and milestones together
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {celebrationPhotos.map((photo, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <Image
                src={`/${photo.image}`}
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
        ))}
      </div>

      {celebrationPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No celebration photos available yet.</p>
        </div>
      )}
    </div>
  );
}

