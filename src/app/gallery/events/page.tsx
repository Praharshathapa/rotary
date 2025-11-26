import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function EventsGallery() {
  // Installation Ceremony photos
  const installationPhotos = [
    { image: "Installation ceremony/page_105_img_001.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_002.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_003.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_004.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_005.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_006.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_007.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_008.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_009.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_010.png", title: "Installation Ceremony", category: "Installation" },
    { image: "Installation ceremony/page_105_img_011.png", title: "Installation Ceremony", category: "Installation" },
  ];

  // District Activities photos
  const districtActivities = [
    { image: "District acrivities/page_107_img_001.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_002.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_003.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_004.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_005.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_006.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_007.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_107_img_008.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_001.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_002.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_003.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_004.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_005.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_006.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_007.png", title: "District Activities", category: "District Activities" },
    { image: "District acrivities/page_108_img_008.png", title: "District Activities", category: "District Activities" },
  ];

  // Tree Plantation photos
  const treePlantation = [
    { image: "Tree plantation/page_111_img_001.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_002.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_003.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_004.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_005.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_006.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_007.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_008.png", title: "Tree Plantation", category: "Tree Plantation" },
    { image: "Tree plantation/page_111_img_009.png", title: "Tree Plantation", category: "Tree Plantation" },
  ];

  const eventPhotos = [...installationPhotos, ...districtActivities, ...treePlantation];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Events Photos
        </h1>
        <p className="text-gray-600">
          Capturing memorable moments from our events and activities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {eventPhotos.map((photo, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
        ))}
      </div>

      {eventPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No event photos available yet.</p>
        </div>
      )}
    </div>
  );
}

