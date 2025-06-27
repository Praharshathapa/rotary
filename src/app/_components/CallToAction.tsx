import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          Together, we can create lasting change in our community and around the world. 
          Become a part of our global network of community leaders.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/contact">Join Rotary</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

