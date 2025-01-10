import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Members() {
  const memberCategories = [
    {
      id: "executive",
      label: "Executive Committee",
      members: [
        { name: "Mr. Subash Ghimire", role: "President", image: "/placeholder.svg?height=200&width=200" },
        { name: "Jane Doe", role: "Vice President", image: "/placeholder.svg?height=200&width=200" },
        { name: "John Smith", role: "Secretary", image: "/placeholder.svg?height=200&width=200" },
      ]
    },
    {
      id: "charter",
      label: "Charter Members",
      members: [
        { name: "Charter Member 1", role: "Founding Member", image: "/placeholder.svg?height=200&width=200" },
        { name: "Charter Member 2", role: "Founding Member", image: "/placeholder.svg?height=200&width=200" },
      ]
    },
    {
      id: "active",
      label: "Active Members",
      members: [
        { name: "Active Member 1", role: "Member", image: "/placeholder.svg?height=200&width=200" },
        { name: "Active Member 2", role: "Member", image: "/placeholder.svg?height=200&width=200" },
        { name: "Active Member 3", role: "Member", image: "/placeholder.svg?height=200&width=200" },
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Members</h1>
      <Tabs defaultValue="executive" className="w-full">
        <TabsList className="w-full justify-start">
          {memberCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {memberCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.members.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4"
                      />
                      <h3 className="font-bold text-base sm:text-lg">{member.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

