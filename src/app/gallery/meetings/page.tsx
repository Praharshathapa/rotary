import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MeetingsGallery() {
  // BOD Meeting photos
  const bodMeetings = [
    { image: "/rotary/BOD meeting/page_106_img_001.png", title: "BOD Meeting", category: "BOD Meeting" },
    { image: "/rotary/BOD meeting/page_106_img_002.png", title: "BOD Meeting", category: "BOD Meeting" },
    { image: "/rotary/BOD meeting/page_106_img_003.png", title: "BOD Meeting", category: "BOD Meeting" },
    { image: "/rotary/BOD meeting/page_106_img_004.png", title: "BOD Meeting", category: "BOD Meeting" },
    { image: "/rotary/BOD meeting/page_106_img_005.png", title: "BOD Meeting", category: "BOD Meeting" },
    { image: "/rotary/BOD meeting/page_106_img_006.png", title: "BOD Meeting", category: "BOD Meeting" },
  ];

  // Weekly Regular Meeting photos
  const weeklyMeetings = [
    { image: "/rotary/weekly regular meeting/page_117_img_001.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_002.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_003.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_004.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_005.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_006.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_007.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_008.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_009.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_117_img_010.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_001.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_002.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_003.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_004.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_005.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_006.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_007.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_008.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_009.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_010.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_011.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
    { image: "/rotary/weekly regular meeting/page_118_img_012.png", title: "Weekly Regular Meeting", category: "Weekly Meeting" },
  ];

  // Rotaract, Interact and RCC photos
  const rotaractMeetings = [
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_001.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_002.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_003.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_004.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_005.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_007.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_008.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_115_img_009.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_001.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_002.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_003.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_004.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_005.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_006.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_007.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_008.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_009.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
    { image: "/rotary/Rotaract,Interact and RCC/page_116_img_010.png", title: "Rotaract, Interact and RCC", category: "Rotaract/Interact" },
  ];

  const allMeetings = [...bodMeetings, ...weeklyMeetings, ...rotaractMeetings];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Meetings
        </h1>
        <p className="text-gray-600">
          Photos from our regular club meetings and gatherings
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allMeetings.map((photo, index) => (
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

      {allMeetings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No meeting photos available yet.</p>
        </div>
      )}
    </div>
  );
}

