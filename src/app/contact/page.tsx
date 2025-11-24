'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Users, Calendar } from 'lucide-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Message sent successfully!')
    // Add actual form submission logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch with the Rotary Club of Kathmandu North. We'd love to hear from you and answer any questions you may have.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <Input id="phone" type="tel" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject *</label>
                  <Input id="subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                  <Textarea id="message" required className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
                {formStatus && (
                  <p className="text-green-600 text-center">{formStatus}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-900" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-gray-600">Hotel Yak & Yeti<br />Durbar Marg, Kathmandu 44600</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-900" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-600">+977 1 4248999</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-900" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-600">info@rotarykathmanduorth.org</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Meeting Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-900" />
                <div>
                  <p className="font-semibold">Every Saturday</p>
                  <p className="text-sm text-gray-600">7:00 AM - 8:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-blue-900" />
                <div>
                  <p className="font-semibold">Visitors Welcome</p>
                  <p className="text-sm text-gray-600">Join us for fellowship and service</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="/members">Meet Our Members</a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="/projects">View Our Projects</a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="/club-profile">About Our Club</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Find Us</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d85.3261047!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b7b5f10b0b1%3A0x0!2zMjfCsDQzJzAyLjEiTiA4NcKwMTknMzQuMCJF!5e0!3m2!1sen!2snp!4v1234567890"
              width="100%"
              height="400"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

