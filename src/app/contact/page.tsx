'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Message sent successfully!')
    // Add actual form submission logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Contact Us</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" required className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
              {formStatus && (
                <p className="text-green-600 text-center">{formStatus}</p>
              )}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-900" />
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-900" />
              <p>+977 1 4123456</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-900" />
              <p>info@rotarykathmanduorth.org</p>
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261047!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b7b5f10b0b1%3A0x0!2zMjfCsDQzJzAyLjEiTiA4NcKwMTknMzQuMCJF!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="250"
                className="sm:h-[300px] lg:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

