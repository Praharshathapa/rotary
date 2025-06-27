export default function Hero() {
    return (
      <section className="relative bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-4">Welcome to</h2>
              <h1 className="text-5xl font-bold text-yellow-500 mb-6">Rotary Club of Kathmandu North</h1>
              <p className="text-xl text-white mb-8">Creating hope in the world through service and leadership</p>
            </div>
            <div className="text-center bg-blue-800 p-8 rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Mr. Subash Ghimire - President"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Mr. Subash Ghimire</h3>
              <p className="text-xl text-yellow-500 mb-4">PRESIDENT</p>
              <p className="text-white">Rotary Year 2023-24</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  