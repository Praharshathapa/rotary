import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClubProfile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Club Profile</h1>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About Our Club</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              The Rotary Club of Kathmandu North was chartered in 1995 and has been serving
              the community for over 25 years. We are dedicated to creating positive change
              in our local community and contributing to global initiatives.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Club Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Founded: 1995</li>
              <li>Total Members: 50+</li>
              <li>Projects Completed: 100+</li>
              <li>Community Impact: 10,000+ lives</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

