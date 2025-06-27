import { Button } from "@/components/ui/button"

export default function Membership() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Club</h2>
        <p className="text-xl mb-8">Become a part of our global network of community leaders and make a difference.</p>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
          Become a Member
        </Button>
      </div>
    </section>
  )
}

