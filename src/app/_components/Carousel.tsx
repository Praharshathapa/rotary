"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CarouselItem {
  image: string
  title: string
  description: string
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlayInterval?: number
}

export default function Carousel({ items, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }, [items.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && items.length > 1) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [nextSlide, autoPlayInterval, isHovered, items.length])

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide()
      } else if (event.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  if (items.length === 0) {
    return null
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center top" }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 flex items-end justify-center pb-16 sm:pb-20 md:pb-24">
            <div className="text-center text-white max-w-4xl px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-90">{item.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full border-white/30 hover:border-white/50 transition-all duration-200"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full border-white/30 hover:border-white/50 transition-all duration-200"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
