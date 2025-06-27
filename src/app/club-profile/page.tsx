import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ClubProfile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Club Profile</h1>
      
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Club Goals Card */}
        <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">
              Club Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/global-goal.png"
                alt="Global Goal"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-600">Club Goals Content</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/global-goal.png"
                alt="Global Goal"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-600">District Goals Content</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/global-goal.png"
                alt="Global Goal"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-600">Global Goals Content</span>
            </div>
          </CardContent>
        </Card>

        {/* About Our Club Card */}
        <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">
              About Our Club
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 leading-relaxed p-4">
            <p>The Rotary Club of Kathmandu North was chartered in 1995 and has been serving the community for over 25 years. We are dedicated to creating positive change our in local community and contributing to global initiatives.</p>
          </CardContent>
        </Card>

        {/* Club Statistics Card */}
        <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-xl font-semibold text-gray-800">
              Club Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Founded:</span>
                <span className="font-medium">1995</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Total Members:</span>
                <span className="font-medium">50+</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Projects Completed:</span>
                <span className="font-medium">100+</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Community Impact:</span>
                <span className="font-medium">10,000+ lives</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}